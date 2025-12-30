
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, animate, useInView } from 'framer-motion';
import { EXPERIENCES, PROJECTS, ENDORSEMENTS } from './constants';
import OptimizationChart from './components/OptimizationChart';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-mono selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-[0_0_15px_-3px_rgba(60,131,246,0.3)]">
              <span className="material-symbols-outlined text-lg">terminal</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white font-mono">JD.AI</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Stack', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors" 
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black hover:bg-slate-200 px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-all flex items-center gap-2"
          >
            <span>RESUME.BIN</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32 mesh-bg">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            STATUS_OK_INITIALIZED
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.05] text-white italic"
          >
            &lt;Building <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500">Intelligence</span> <br/>
            at Scale /&gt;
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-text-muted max-w-2xl leading-relaxed font-mono uppercase tracking-wider"
          >
            Senior AI/ML Engineer specializing in LLMs and scalable Computer Vision architectures. 
            // Turning complex mathematics into production software.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(60, 131, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="h-14 px-10 rounded-xl bg-primary hover:bg-blue-600 text-white font-black text-[10px] tracking-[0.2em] transition-all flex items-center gap-2"
            >
              EXPLORE_WORK.SH
              <span className="material-symbols-outlined">arrow_downward</span>
            </motion.a>
            <motion.button 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', scale: 1.05 }}
              className="h-14 px-10 rounded-xl border border-border-dark text-white font-bold text-[10px] tracking-[0.2em] transition-all flex items-center gap-2 bg-surface-dark/50 backdrop-blur-sm"
            >
              GITHUB.SRC
              <span className="material-symbols-outlined text-lg">code</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-white/5 bg-surface-dark/30 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "EXP_YEARS", value: 5, suffix: "+", sub: "SINCE_2018", icon: "history_edu", color: "text-primary" },
              { label: "PROD_MODELS", value: 20, suffix: "+", sub: "STABLE", icon: "model_training", color: "text-green-500" },
              { label: "RESEARCH_PAPERS", value: 12, suffix: "", sub: "PEER_REVIEWED", icon: "library_books", color: "text-blue-400" },
              { label: "UPTIME", value: 99.9, suffix: "%", sub: "AVAILABILITY", icon: "cloud_done", color: "text-emerald-500" },
            ].map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-48">
        {/* Journey Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="about">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 className="text-4xl font-black text-white tracking-tight leading-tight uppercase">&gt; JOURNEY</h2>
            <p className="text-text-muted text-lg leading-relaxed font-mono">Tracing the evolution from neural network research to enterprise-grade AI deployment.</p>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>
          <div className="lg:col-span-8">
            <div className="relative pl-8 border-l border-slate-800 space-y-24">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -left-[41px] top-0 size-5 rounded-full border-4 border-background-dark shadow-xl transition-all duration-300 ${i === 0 ? 'bg-primary shadow-primary/50' : 'bg-slate-700'}`}></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-2xl font-black text-white italic">{exp.role}</h3>
                    <span className="text-[10px] text-text-muted font-bold tracking-widest bg-surface-dark border border-slate-800 px-3 py-1 rounded-full uppercase">{exp.period}</span>
                  </div>
                  <div className="text-primary font-bold text-lg mb-4">{exp.company}</div>
                  <p className="text-text-muted leading-relaxed text-lg mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, si) => (
                      <span key={si} className="px-3 py-1 rounded-md text-[10px] font-black bg-slate-900 text-slate-400 border border-slate-800 uppercase tracking-widest">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Metrics Card */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl border border-border-dark bg-[#020617] overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-4 bg-surface-dark/80 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/80"></div>
                <div className="size-3 rounded-full bg-amber-500/80"></div>
                <div className="size-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="h-4 w-px bg-white/10 ml-2"></div>
              <div className="text-[10px] font-bold text-text-muted flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span>
                loss_monitor_runtime.sh
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col lg:flex-row items-stretch gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">Training_Convergence</h3>
              </div>
              <p className="text-text-muted leading-relaxed text-lg font-mono">
                Automated hyperparameter optimization pipeline. <br/>
                // Maintaining validation stability while pushing training accuracy to 99.4%.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-dark border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">CUR_LOSS</div>
                  <div className="text-3xl font-bold text-white">0.0241</div>
                </div>
                <div className="bg-surface-dark border border-white/5 rounded-2xl p-5">
                  <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">STEP_098</div>
                  <div className="h-1.5 w-full bg-slate-800 mt-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-primary shadow-[0_0_8px_rgba(60,131,246,0.5)]" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-h-[400px] w-full bg-slate-900/30 rounded-3xl p-8 relative border border-white/5 shadow-inner">
              <OptimizationChart />
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4"
          >
            <h2 className="text-4xl font-black text-white tracking-tight uppercase">&gt; REPOSITORIES</h2>
            <p className="text-text-muted text-lg font-mono">Deep dives into production code and research implementations.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Endorsements Vertical Scroller */}
        <section className="space-y-16 relative z-20 overflow-hidden py-10" id="endorsements">
          <div className="relative z-10 flex items-center justify-between">
            <h2 className="text-4xl font-black text-white tracking-tight uppercase">&gt; PEER_REVIEW</h2>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 h-[700px] vertical-mask">
            <div className="overflow-hidden h-full">
              <div className="animate-scroll-up flex flex-col gap-8">
                {[...ENDORSEMENTS.slice(0, 2), ...ENDORSEMENTS.slice(0, 2)].map((item, i) => (
                  <TestimonialCard key={i} endorsement={item} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-full">
              <div className="animate-scroll-down flex flex-col gap-8">
                {[...ENDORSEMENTS.slice(2, 4), ...ENDORSEMENTS.slice(2, 4)].map((item, i) => (
                  <TestimonialCard key={i} endorsement={item} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-full">
              <div className="animate-scroll-up flex flex-col gap-8">
                {[...ENDORSEMENTS.slice(4, 6), ...ENDORSEMENTS.slice(4, 6)].map((item, i) => (
                  <TestimonialCard key={i} endorsement={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] relative overflow-hidden text-center p-1.5" 
          id="contact"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 opacity-30 blur-2xl"></div>
          <div className="relative bg-background-dark/90 backdrop-blur-3xl rounded-[36px] border border-white/10 p-16 md:p-32 overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] italic uppercase">
                INIT_CONNECT?
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto font-mono">
                Opening slots for Q4 collaboration and technical consulting. <br/>
                // Establish handshake?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-16 px-12 rounded-2xl bg-white text-slate-900 font-black text-[10px] tracking-widest uppercase hover:bg-blue-50 transition-all inline-flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
                >
                  SEND_MESSAGE
                  <span className="material-symbols-outlined">mail</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-surface-dark/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-white tracking-tight font-mono uppercase">JD.AI</span>
              </div>
              <p className="text-text-muted text-[10px] font-bold leading-relaxed uppercase tracking-wider">
                Scalable intelligence. <br/>
                Modern architectures. <br/>
                Production-first mindset.
              </p>
            </div>
            {/* Added empty space columns before the navigation as requested */}
            <div className="hidden md:block col-span-1 md:col-span-2"></div> 
            <div className="col-span-1 space-y-4">
              <h4 className="text-white font-black uppercase tracking-widest text-[10px]">NAVIGATION</h4>
              <ul className="space-y-3 text-[10px] font-bold text-text-muted">
                <li><a className="hover:text-primary transition-colors" href="#about">ABOUT.MD</a></li>
                <li><a className="hover:text-primary transition-colors" href="#projects">WORK.SRC</a></li>
                <li><a className="hover:text-primary transition-colors" href="#stack">ENV.CONF</a></li>
              </ul>
            </div>
            <div className="col-span-1 space-y-4">
              <h4 className="text-white font-black uppercase tracking-widest text-[10px]">SOCIAL</h4>
              <ul className="space-y-3 text-[10px] font-bold text-text-muted">
                <li><a className="hover:text-primary transition-colors" href="#">GITHUB</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">LINKEDIN</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">HF_MODELS</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
            <p>© 2024 JD.AI // ROOT_ACCESS_GRANTED</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StatCard: React.FC<{ stat: any, index: number }> = ({ stat, index }) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: true });
  
  useEffect(() => {
    if (isInView && counterRef.current) {
      animate(0, stat.value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (counterRef.current) {
            counterRef.current.textContent = latest.toFixed(stat.value % 1 === 0 ? 0 : 1);
          }
        },
        delay: index * 0.1
      });
    }
  }, [isInView, stat.value, index]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-dark/50 p-6 hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`p-2 rounded-lg bg-primary/10 ${stat.color}`}>
          <span className="material-symbols-outlined">{stat.icon}</span>
        </span>
        <span className={`text-[10px] font-black px-2 py-0.5 rounded text-primary bg-primary/20`}>{stat.sub}</span>
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
          <span ref={counterRef}>0</span>
          {stat.suffix}
        </h3>
        <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className={`group rounded-3xl bg-surface-dark border border-border-dark overflow-hidden flex flex-col transition-all duration-500 hover:border-primary/50 ${project.isWide ? 'md:col-span-2' : ''} ${project.isHigh ? 'md:row-span-2 h-full' : ''}`}
  >
    {project.image && (
      <div className={`relative overflow-hidden ${project.isHigh ? 'flex-[4]' : 'h-72'}`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 p-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
          <span className="material-symbols-outlined text-white">{project.icon}</span>
        </div>
      </div>
    )}
    <div className={`p-8 flex flex-col ${project.isHigh ? 'flex-1' : ''}`}>
      {!project.image && (
         <div className="size-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-white border border-slate-700 group-hover:bg-primary group-hover:border-primary transition-colors">
            <span className="material-symbols-outlined">{project.icon}</span>
         </div>
      )}
      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors uppercase italic tracking-tight">{project.title}</h3>
      <p className="text-text-muted text-xs leading-relaxed mb-4 font-mono uppercase tracking-tight line-clamp-3">{project.description}</p>
      
      {/* Container for tech badges, kept close to description */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags?.map((tag: string) => (
          <span key={tag} className="text-[9px] font-black text-primary/80 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">#{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <a className="text-[10px] font-black text-white hover:text-primary transition-colors inline-flex items-center gap-2 group/btn uppercase tracking-[0.2em]" href="#">
          VIEW_CASE_STUDY
          <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard: React.FC<{ endorsement: any }> = ({ endorsement }) => (
  <div className="glass-card p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 group relative">
    <div className="flex items-center gap-4 mb-8">
      <img src={endorsement.avatar} alt={endorsement.name} className="size-14 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors object-cover" />
      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-tight">{endorsement.name}</h4>
        <p className="text-[9px] text-primary font-black uppercase tracking-widest">{endorsement.role}</p>
      </div>
    </div>
    <div className="mb-6 text-primary/40 group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-4xl font-light">format_quote</span>
    </div>
    <p className="text-slate-400 italic leading-relaxed text-xs font-mono">"{endorsement.text}"</p>
  </div>
);

export default App;
