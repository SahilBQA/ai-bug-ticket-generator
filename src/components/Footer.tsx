import { Bug } from "lucide-react";

export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-50">
          <Bug className="w-4 h-4" />
          <span className="text-xs font-bold tracking-tight">AI Bug Ticket Generator</span>
        </div>
        <p className="text-xs text-slate-400">
          Built for QA Engineers & Developers. Powered by Gemini AI.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/sahilit/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="https://github.com/SahilBQA" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">GitHub</a>
          <a href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">Privacy</a>
          <a href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">Terms</a>
          <a href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
