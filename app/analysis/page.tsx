"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AnalysisPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("skillTwinData");

    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Analysis...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <div className="text-6xl mb-4">
            🎯
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Resume Analysis Complete
          </h1>

          <p className="text-gray-400 text-lg">
            AI has analyzed your resume and generated insights.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Skills */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              Detected Skills
            </h2>

            <div className="space-y-3">

              {data.strengths?.map((skill: string) => (
                <div
                  key={skill}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                >
                  ✅ {skill}
                </div>
              ))}

            </div>

          </div>

          {/* Gaps */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6 text-red-400">
              Missing Skills
            </h2>

            <div className="space-y-3">

              {data.gaps?.map((skill: string) => (
                <div
                  key={skill}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                >
                  ❌ {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Score */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Career Readiness Score
          </h2>

          <div className="w-full bg-gray-800 rounded-full h-5">

            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-5 rounded-full"
              style={{ width: `${data.readiness}%` }}
            />

          </div>

          <p className="mt-4 text-4xl font-bold text-indigo-400">
            {data.readiness}%
          </p>

        </div>

        {/* Summary */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            AI Summary
          </h2>

          <p className="text-gray-300 leading-8">
            Based on your resume, you demonstrate strong expertise in
            {data.strengths?.join(", ")}.
            Improving your knowledge in
            {" "}
            {data.gaps?.join(", ")}
            {" "}
            can significantly increase your career readiness and unlock
            more advanced opportunities.
          </p>

        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all"
        >
          Go To Dashboard →
        </button>

      </div>

    </div>
  );
}