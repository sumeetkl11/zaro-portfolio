"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Code2, Layers, Zap } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";

const NetworkScene = dynamic(() => import("@/components/NetworkScene"), { ssr: false });

const stagger = { animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };

const fadeSlideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomePage() {
  return (
    <PageTransition>
      <Navigation />
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <NetworkScene />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
          <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-3xl">
            <motion.div variants={fadeSlideUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-dim/40 bg-accent-dim/10 text-accent-muted text-xs font-mono tracking-[0.15em] uppercase"><Zap size={12} className="text-accent" /> Available for opportunities</span>
            </motion.div>
            <motion.h1 variants={fadeSlideUp} className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-silver leading-[1.08] mb-6">Engineering<br /><span className="text-accent font-medium">real-time systems</span><br />that scale.</motion.h1>
            <motion.p variants={fadeSlideUp} className="text-lg lg:text-xl text-silver-muted font-light leading-relaxed max-w-xl mb-10">Full-stack software engineer focused on WebSocket architectures, high-throughput backends, and polished user experiences. I build the invisible infrastructure that powers responsive, data-intensive applications.</motion.p>
            <motion.div variants={fadeSlideUp} className="flex flex-wrap items-center gap-4">
              <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors duration-300">View Projects<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></Link>
              <a href="/Sumeet_Kanhiya_CV.pdf" download="Sumeet_Kanhiya_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 border border-silver-dim/30 text-silver text-sm font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300"><Download size={16} /> Download CV</a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-3 text-silver-muted text-sm font-medium hover:text-silver transition-colors duration-300">Get in touch<ArrowRight size={14} /></Link>
            </motion.div>
            <motion.div variants={fadeSlideUp} className="flex items-center gap-4 mt-8 pt-8 border-t border-white/[0.04]">
              <a href="https://github.com/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-silver-dim hover:text-silver transition-colors duration-300" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com/in/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-silver-dim hover:text-silver transition-colors duration-300" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver-dim"><motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><ArrowRight size={18} className="rotate-90" /></motion.div></motion.div>
      </section>
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div><span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-muted">Philosophy</span><h2 className="mt-4 text-3xl lg:text-4xl font-light text-silver leading-tight">How I build<br />software.</h2></div>
            <div className="grid sm:grid-cols-3 gap-8">
              {["{icon: <Code2>, title:"Performance-First", desc:"Every millisecond matters. I profile, optimize, and design for speed from the ground up."}, {icon:<Layers>, title:"System Thinking", desc:"I design holistically: data flows, state machines, error boundaries, and graceful degradation."}, {icon:<Zap>, title:"Pragmatic Craft", desc:"I choose the right tool for the job — no dogma. Clean abstractions, sensible defaults."}].map((item,i)=>(<div key={i} className="group"><div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-dim/10 text-accent mb-4 group-hover:bg-accent-dim/20 transition-colors">{item.icon}</div><h3 className="text-sm font-medium text-silver mb-2">{item.title}</h3><p className="text-sm text-silver-muted leading-relaxed">{item.desc}</p></div>))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div><h2 className="text-3xl lg:text-4xl font-light text-silver leading-tight mb-4">Let&apos;s build something<br /><span className="text-accent">fast and resilient.</span></h2><p className="text-silver-muted leading-relaxed mb-8 max-w-md">I&apos;m currently open to full-time roles, contract work, and interesting collaborations. If you need someone who can own the full stack and ship with velocity — let&apos;s talk.</p><div className="flex items-center gap-4"><Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors duration-300">Start a conversation<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link><Link href="/about" className="text-silver-muted text-sm font-medium hover:text-silver transition-colors">More about me →</Link></div></div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
              {[{value:"4+",label:"Years building"},{value:"12+",label:"Production systems"},{value:"3",label:"Core stacks mastered"},{value:"∞",label:"Curiosity"}].map((stat,i)=>(\n              <div key={i} className="bg-surface p-8 hover:bg-surface-hover transition-colors"><div className="text-2xl font-light text-accent tracking-tight">{stat.value}</div><div className="text-xs text-silver-muted mt-1 font-mono uppercase tracking-wider">{stat.label}</div></div>))}
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="py-8 px-6 lg:px-12 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-silver-dim font-mono">© {new Date().getFullYear()} Sumeet Kanhiya</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">GitHub</a>
            <a href="https://linkedin.com/in/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">LinkedIn</a>
            <Link href="/contact" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">Contact</Link>
          </div>
        </div>
      </footer>
    </PageTransition>
  );
}
