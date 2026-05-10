import { motion } from "motion/react";
import { Target, Trophy, Github } from "lucide-react";

export function Achievements() {
  const achievements = [
    { title: "FAANG Interview Preparation", desc: "Rigorous daily practice and system design mocking.", icon: Target },
    { title: "LeetCode Daily Practice", desc: "Consistent algorithm solving focusing on optimization.", icon: Trophy },
    { title: "HENNGE Internship Applicant", desc: "Completed challenging technical screening process.", icon: Target },
    { title: "AI Product Builder", desc: "Shipped multiple AI-integrated platforms to active users.", icon: Trophy },
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/5" id="achievements">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-5xl font-black text-zinc-50 tracking-tighter mb-4">Milestones</h2>
               <p className="text-zinc-400 text-lg mb-8">
                 Continuous learning and active participation in the global developer ecosystem.
               </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {achievements.map((item, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-5 border-white/5 group hover:border-cyan-500/30 transition-colors"
                 >
                    <item.icon className="w-5 h-5 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-sm font-bold text-zinc-200 mb-1">{item.title}</h3>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass p-8 border-white/5 flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[50px] rounded-full point-events-none" />
             
             <div className="flex items-center gap-3 mb-6 relative z-10">
                <Github className="w-6 h-6 text-zinc-300" />
                <h3 className="text-xl font-bold text-zinc-100">Contribution Graph</h3>
             </div>
             
             <div className="w-full bg-[#0d1117] border border-white/5 rounded-lg p-4 relative z-10 overflow-hidden">
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
                {/* Simulated GitHub Graph */}
                <div className="grid grid-rows-7 grid-flow-col gap-1 auto-cols-max">
                   {Array.from({ length: 154 }).map((_, i) => {
                     // Generate some random looking activity
                     const intensity = Math.random();
                     let bgClass = "bg-[#161b22]";
                     if (intensity > 0.9) bgClass = "bg-[#39d353]";
                     else if (intensity > 0.7) bgClass = "bg-[#26a641]";
                     else if (intensity > 0.5) bgClass = "bg-[#006d32]";
                     else if (intensity > 0.3) bgClass = "bg-[#0e4429]";
                     
                     return (
                       <div key={i} className={`w-3 h-3 rounded-sm ${bgClass} opacity-80 hover:opacity-100 transition-opacity`} />
                     );
                   })}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] text-zinc-500 font-mono">1,024 contributions in the last year</span>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                     Less 
                     <div className="w-2 h-2 rounded-[1px] bg-[#161b22]" />
                     <div className="w-2 h-2 rounded-[1px] bg-[#0e4429]" />
                     <div className="w-2 h-2 rounded-[1px] bg-[#006d32]" />
                     <div className="w-2 h-2 rounded-[1px] bg-[#26a641]" />
                     <div className="w-2 h-2 rounded-[1px] bg-[#39d353]" />
                     More
                  </div>
                </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
