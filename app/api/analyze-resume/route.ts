import { NextResponse } from "next/server";

const pdf = require("pdf-parse-fixed");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resumeUrl = body.resumeUrl;

    // Download PDF
    const response = await fetch(resumeUrl);

    const buffer = Buffer.from(
      await response.arrayBuffer()
    );

    // Extract text
    const pdfData = await pdf(buffer);

    const resumeText = pdfData.text;

    console.log("========== RESUME TEXT ==========");
    console.log(resumeText.substring(0, 5000));
    console.log("================================");

    // AI Analysis
    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b:free",

          messages: [
            {
              role: "system",
              content: `
You are an elite AI Career Coach, Resume Analyzer, Hiring Manager, ATS Expert, Technical Mentor and Industry Advisor.

Analyze the resume deeply and return ONLY valid JSON.

Required JSON format:

{
  "strengths": [],
  "gaps": [],
  "readiness": 0,
  "velocity": 0,
  "atsScore": 0,

  "resumeScore": {
    "projects": 0,
    "skills": 0,
    "experience": 0,
    "cloud": 0,
    "leadership": 0
  },

  "atsSuggestions": [],

  "roadmap": [
    {
      "week": "",
      "title": "",
      "goal": ""
    }
  ],

  "projects": [
    {
      "title": "",
      "difficulty": "",
      "description": "",
      "skills": []
    }
  ],

  "careerPaths": [],

  "jobs": [
    {
      "role": "",
      "reason": ""
    }
  ],

  "resources": [
    {
      "topic": "",
      "course": "",
      "youtube": "",
      "difficulty": ""
    }
  ],

  "interviewQuestions": [
    {
      "question": "",
      "answerHint": ""
    }
  ],

  "summary": ""
}

Rules:

1. Extract strongest technical skills from the resume.

2. Identify missing skills required for:
- Senior Engineering
- Cloud
- DevOps
- AI
- ML
- MLOps
- Leadership

3. Generate:
- Career Readiness Score (0-100)
- Learning Velocity Score (0-100)
- ATS Score (0-100)

4. Fill resumeScore:
{
  "projects": 0,
  "skills": 0,
  "experience": 0,
  "cloud": 0,
  "leadership": 0
}

5. Generate exactly 5 ATS improvement suggestions.

6. Generate a practical 8-week roadmap.

7. Generate exactly 5 portfolio projects.

8. Recommend 5 realistic career paths.

9. Recommend 5 jobs best matched to the resume.

10. Each job:
{
  "role": "",
  "reason": ""
}

11. Recommend learning resources for major skill gaps.

12. Generate exactly 10 interview questions.

13. Interview questions must reflect:
- Resume skills
- Missing skills
- Real industry interviews

14. Summary must be concise and professional.

15. Be highly specific.

16. Tailor everything to the resume.

17. Do not hallucinate experience not present.

18. Return ONLY JSON.

19. No markdown.

20. No explanation outside JSON.
`,
            },
            {
              role: "user",
              content: resumeText,
            },
          ],

          temperature: 0.7,
        }),
      }
    );

    const result = await aiResponse.json();

    console.log("========== OPENROUTER ==========");
    console.log(JSON.stringify(result, null, 2));
    console.log("================================");

    const content =
      result?.choices?.[0]?.message?.content;

    console.log("========== AI CONTENT ==========");
    console.log(content);
    console.log("================================");

    if (!content) {
      throw new Error(
        `No content returned: ${JSON.stringify(result)}`
      );
    }

    // Clean AI response
    let cleanedContent = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON if model wraps text around it
    const firstBrace =
      cleanedContent.indexOf("{");

    const lastBrace =
      cleanedContent.lastIndexOf("}");

    if (
      firstBrace !== -1 &&
      lastBrace !== -1
    ) {
      cleanedContent = cleanedContent.slice(
        firstBrace,
        lastBrace + 1
      );
    }

    const parsedData = JSON.parse(
      cleanedContent
    );

    return NextResponse.json(parsedData);

  } catch (error) {
    console.error(
      "========== ANALYSIS ERROR =========="
    );

    console.error(error);

    console.error(
      "===================================="
    );

    return NextResponse.json(
      {
        success: false,
        error: "Analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}
