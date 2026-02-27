import { useState } from "react";
import { GoogleGenAI, Type } from "@google/genai";
import { BugTicket } from "./types";
import { INITIAL_PROMPT } from "./constants";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { InputSection } from "./components/InputSection";
import { OutputSection } from "./components/OutputSection";

export default function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<BugTicket | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateTicket = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Raw Bug Description: ${input}`,
        config: {
          systemInstruction: INITIAL_PROMPT,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              expectedResult: { type: Type.STRING },
              actualResult: { type: Type.STRING },
              stepsToReproduce: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING } 
              },
              reproductionRate: { type: Type.STRING },
              impact: { type: Type.STRING },
              priority: { type: Type.STRING },
              version: { type: Type.STRING },
              environment: { type: Type.STRING },
            },
            required: [
              "title", "description", "expectedResult", "actualResult", 
              "stepsToReproduce", "reproductionRate", "impact", 
              "priority", "version", "environment"
            ],
          },
        },
      });

      const result = JSON.parse(response.text || "{}") as BugTicket;
      setTicket(result);
    } catch (err) {
      console.error("Generation failed:", err);
      setError("Failed to generate ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const copyAll = () => {
    if (!ticket) return;
    const allText = `
TITLE: ${ticket.title}

DESCRIPTION:
${ticket.description}

EXPECTED RESULT:
${ticket.expectedResult}

ACTUAL RESULT:
${ticket.actualResult}

STEPS TO REPRODUCE:
${ticket.stepsToReproduce.map((step, i) => `${i + 1}. ${step}`).join("\n")}

REPRODUCTION RATE: ${ticket.reproductionRate}
IMPACT: ${ticket.impact}
VERSION: ${ticket.version}
ENVIRONMENT: ${ticket.environment}
PRIORITY: ${ticket.priority}
    `.trim();
    copyToClipboard(allText, "all");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <InputSection 
            input={input}
            setInput={setInput}
            loading={loading}
            generateTicket={generateTicket}
            error={error}
          />
          
          <OutputSection 
            ticket={ticket}
            loading={loading}
            copyAll={copyAll}
            copiedField={copiedField}
          />
        </div>
      </main>

      <Footer />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
      `}</style>
    </div>
  );
}
