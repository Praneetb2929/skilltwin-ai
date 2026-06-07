# 🚀 SkillTwin AI

## AI-Powered Career Twin & Resume Intelligence Platform

SkillTwin AI creates a personalized digital career twin from a user's resume. It analyzes skills, identifies gaps, calculates career readiness, evaluates ATS compatibility, recommends projects, generates interview questions, and builds a customized learning roadmap.

---

## 🌟 Problem Statement

Students and early-career professionals often struggle to understand:

* What skills they already possess
* What skills they are missing
* Which career paths fit them best
* How industry-ready their profile is
* What projects they should build next

Most resume analyzers only provide feedback.

SkillTwin AI goes further by generating a complete career growth strategy.

---

## 💡 Solution

SkillTwin AI acts as an AI Career Coach.

Users upload their resume and receive:

* Skill Analysis
* Career Readiness Score
* ATS Score
* Learning Velocity Score
* Skill Gap Detection
* Career Path Recommendations
* Personalized Project Recommendations
* Learning Resources
* Interview Questions
* AI Generated Career Roadmap

---

## ✨ Features

### 📄 Resume Analysis

* PDF Resume Upload
* Automatic Resume Parsing
* Skill Extraction

### 🎯 Career Intelligence

* Career Readiness Score
* Learning Velocity Score
* ATS Score
* Resume Strength Analysis
* Skill Gap Detection

### 🧠 AI Recommendations

* Personalized Learning Roadmap
* Portfolio Project Recommendations
* Career Path Suggestions
* Job Recommendations
* ATS Improvement Suggestions

### 📚 Learning Assistant

* Curated Learning Resources
* Personalized Study Recommendations
* Industry-Relevant Topics

### 🎤 Interview Preparation

* AI Generated Interview Questions
* Answer Hints
* Resume-Specific Interview Practice

---

## 🏗️ Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes

### AI

* OpenRouter API
* GPT OSS 120B

### Storage

* Supabase Storage

### Resume Processing

* pdf-parse-fixed

### Deployment

* Vercel

---

## 🖥️ Architecture

```text
User Uploads Resume
          │
          ▼
   Supabase Storage
          │
          ▼
 Resume PDF Download
          │
          ▼
 PDF Text Extraction
          │
          ▼
 OpenRouter AI Analysis
          │
          ▼
 Structured JSON Output
          │
          ▼
 Dashboard Generation
```

---

## 📊 Dashboard Includes

### Career Scores

* Career Readiness
* Learning Velocity
* ATS Score

### Analysis

* Strengths
* Skill Gaps
* Resume Score Breakdown

### AI Insights

* ATS Suggestions
* Career Paths
* Job Recommendations

### Growth Plan

* Learning Resources
* Interview Questions
* Personalized Roadmap

---

## 🎯 Example Use Cases

### Students

* Discover missing skills
* Build stronger resumes
* Prepare for internships

### Job Seekers

* Improve ATS scores
* Identify career paths
* Prepare for interviews

### Career Switchers

* Understand skill gaps
* Get learning roadmaps
* Track career growth

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/skilltwin-ai.git

cd skilltwin-ai
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create:

```env
.env.local
```

Add:

```env
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY

NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### Run Locally

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## 🚀 Deployment

### Deploy on Vercel

1. Push project to GitHub
2. Import repository into Vercel
3. Add environment variables
4. Deploy

---

## 📈 Future Enhancements

* Resume Version Comparison
* Skill Progress Tracking
* AI Career Chat Assistant
* Live Job Matching
* Recruiter Mode
* Resume ATS Heatmaps
* Career Benchmarking
* PDF Report Export

---

## 👥 Team

Built with ❤️ during a Hackathon.

---

## 🏆 Why SkillTwin AI?

Most resume tools only analyze resumes.

SkillTwin AI creates a digital career twin that not only evaluates a profile but also guides users toward their next career milestone through personalized recommendations, learning paths, and actionable insights.

---

## 📄 License

MIT License
