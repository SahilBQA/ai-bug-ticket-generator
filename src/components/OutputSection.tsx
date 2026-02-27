import { motion, AnimatePresence } from "motion/react";
import { Terminal, Bug, ClipboardCheck, Copy } from "lucide-react";
import { BugTicket } from "../types";
import { cn } from "../lib/utils";

interface OutputSectionProps {
  ticket: BugTicket | null;
  loading: boolean;
  copyAll: () => void;
  copiedField: string | null;
}

export function OutputSection({ ticket, loading, copyAll, copiedField }: OutputSectionProps) {
  return (
    <section className="lg:col-span-7">
      <div className="bg-slate-100 p-2 sm:p-4 rounded-[32px] sm:rounded-[40px] h-full">
        <AnimatePresence mode="wait">
          {!ticket && !loading ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full min-h-[500px] border-2 border-dashed border-slate-300 rounded-[32px] flex flex-col items-center justify-center p-12 text-center space-y-4 bg-white/50"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Terminal className="w-8 h-8 text-slate-300" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-400">No Ticket Generated</p>
                <p className="text-xs text-slate-400 max-w-[240px]">
                  Your structured bug report will appear here once generated.
                </p>
              </div>
            </motion.div>
          ) : loading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full min-h-[500px] bg-white border border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center space-y-6 shadow-sm"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin" />
                <Bug className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-center space-y-2">
                <p className="font-bold text-slate-800">Gemini is thinking...</p>
                <p className="text-xs text-slate-500 animate-pulse">Structuring your bug report for maximum clarity</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200 rounded-[24px] sm:rounded-[32px] shadow-sm overflow-hidden h-full flex flex-col"
            >
              {/* Ticket Header */}
              <div className="p-4 sm:p-6 border-b border-slate-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-md text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap">
                    BUG TICKET
                  </div>
                  <div className={cn(
                    "px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap",
                    ticket?.priority === "High" ? "bg-red-50 text-red-600 border border-red-100" :
                    ticket?.priority === "Medium" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                    "bg-emerald-50 text-emerald-600 border border-emerald-100"
                  )}>
                    {ticket?.priority.toUpperCase()} PRIORITY
                  </div>
                </div>
                <button
                  onClick={copyAll}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-all active:scale-95"
                >
                  {copiedField === "all" ? (
                    <>
                      <ClipboardCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy All
                    </>
                  )}
                </button>
              </div>

              {/* Ticket Content */}
              <div className="p-8 space-y-10 overflow-y-auto custom-scrollbar flex-1">
                {/* Title */}
                <div className="space-y-2">
                  <label className="text-[10px] text-black/50 uppercase tracking-widest">Title</label>
                  <h3 className="text-lg font-bold text-black leading-tight">{ticket?.title}</h3>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-[10px] text-black/50 uppercase tracking-widest">Description</label>
                  <p className="text-sm text-black leading-relaxed">{ticket?.description}</p>
                </div>

                {/* Expected Result */}
                <div className="space-y-2">
                  <label className="text-[10px] text-black/50 uppercase tracking-widest">Expected Result</label>
                  <p className="text-sm text-black leading-relaxed">{ticket?.expectedResult}</p>
                </div>

                {/* Actual Result */}
                <div className="space-y-2">
                  <label className="text-[10px] text-black/50 uppercase tracking-widest">Actual Result</label>
                  <p className="text-sm text-black leading-relaxed">{ticket?.actualResult}</p>
                </div>

                {/* Steps */}
                <div className="space-y-8">
                  <label className="text-[10px] text-black/50 uppercase tracking-widest">Steps to Reproduce</label>
                  <div className="space-y-4">
                    {ticket?.stepsToReproduce.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <span className="flex-none w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium text-black/60">
                          {i + 1}
                        </span>
                        <p className="text-sm text-black pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata List (Single Column) */}
                <div className="space-y-8 pt-10 border-t border-slate-100">
                  {[
                    { label: "Reproduction Rate", value: ticket?.reproductionRate },
                    { label: "Impact", value: ticket?.impact },
                    { label: "Version", value: ticket?.version },
                    { label: "Environment", value: ticket?.environment },
                    { label: "Priority", value: ticket?.priority },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <label className="text-[10px] text-black/50 uppercase tracking-widest block">{item.label}</label>
                      <span className="text-sm text-black">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
