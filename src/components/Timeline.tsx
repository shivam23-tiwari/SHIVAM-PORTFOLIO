import { motion } from "motion/react";
import { GitBranch, Box, Code, Cpu, LineChart } from "lucide-react";

export function Timeline() {
  const steps = [
    {
      title: "Data Structures & Algorithms",
      desc: "500+ LeetCode problems. Foundation in algorithmic optimization and problem-solving.",
      icon: Code,
      highlight: "Algorithms"
    },
    {
      title: "System Architecture",
      desc: "Scalable REST APIs. Relational database design. MVC frameworks.",
      icon: Box,
      highlight: "Django / Node.js"
    },
    {
      title: "Distributed Systems",
      desc: "Event-driven architecture. High-throughput message streaming. Microservices.",
      icon: GitBranch,
      highlight: "Kafka / Redis"
    },
    {
      title: "AI Engineering",
      desc: "Generative AI pipelines. Context-aware prompt engineering. RAG implementations.",
      icon: Cpu,
      highlight: "LLMs / LangChain"
    }
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="timeline">
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-0" />
      
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-5 gap-12 items-center">
           <div className="md:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                 <div className="flex items-center gap-2 mb-4">
                   <LineChart className="w-5 h-5 text-cyan-400" />
                   <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Evolution</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-zinc-50 tracking-tighter leading-tight mb-4">System Architecture Timeline</h2>
                 <p className="text-zinc-400 text-lg">
                   A deliberate progression from fundamental problem solving to building complex, intelligent, and distributed architectures.
                 </p>
                 
                 <div className="mt-8 p-4 glass border-white/5 rounded-xl border-l-2 border-l-cyan-500">
                    <p className="text-sm text-zinc-300 font-mono italic">
                      "Mastering scale before introducing AI intelligence ensures that systems don't just think smartly, but perform flawlessly."
                    </p>
                 </div>
              </motion.div>
           </div>
           
           <div className="md:col-span-3 relative">
              {/* Connecting Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-zinc-500/30 to-transparent hidden md:block" />
              
              <div className="space-y-6">
                 {steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="relative pl-0 md:pl-16 group"
                    >
                       <div className="hidden md:flex absolute left-0 top-1/2 -tranzinc-y-1/2 w-14 h-14 bg-[#020617] rounded-full border-2 border-zinc-800 group-hover:border-cyan-500 items-center justify-center z-10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                          <step.icon className="w-6 h-6 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                       </div>
                       
                       <div className="glass p-6 rounded-2xl border-white/5 group-hover:border-white/10 transition-colors bg-gradient-to-r hover:from-white/[0.03] hover:to-transparent">
                          <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-bold text-zinc-100">{step.title}</h4>
                             <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded">{step.highlight}</span>
                          </div>
                          <p className="text-sm text-zinc-400">
                             {step.desc}
                          </p>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
