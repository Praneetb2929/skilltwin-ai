"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("skillTwinData");

    if (storedData) {
      const parsed = JSON.parse(storedData);
      console.log("DASHBOARD DATA:", parsed);
      setData(parsed);
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-3xl font-bold">
          Welcome Praneet 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Your AI Career Twin Dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 p-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-400">
            Career Readiness
          </p>

          <h2 className="text-5xl font-bold text-indigo-400 mt-3">
            {data.readiness || 0}%
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-400">
            Recommended Projects
          </p>

          <h2 className="text-5xl font-bold text-purple-400 mt-3">
            {data.projects?.length || 0}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-400">
            Learning Velocity
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-3">
            {data.velocity || 0}%
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-gray-400">
            ATS Score
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-3">
            {data.atsScore || 0}%
          </h2>
        </div>

      </div>

      {/* Strengths & Gaps */}
      <div className="grid lg:grid-cols-2 gap-6 px-8">

        {/* Strengths */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Strengths
          </h2>

          <div className="space-y-3">
            {data.strengths?.map(
              (skill: string, index: number) => (
                <div
                  key={index}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                >
                  ✅ {skill}
                </div>
              )
            )}
          </div>

        </div>

        {/* Skill Gaps */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Skill Gaps
          </h2>

          <div className="space-y-3">
            {data.gaps?.map(
              (skill: string, index: number) => (
                <div
                  key={index}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                >
                  ❌ {skill}
                </div>
              )
            )}
          </div>

        </div>

      </div>

      {/* AI Summary */}
      {data.summary && (
        <div className="px-8 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              AI Summary
            </h2>

            <p className="text-gray-300 leading-8">
              {data.summary}
            </p>

          </div>

        </div>
      )}
      {data.resumeScore && (

  <div className="px-8 mt-8">

```
<div className="bg-white/5 border border-white/10 rounded-3xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    Resume Score Breakdown
  </h2>

  <div className="grid md:grid-cols-5 gap-4">

    <div className="bg-indigo-500/10 rounded-xl p-4">
      <p className="text-gray-400">Projects</p>
      <h3 className="text-3xl font-bold">
        {data.resumeScore.projects}
      </h3>
    </div>

    <div className="bg-indigo-500/10 rounded-xl p-4">
      <p className="text-gray-400">Skills</p>
      <h3 className="text-3xl font-bold">
        {data.resumeScore.skills}
      </h3>
    </div>

    <div className="bg-indigo-500/10 rounded-xl p-4">
      <p className="text-gray-400">Experience</p>
      <h3 className="text-3xl font-bold">
        {data.resumeScore.experience}
      </h3>
    </div>

    <div className="bg-indigo-500/10 rounded-xl p-4">
      <p className="text-gray-400">Cloud</p>
      <h3 className="text-3xl font-bold">
        {data.resumeScore.cloud}
      </h3>
    </div>

    <div className="bg-indigo-500/10 rounded-xl p-4">
      <p className="text-gray-400">Leadership</p>
      <h3 className="text-3xl font-bold">
        {data.resumeScore.leadership}
      </h3>
    </div>

  </div>

</div>
```

  </div>
)}


      {data.atsSuggestions?.length > 0 && (

  <div className="px-8 mt-8">

```
<div className="bg-white/5 border border-white/10 rounded-3xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    ATS Improvement Suggestions
  </h2>

  <div className="space-y-3">

    {data.atsSuggestions.map(
      (tip: string, index: number) => (
        <div
          key={index}
          className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4"
        >
          💡 {tip}
        </div>
      )
    )}

  </div>

</div>
```

  </div>
)}

      {/* AI Recommended Projects */}
      {data.projects && (
        <div className="px-8 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              AI Recommended Projects
            </h2>

            <div className="space-y-5">

              {data.projects.map(
                (project: any, index: number) => (
                  <div
                    key={index}
                    className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5"
                  >
                    <h3 className="text-xl font-bold text-purple-400">
                      🚀 {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                      Difficulty: {project.difficulty}
                    </p>

                    <p className="mt-3 text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.skills?.map(
                        (skill: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}

      {/* Career Paths */}
      {data.careerPaths && (
        <div className="px-8 mt-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Suggested Career Paths
            </h2>

            <div className="flex flex-wrap gap-4">

              {data.careerPaths.map(
                (path: string, index: number) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-full bg-indigo-500/20 border border-indigo-500/20"
                  >
                    {path}
                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}

      {data.jobs?.length > 0 && (

  <div className="px-8 mt-8">

```
<div className="bg-white/5 border border-white/10 rounded-3xl p-6">

  <h2 className="text-2xl font-bold mb-6">
    Recommended Jobs
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    {data.jobs.map(
      (job: any, index: number) => (
        <div
          key={index}
          className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5"
        >
          <h3 className="text-xl font-bold text-cyan-400">
            {job.role}
          </h3>

          <p className="mt-3 text-gray-300">
            {job.reason}
          </p>
        </div>
      )
    )}

  </div>

</div>
```

  </div>
)}

      {/* Learning Resources */}
{data.resources?.length > 0 && (
  <div className="px-8 mt-8">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Learning Resources
      </h2>

      <div className="space-y-4">

        {data.resources.map(
          (resource: any, index: number) => (
            <div
              key={index}
              className="bg-green-500/10 border border-green-500/20 rounded-xl p-5"
            >
              <h3 className="font-bold text-lg text-green-400">
                📚 {resource.topic}
              </h3>

              <p className="text-gray-300 mt-2">
                <strong>Course:</strong> {resource.course}
              </p>

              <p className="text-gray-300 mt-2">
                <strong>YouTube:</strong> {resource.youtube}
              </p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                {resource.difficulty}
              </span>
            </div>
          )
        )}

      </div>

    </div>
  </div>
)}
{/* Interview Questions */}
{data.interviewQuestions?.length > 0 && (
  <div className="px-8 mt-8">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Interview Questions
      </h2>

      <div className="space-y-4">

        {data.interviewQuestions.map(
          (item: any, index: number) => (
            <div
              key={index}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg">
                ❓ {item.question}
              </h3>

              <p className="mt-3 text-gray-300">
                💡 {item.answerHint}
              </p>
            </div>
          )
        )}

      </div>

    </div>

  </div>
)}

      {/* Roadmap */}
      {data.roadmap && (
        <div className="px-8 mt-8 pb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              AI Generated Roadmap
            </h2>

            <div className="space-y-4">

              {data.roadmap.map(
                (step: any, index: number) => (
                  <div
                    key={index}
                    className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5"
                  >
                    {typeof step === "string" ? (
                      <>📍 {step}</>
                    ) : (
                      <>
                        <h3 className="font-bold text-lg">
                          📍 {step.title || step.phase || step.month}
                        </h3>

                        <p className="mt-2 text-gray-300">
                          {step.description || step.goal}
                        </p>
                      </>
                    )}
                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}


    </div>
  );
}