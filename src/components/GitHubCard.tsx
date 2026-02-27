import { Github } from "lucide-react";

export function GitHubCard() {
  return (
    <div className="pt-4">
      <a 
        href="https://github.com/SahilBQA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block p-4 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
            <Github className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Connect on GitHub</p>
            <p className="text-[10px] text-slate-400">Check out my QA automation projects</p>
          </div>
        </div>
      </a>
    </div>
  );
}
