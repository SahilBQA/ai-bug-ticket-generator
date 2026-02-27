# AI Bug Ticket Generator

A professional bug ticket generator powered by Gemini AI. Transform messy bug notes, Slack messages, or quick thoughts into structured, professional bug reports in seconds.

## Features

- **AI-Powered Structuring**: Uses Gemini 3 Flash to analyze raw input and generate professional bug tickets.
- **Structured Output**: Automatically generates Title, Description, Expected/Actual Results, Steps to Reproduce, and Metadata (Priority, Impact, etc.).
- **One-Click Copy**: Easily copy the entire ticket or individual fields to your clipboard.
- **Professional UI**: Clean, minimalist design optimized for productivity.
- **Developer Attribution**: Built by Sahil Bhatt.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **AI**: Google Gemini API (@google/genai)
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SahilBQA/ai-bug-ticket-generator.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   Create a `.env` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the Apache-2.0 License.
