import { motion } from "motion/react";
import { Terminal, Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex justify-between items-center glass pointer-events-auto shadow-2xl shadow-zinc-900/10"
      >
        <div className="flex items-center gap-3 px-2">
          <div className="w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_10px_#10b981]" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline-block">System.getStatus() === "Online"</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-zinc-900/80 rounded-lg px-3 py-1.5 border border-white/5 font-mono text-xs text-zinc-400">
             <Terminal className="w-3.5 h-3.5 text-zinc-400" />
             <span className="text-zinc-400">$</span>
             <span>ssh shivam@portfolio</span>
          </div>
          
          <button className="bg-zinc-400/10 text-zinc-400 border border-zinc-400/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase hover:bg-zinc-400/20 hover:border-zinc-400/40 transition-all flex items-center gap-2">
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>
      </motion.div>
    </header>
  );
}
