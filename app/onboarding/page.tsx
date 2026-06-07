"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function OnboardingPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    try {
      setLoading(true);

      // Upload Resume
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("resumes")
        .upload(fileName, file);

      if (error) throw error;

      // Get Public URL
      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(fileName);

      const resumeUrl = publicUrlData.publicUrl;

      console.log("Resume URL:", resumeUrl);

      // Call Analysis API
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resumeUrl,
        }),
      });

      const analysisData = await response.json();

      console.log("Analysis:", analysisData);

      // Save Result
      localStorage.setItem(
        "skillTwinData",
        JSON.stringify(analysisData)
      );

      localStorage.setItem(
        "resumeUrl",
        resumeUrl
      );

      router.push("/analysis");

    } catch (error: any) {
      console.error(error);
      alert(error.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-3xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">
            Build Your SkillTwin
          </h1>

          <p className="text-gray-400 text-lg">
            Upload your resume and let AI analyze your skills,
            identify gaps, and generate a personalized roadmap.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Resume Upload
          </h2>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="w-full p-4 rounded-xl bg-white/5 border border-gray-700"
          />

          {file && (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
              Selected: {file.name}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {loading
              ? "Uploading Resume..."
              : "Generate My SkillTwin"}
          </button>

        </div>

      </div>

    </div>
  );
}