import { motion, AnimatePresence } from "motion/react";
import { Award, Code2, Database, Network, Cloud, X, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const certifications = [
  {
    id: "jpmorgan",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. · Forage",
    date: "Jan 2026",
    skills: ["Kafka", "H2 Database", "REST APIs", "Event Streaming"],
    icon: Network,
    color: "from-cyan-500/20 to-sky-500/5",
    type: "html",
    content: {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "January 26th, 2026",
      signature: "Tom Brunskill, Co-Founder of Forage"
    } 
  },
  {
    id: "google",
    title: "Introduction to Generative AI Studio",
    issuer: "Google",
    date: "Mar 2026",
    skills: ["GenAI", "Google Cloud", "AI Models"],
    icon: Database,
    color: "from-purple-500/20 to-fuchsia-500/5",
    type: "html",
    content: {
      title: "Introduction to Generative AI Studio",
      issuer: "Google",
      date: "8th March 2026",
      code: "9934090"
    }
  },
  {
    id: "claude",
    title: "Claude 101",
    issuer: "Anthropic Academy",
    date: "2025",
    skills: ["Prompt Engineering", "Claude API", "LLM Integration"],
    icon: Code2,
    color: "from-indigo-500/20 to-violet-500/5",
    type: "html",
    content: {
      title: "Claude 101",
      issuer: "Anthropic",
      date: "2025"
    }
  },
  {
    id: "ibm",
    title: "Introduction to Cloud",
    issuer: "IBM · Cognitive Class",
    date: "May 2026",
    skills: ["Cloud Computing", "Infrastructure", "IBM Cloud"],
    icon: Cloud,
    color: "from-blue-500/20 to-blue-500/5",
    type: "html",
    content: {
      title: "Introduction to Cloud",
      issuer: "IBM · CC0101EN · Cognitive Class",
      date: "May 10, 2026",
      verifyLink: "https://courses.cognitiveclass.ai/certificates/a70006cc351a47338f39ce484d9bd50c"
    }
  }
];

function CertModal({ cert, onClose }: { cert: typeof certifications[0], onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-zinc-400 hover:text-white rounded-full transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-6 pr-8">
            {cert.title} — <span className="text-zinc-400">{cert.issuer.split('·')[0].trim()}</span>
          </h3>
          
          {cert.type === 'image' ? (
            <div className="w-full flex items-center justify-center p-2 md:p-8 bg-zinc-950/50 rounded-xl">
               <img 
                 src={cert.content as string} 
                 alt={cert.title} 
                 className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl" 
               />
               <p className="absolute bottom-4 text-xs text-zinc-500 text-center w-full left-0">
                 (Please upload {cert.content as string} to the public folder)
               </p>
            </div>
          ) : (
            <div className="p-8 md:p-12 text-center bg-zinc-50 rounded-xl shadow-inner">
              <div className="text-6xl mb-6">🎓</div>
              {cert.id === 'ibm' ? (
                <>
                  <div className="text-sm font-medium text-zinc-500 mb-1 uppercase tracking-widest">This is to certify that</div>
                  <div className="text-3xl font-black text-zinc-900 mb-2 tracking-tight">Shivam Tiwari</div>
                  <div className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">successfully completed</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{(cert.content as any).title}</div>
                  <div className="text-sm font-bold text-zinc-700 mb-1">{(cert.content as any).issuer}</div>
                  <div className="text-sm font-mono text-zinc-500 mb-6">{(cert.content as any).date}</div>
                  {(cert.content as any).verifyLink && (
                    <a href={(cert.content as any).verifyLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </a>
                  )}
                </>
              ) : cert.id === 'jpmorgan' ? (
                <>
                   <div className="text-xl font-bold text-zinc-800 mb-6 tracking-wide">{(cert.content as any).issuer}</div>
                   <div className="text-4xl font-black text-zinc-900 mb-6 tracking-tight">Shivam Tiwari</div>
                   <div className="text-2xl font-bold text-zinc-800 mb-2">{(cert.content as any).title}</div>
                   <div className="text-lg font-medium text-zinc-600 mb-6">Certificate of Completion</div>
                   <div className="text-sm font-mono text-zinc-500 mb-8">{(cert.content as any).date}</div>
                   <div className="border-t border-zinc-200 pt-4 mt-8 max-w-xs mx-auto">
                     <div className="text-xs font-bold text-zinc-700">{(cert.content as any).signature}</div>
                   </div>
                </>
              ) : cert.id === 'claude' ? (
                <>
                   <div className="inline-block px-4 py-2 border border-zinc-300 rounded-full text-xs font-bold text-zinc-600 tracking-widest uppercase mb-8">Certificate of Completion</div>
                   <div className="text-4xl font-serif text-zinc-900 mb-4">Shivam Tiwari</div>
                   <div className="text-sm font-medium text-zinc-500 mb-4">has completed</div>
                   <div className="text-3xl font-bold text-zinc-900 mb-12">{(cert.content as any).title}</div>
                   <div className="text-lg font-bold tracking-widest text-zinc-800">{(cert.content as any).issuer}</div>
                </>
              ) : (
                <>
                  <div className="text-3xl font-black text-zinc-900 mb-2 tracking-tight">Shivam Tiwari</div>
                  <div className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">has completed</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{(cert.content as any).title}</div>
                  <div className="text-sm font-bold text-zinc-700 mb-1">{(cert.content as any).issuer}</div>
                  <div className="text-sm font-mono text-zinc-500 mb-6">{(cert.content as any).date}</div>
                  <div className="inline-block px-4 py-2 bg-zinc-100 rounded-lg text-xs text-zinc-600 font-mono">
                    Certificate Code: {(cert.content as any).code}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const selectedCert = certifications.find(c => c.id === activeCert);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {certifications.map((cert, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               onClick={() => setActiveCert(cert.id)}
               className="glass p-8 relative overflow-hidden group border-white/5 hover:border-cyan-500/30 transition-all flex flex-col h-full cursor-pointer hover:-tranzinc-y-1 shadow-xl"
             >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-cyan-500/30 transition-colors">
                   <cert.icon className="w-6 h-6 text-zinc-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-100 mb-2 relative z-10 leading-snug group-hover:text-zinc-300 transition-colors">{cert.title}</h3>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                   <span className="text-sm font-medium text-zinc-400">{cert.issuer}</span>
                   <span className="text-[10px] font-mono text-cyan-500 max-w-fit px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">{cert.date}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {cert.skills.map((skill, i) => (
                       <span key={i} className="text-[10px] font-mono text-zinc-500">
                         {i > 0 && <span className="opacity-30 mr-2">•</span>}{skill}
                       </span>
                     ))}
                   </div>
                   <div className="text-xs font-bold uppercase tracking-wider text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                     View Certificate <ExternalLink className="w-3 h-3" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
