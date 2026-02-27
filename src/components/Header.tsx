import { Bug } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Bug className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-slate-800">AI Bug Ticket Generator</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Version 1.0</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/sahilit/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Developed by Sahil Bhatt
          </a>
          <div className="h-4 w-px bg-slate-200" />
          <a 
            href="https://github.com/SahilBQA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <div className="h-4 w-px bg-slate-200" />
          <span className="text-xs font-medium text-slate-400">v1.0.0</span>
        </div>
      </div>
    </header>
  );
}
