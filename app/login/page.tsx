"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for verification!");
    }
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/onboarding";
    }
  };

 return (
  <div className="min-h-screen bg-black overflow-hidden relative">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[180px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full"></div>

    <div className="relative z-10 min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 px-20">

        <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8">
          <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
          <span className="text-indigo-300 text-sm">
            AI Career Intelligence
          </span>
        </div>

        <h1 className="text-7xl font-bold text-white leading-tight">
          Your AI
          <br />
          Career Twin
        </h1>

        <p className="text-xl text-gray-400 mt-8 max-w-xl">
          Analyze your skills, discover career gaps, and
          generate a personalized roadmap powered by AI.
        </p>

        <div className="flex flex-wrap gap-3 mt-10">

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            AWS
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            Docker
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            Kubernetes
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            Terraform
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            DevOps
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
            AI
          </span>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-6">

        <div className="w-full max-w-lg">

          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-10 shadow-[0_0_80px_rgba(99,102,241,0.15)]">

            <div className="text-center mb-8">

              <h2 className="text-5xl font-bold text-white mb-3">
                SkillTwin AI
              </h2>

              <p className="text-gray-400">
                Build your AI-powered career twin
              </p>

            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 px-5 py-4 rounded-2xl bg-white/5 border border-gray-700 text-white outline-none focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-5 py-4 rounded-2xl bg-white/5 border border-gray-700 text-white outline-none focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={signUp}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition-all py-4 rounded-2xl text-white font-semibold mb-3"
            >
              Create Account
            </button>

            <button
              onClick={signIn}
              className="w-full bg-emerald-500 hover:bg-emerald-600 hover:scale-[1.02] transition-all py-4 rounded-2xl text-white font-semibold"
            >
              Sign In
            </button>

            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-2xl font-bold text-indigo-400">
                  78%
                </p>
                <p className="text-xs text-gray-400">
                  Career Readiness
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-2xl font-bold text-purple-400">
                  12 Weeks
                </p>
                <p className="text-xs text-gray-400">
                  AI Roadmap
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                <p className="text-2xl font-bold text-green-400">
                  500+
                </p>
                <p className="text-xs text-gray-400">
                  Career Paths
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
);
}