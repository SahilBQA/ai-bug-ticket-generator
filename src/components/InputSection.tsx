import { Loader2, Zap, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { LinkedInCard } from "./LinkedInCard";
import { GitHubCard } from "./GitHubCard";

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  generateTicket: () => void;
  error: string | null;
}

export function InputSection({ input, setInput, loading, generateTicket, error }: InputSectionProps) {
  return (
    <section className="lg:col-span-5 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">Generate Ticket</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Paste your raw bug notes, Slack messages, or quick thoughts. Our AI will structure it into a professional ticket.
        </p>
      </div>

      <div className="bg-slate-100/50 p-1.5 sm:p-2 rounded-[24px] sm:rounded-[32px] border-4 sm:border-8 border-slate-200/30">
        <div className="relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Example: The login button is broken on Safari. It just spins forever when I click it. I expected to see the dashboard. I'm on version 2.1..."
            className="w-full h-48 sm:h-64 p-4 sm:p-5 bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none text-sm leading-relaxed placeholder:text-slate-300"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              {input.length} characters
            </span>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600/10 p-1.5 rounded-2xl">
        <button
          onClick={generateTicket}
          disabled={loading || !input.trim()}
          className={cn(
            "w-full py-4 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg",
            loading || !input.trim() 
              ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" 
              : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing Bug...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 fill-current" />
              Generate Bug Ticket
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
          <p className="text-xs text-red-600 font-medium">{error}</p>
        </div>
      )}

      <div className="pt-6 border-t border-slate-200">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Pro Tips</h3>
        <ul className="space-y-3">
          {[
            "Mention the browser or device used",
            "Describe what you expected to happen",
            "Include any error messages you saw"
          ].map((tip, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <LinkedInCard />
      <GitHubCard />
    </section>
  );
}
