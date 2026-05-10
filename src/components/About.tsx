import { motion } from "motion/react";
import { BookOpen, BrainCircuit, Code, Database, Server } from "lucide-react";

export function About() {
  const focuses = [
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "Django", icon: Server, color: "text-green-500" },
    { name: "Kafka", icon: Database, color: "text-orange-400" },
    { name: "REST APIs", icon: Server, color: "text-indigo-400" },
    { name: "Generative AI", icon: BrainCircuit, color: "text-purple-400" },
    { name: "System Design", icon: Server, color: "text-teal-400" },
    { name: "DSA", icon: BookOpen, color: "text-rose-400" },
  ];

  return (
    <section className="py-24 relative z-10" id="about">
      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-zinc-50 tracking-tighter">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-zinc-400 leading-relaxed">
                I am a B.Tech Computer Engineering student (CGPA 7.0) with a profound passion for architecting robust scalable systems and infusing them with artificial intelligence.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                My approach to software engineering is rooted in first principles thinking—understanding the core of a problem before writing a single line of code. I constantly explore the intersection of machine learning and large scale distributed systems.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                {focuses.map((focus, idx) => (
                  <motion.div
                    key={focus.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:border-zinc-400/30 hover:bg-zinc-400/5 transition-all text-zinc-400 hover:text-zinc-400"
                  >
                    <focus.icon className={`w-4 h-4 ${focus.color} opacity-80`} />
                    <span className="text-xs font-mono">{focus.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
