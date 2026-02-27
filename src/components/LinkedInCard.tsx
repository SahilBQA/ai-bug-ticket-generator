import { Linkedin } from "lucide-react";

export function LinkedInCard() {
  return (
    <div className="pt-8">
      <a 
        href="https://www.linkedin.com/in/sahilit/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
            <Linkedin className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Connect on LinkedIn</p>
            <p className="text-[10px] text-slate-400">Ensuring software excellence & quality</p>
          </div>
        </div>
      </a>
    </div>
  );
}
