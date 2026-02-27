# AI Bug Ticket Generator 🐞

A specialized productivity tool designed for **Quality Assurance Engineers** and **Developers**. This application leverages the power of **Gemini AI** to transform raw, unstructured bug notes, Slack messages, or quick thoughts into professional, industry-standard bug reports in seconds.

## 🎯 Why This Tool?

In a fast-paced QA environment, documenting bugs clearly is crucial but time-consuming. This tool bridges the gap between "finding a bug" and "reporting a bug" by automating the structuring process, ensuring that every ticket is clear, actionable, and professional.

## 🚀 Features

- **Intelligent QA Analysis**: Uses Gemini 3 Flash to parse messy descriptions and extract critical bug components.
- **Professional Structuring**: Automatically generates:
  - **Concise Title**: Scannable and descriptive.
  - **Clear Description**: High-level summary of the issue.
  - **Expected vs. Actual Results**: Clearly defined success criteria.
  - **Sequential Steps to Reproduce**: Easy-to-follow instructions for developers.
  - **Smart Metadata**: AI-estimated Priority, Impact, and Reproduction Rate.
- **Efficiency First**: One-click "Copy All" functionality to quickly paste into Jira, GitHub Issues, or Trello.
- **Modern QA Interface**: A clean, focused UI built with React and Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **AI Engine**: Google Gemini API (`@google/genai`)
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React

## 🏁 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SahilBQA/ai-bug-ticket-generator.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. **Launch the App**:
   ```bash
   npm run dev
   ```

## 🤝 Connect with Me

I'm a **Quality Assurance Professional** dedicated to ensuring software excellence and building tools that improve the development lifecycle.

- **LinkedIn**: [linkedin.com/in/sahilit/](https://www.linkedin.com/in/sahilit/)
- **GitHub**: [github.com/SahilBQA](https://github.com/SahilBQA)

## 📄 License

This project is licensed under the Apache-2.0 License.
