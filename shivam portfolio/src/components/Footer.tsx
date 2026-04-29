import { motion } from "motion/react";
import { Mail, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="relative z-10 pt-32 pb-12 overflow-hidden" id="contact">
      <div className="absolute top-0 left-1/2 -tranzinc-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -tranzinc-x-1/2 w-[800px] h-[400px] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-50 mb-6 tracking-tighter">
             Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Handshake</span>
           </h2>
           <p className="text-zinc-400 max-w-xl mx-auto text-lg">
             Currently open to new opportunities targeting robust engineering roles.
           </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="glass p-8 md:p-12 mb-24 border-white/5 relative mx-auto max-w-2xl text-left"
        >
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">Identifier</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/[0.03] transition-all"
                      placeholder="John Doe"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">Return Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/[0.03] transition-all"
                      placeholder="john@company.com"
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">Payload</label>
                 <textarea 
                   required
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   rows={4}
                   className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/[0.03] transition-all resize-none"
                   placeholder="Let's build something scalable..."
                 />
              </div>
              <button 
                type="submit" 
                disabled={status !== "idle"}
                className="w-full bg-zinc-50 text-zinc-950 px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "idle" && <><Send className="w-4 h-4" /> Transmit Data</>}
                {status === "sending" && <span className="animate-pulse">Transmitting...</span>}
                {status === "success" && <span className="text-zinc-600">Payload Delivered</span>}
              </button>
           </form>
                      <div className="mt-8 flex justify-center">
              <a href="mailto:shivamtiwari18107@gmail.com" className="text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                 <Mail className="w-3.5 h-3.5" />
                 Or direct connection: shivamtiwari18107@gmail.com
              </a>
           </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-xs font-mono uppercase tracking-widest border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Shivam Tiwari. <span className="hidden sm:inline">System stable.</span></p>
          <div className="flex gap-8">
            <a href="https://github.com/shivam23-tiwari" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/shivam-tiwari-401806286" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
