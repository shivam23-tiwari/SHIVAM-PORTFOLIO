import { motion } from "motion/react";
import { Layers, Terminal, Database, Brain } from "lucide-react";

export function TechStack() {
  const categories = [
    {
      title: "Languages",
      icon: Terminal,
      skills: ["Python", "C++"],
    },
    {
      title: "Core Systems",
      icon: Layers,
      skills: ["Django"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "H2 Database"],
    },
    {
      title: "AI Engineering",
      icon: Brain,
      skills: ["Claude API", "OpenAI", "Prompt Eng.", "Speech-to-Text", "NLP"],
    },
  ];

  return (
    <section className="py-24 relative z-10" id="tech-stack">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-black text-zinc-50 mb-4 tracking-tighter">Technical Arsenal</h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             A comprehensive overview of the technologies I utilize to build scalable and intelligent solutions.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           {categories.map((category, idx) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               whileHover={{ y: -5 }}
               className="glass p-8 rounded-2xl relative overflow-hidden group border-white/5 hover:border-cyan-400/30 transition-all flex flex-col items-center text-center"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                   <category.icon className="w-6 h-6 text-zinc-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-100 mb-6 relative z-10 group-hover:text-cyan-400 transition-colors">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center relative z-10">
                   {category.skills.map((skill, skillIdx) => (
                     <span 
                       key={skillIdx} 
                       className="px-3 py-1 text-xs font-mono bg-black/40 text-zinc-400 rounded-lg border border-white/5 transition-colors group-hover:text-zinc-200 group-hover:border-cyan-400/20"
                     >
                       {skill}
                     </span>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
