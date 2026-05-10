import { motion } from "motion/react";
import { Brain, Command, Cpu, Rocket } from "lucide-react";

export function WhyHireMe() {
  const reasons = [
    {
      title: "Systems Thinking",
      desc: "Approaching problems from architecture-first perspective. Analyzing bottlenecks and scaling parameters before implementation.",
      icon: Cpu
    },
    {
      title: "Product Mindset",
      desc: "Balancing engineering perfection with shipping velocity. Building features that drive actual user value and business metrics.",
      icon: Rocket
    },
    {
      title: "AI + Systems Advantage",
      desc: "Bridging the gap between ML models and production. Expert at wrapping LLMs in scalable, fault-tolerant API services.",
      icon: Brain
    },
    {
      title: "Fast Technical Pivot",
      desc: "Proven ability to rapidly onboard new technologies (from Kafka to Claude APIs) and integrate them into production environments.",
      icon: Command
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-zinc-900/30 border-t border-white/5" id="why-hire-me">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-black text-zinc-50 tracking-tighter mb-4">The Engineering Value</h2>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Why top-tier teams benefit from having an engineer who understands both deep system architecture and intelligent AI integration.
           </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
           {reasons.map((reason, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.1 }}
               className="glass p-8 flex items-start gap-6 border-white/5 hover:bg-white/[0.02] transition-colors"
             >
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                  <reason.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">{reason.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{reason.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
