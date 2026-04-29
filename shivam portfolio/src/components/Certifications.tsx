import { motion } from "motion/react";
import { Award, Code2, Database, Network } from "lucide-react";

const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    date: "Jan 2026",
    skills: ["Kafka", "H2 Database", "REST APIs", "Event Streaming"],
    icon: Network,
    color: "from-cyan-500/20 to-sky-500/5"
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Academy",
    date: "2025",
    skills: ["Prompt Engineering", "Claude API", "LLM Integration"],
    icon: Code2,
    color: "from-indigo-500/20 to-violet-500/5"
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud / Simplilearn",
    date: "Mar 2026",
    skills: ["GenAI", "Google Cloud", "AI Models"],
    icon: Database,
    color: "from-purple-500/20 to-fuchsia-500/5"
  }
];

export function Certifications() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5" id="certifications">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
           <h2 className="text-3xl md:text-5xl font-black text-zinc-50 tracking-tighter mb-4">Credentials</h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Industry-recognized validations of technical proficiency across AI and Systems Engineering.
           </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
           {certifications.map((cert, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="glass p-8 relative overflow-hidden group border-white/5 hover:border-zinc-600 transition-colors flex flex-col h-full"
             >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                   <cert.icon className="w-6 h-6 text-zinc-300" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-100 mb-2 relative z-10 leading-snug">{cert.title}</h3>
                <div className="flex justify-between items-center mb-6 relative z-10">
                   <span className="text-sm font-medium text-zinc-400">{cert.issuer}</span>
                   <span className="text-[10px] font-mono text-zinc-500 max-w-fit px-2 py-1 rounded bg-white/5 border border-white/5">{cert.date}</span>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                   <div className="flex flex-wrap gap-2">
                     {cert.skills.map((skill, i) => (
                       <span key={i} className="text-[10px] font-mono text-zinc-400">
                         {i > 0 && <span className="opacity-30 mr-2">•</span>}{skill}
                       </span>
                     ))}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
