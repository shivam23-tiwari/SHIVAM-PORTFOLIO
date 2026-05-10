import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone, Terminal } from "lucide-react";
import { HeroScene } from "./Scene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">System: Online | Available for AI/ML Roles</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-50 leading-tight">
              Shivam <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Tiwari</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg font-mono text-sm">
              AI/ML Engineer
            </p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 text-sm bg-white/5 w-fit px-4 py-2 rounded-xl border border-white/5 glass">
             <MapPin className="w-4 h-4 text-zinc-400" />
             Surat, Gujarat, India
          </div>
          
          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Building intelligent AI-powered products and scalable systems. Engineering high-performance architectures and LLM-integrated platforms with a production-first mindset.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="mailto:shivamtiwari18107@gmail.com" 
              className="inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a 
              href="https://github.com/shivam23-tiwari" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-zinc-400/50 hover:bg-zinc-400/10 transition-colors text-zinc-400 hover:text-zinc-400 bg-white/5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shivam-tiwari-401806286" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-zinc-400/50 hover:bg-zinc-400/10 transition-colors text-zinc-400 hover:text-zinc-400 bg-white/5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="tel:+919974894893" 
              className="p-3 rounded-full border border-white/10 hover:border-zinc-400/50 hover:bg-zinc-400/10 transition-colors text-zinc-400 hover:text-zinc-400 bg-white/5"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
             <div className="flex items-center gap-3 bg-zinc-900/50 rounded-lg px-4 py-3 border border-white/5 font-mono text-xs text-zinc-400 inline-flex">
               <Terminal className="w-4 h-4 text-zinc-400" />
               <span className="text-zinc-400">~</span>
               <span className="text-zinc-500">/portfolio</span>
               <span className="text-zinc-400">$</span>
               <span className="text-zinc-200">./deploy_skills.sh --role="AI_Engineer"</span>
               <motion.span 
                 animate={{ opacity: [1, 0] }} 
                 transition={{ repeat: Infinity, duration: 0.8 }}
                 className="w-2 h-4 bg-zinc-400 inline-block align-middle"
               />
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-[500px] lg:h-[650px] w-full relative"
        >
           <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
