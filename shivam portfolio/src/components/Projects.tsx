import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Github, ExternalLink, ArrowRight, Layout, Database, Mic } from "lucide-react";
import { MouseEvent } from "react";

const projects = [
  {
    title: "ResumeIQ",
    description: "AI-powered resume analyzer that gives ATS score, keyword gap analysis and optimization suggestions. Employs advanced NLP for structured data extraction.",
    tags: ["React", "Node.js", "Claude API", "PDF.js"],
    color: "from-cyan-500/20 to-transparent",
    border: "group-hover:border-cyan-500/50",
    index: "01",
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Processing", value: "1.2s" }
    ],
    icon: Layout
  },
  {
    title: "AI Mock Interviewer",
    description: "AI interview coach generating adaptive questions and scoring responses. Architected modular system with REST API endpoints for multiple interview domains.",
    tags: ["React", "Python", "Speech API", "Claude API"],
    color: "from-indigo-500/20 to-transparent",
    border: "group-hover:border-indigo-500/50",
    index: "02",
    metrics: [
      { label: "Beta Users", value: "30+" },
      { label: "Latency", value: "<800ms" }
    ],
    icon: Mic
  },
  {
    title: "JPMorgan SWE Sim",
    description: "Backend engineering simulation involving event streaming, high-throughput message processing, and secure API architecture design.",
    tags: ["Kafka", "H2 Database", "REST APIs", "Java"],
    color: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50",
    index: "03",
    metrics: [
      { label: "Throughput", value: "10k msg/s" },
      { label: "Reliability", value: "99.9%" }
    ],
    icon: Database
  },
];

function InteractiveCard({ project, idx }: { project: any, idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`glass group relative flex flex-col justify-between transition-all border border-white/5 hover:-tranzinc-y-1 ${project.border} col-span-1`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[15px] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(56,189,248,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className={`absolute inset-0 rounded-[15px] bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-zinc-500/30 transition-colors shadow-lg">
                <project.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-400 transition-colors" />
             </div>
             <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">{project.index}</span>
          </div>
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors"></div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-zinc-100 mb-2 tracking-tight group-hover:text-zinc-400 transition-colors">{project.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
        
        {/* Mock Metrics / Dashboard details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
           {project.metrics.map((m: any, i: number) => (
             <div key={i} className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{m.label}</span>
                <span className="font-mono text-sm text-zinc-300">{m.value}</span>
             </div>
           ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-900/50 text-zinc-400 border border-white/5 group-hover:border-zinc-500/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
          <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-400 transition-colors">
            <Github className="w-4 h-4" />
            Code
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-400 transition-colors">
            <ExternalLink className="w-4 h-4" />
            Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="py-32 relative z-10" id="projects">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-zinc-500"></div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-50 mb-4 tracking-tighter">Production Builds</h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Architecting state-of-the-art products bridging AI models and distributed systems.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="https://github.com/shivam23-tiwari"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-50 text-sm font-bold uppercase tracking-wider group bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-all shadow-xl"
          >
            GitHub Archive
            <ArrowRight className="w-4 h-4 group-hover:tranzinc-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <InteractiveCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
