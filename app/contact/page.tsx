"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
export default function ContactPage() {
 const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
 const [submitted, setSubmitted] = useState(false);
 const [loading, setLoading] = useState(false);
 const handleSubmit = async (e: FormEvent) => { e.preventDefault(); setLoading(true); await new Promise((r) => setTimeout(r, 1200)); setLoading(false); setSubmitted(true); setFormState({ name: "", email: "", subject: "", message: "" }); setTimeout(() => setSubmitted(false), 5000); };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value })); };
 return (
 <PageTransition><Navigation /><main className="pt-24 pb-16 px-6 lg:px-12"><div className="max-w-7xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16"><span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-muted mb-4 block">Contact</span><h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-silver leading-[1.1] mb-4">Let&apos;s start<br /><span className="text-accent">a conversation.</span></h1><p className="text-lg text-silver-muted font-light leading-relaxed max-w-lg mt-4">I&apos;m currently open to new opportunities. Whether you have a project in mind, a role to discuss, or just want to connect — I&apos;d love to hear from you.</p></motion.div>
 <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid sm:grid-cols-2 gap-6">
 <div><label htmlFor="name" className="block text-xs font-mono tracking-[0.1em] uppercase text-silver-muted mb-2">Name</label><input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} placeholder="Your name" className="w-full bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-silver placeholder:text-silver-dim focus:border-accent-dim/50 focus:outline-none transition-colors duration-300" /></div>
 <div><label htmlFor="email" className="block text-xs font-mono tracking-[0.1em] uppercase text-silver-muted mb-2">Email</label><input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-silver placeholder:text-silver-dim focus:border-accent-dim/50 focus:outline-none transition-colors duration-300" /></div>
 </div>
 <div><label htmlFor="subject" className="block text-xs font-mono tracking-[0.1em] uppercase text-silver-muted mb-2">Subject</label><input type="text" id="subject" name="subject" required value={formState.subject} onChange={handleChange} placeholder="What's this about?" className="w-full bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-silver placeholder:text-silver-dim focus:border-accent-dim/50 focus:outline-none transition-colors duration-300" /></div>
 <div><label htmlFor="message" className="block text-xs font-mono tracking-[0.1em] uppercase text-silver-muted mb-2">Message</label><textarea id="message" name="message" required rows={6} value={formState.message} onChange={handleChange} placeholder="Tell me about your project, role, or idea..." className="w-full bg-surface border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-silver placeholder:text-silver-dim focus:border-accent-dim/50 focus:outline-none transition-colors duration-300 resize-none" /></div>
 <button type="submit" disabled={loading || submitted} className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${ submitted ? "bg-green-900/30 text-green-400 border border-green-500/30 cursor-default" : "bg-accent text-black hover:bg-accent/90" }`}>{submitted ? (<><Check size={16} /> Message Sent</>) : loading ? (<><motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block"><ArrowRight size={16} /></motion.span> Sending...</>) : (<><Send size={16} /> Send Message</>)}</button>
 </form>
 </motion.div>
 <motion.aside initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="space-y-8">
 <div className="bg-surface border border-white/[0.04] rounded-xl p-6 space-y-5">
 <div className="flex items-start gap-3"><Mail size={16} className="text-accent mt-0.5 flex-shrink-0" /><div><p className="text-xs font-mono text-silver-dim uppercase tracking-wider mb-1">Email</p><a href="mailto:sumeetkl280@gmail.com" className="text-sm text-silver-muted hover:text-accent transition-colors">sumeetkl280@gmail.com</a></div></div>
 <div className="flex items-start gap-3"><MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" /><div><p className="text-xs font-mono text-silver-dim uppercase tracking-wider mb-1">Location</p><p className="text-sm text-silver-muted">Bangalore, India · Remote</p></div></div>
 </div>
 <div className="space-y-3">
 <a href="https://github.com/sumeetkl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-surface border border-white/[0.04] rounded-lg hover:bg-surface-hover hover:border-accent-dim/30 transition-all duration-300 group"><Github size={16} className="text-silver-muted group-hover:text-accent transition-colors" /><span className="text-sm text-silver-muted group-hover:text-silver transition-colors">GitHub</span><ArrowRight size={14} className="ml-auto text-silver-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all" /></a>
 <a href="https://linkedin.com/in/sumeetkl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-surface border border-white/[0.04] rounded-lg hover:bg-surface-hover hover:border-accent-dim/30 transition-all duration-300 group"><Linkedin size={16} className="text-silver-muted group-hover:text-accent transition-colors" /><span className="text-sm text-silver-muted group-hover:text-silver transition-colors">LinkedIn</span><ArrowRight size={14} className="ml-auto text-silver-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all" /></a>
 </div>
 <div className="border-t border-white/[0.04] pt-6"><p className="text-xs text-silver-dim leading-relaxed">I typically respond within 24 hours. For urgent inquiries, feel free to email me directly.</p></div>
 </motion.aside>
 </div>
 </div></main>
 <footer className="py-8 px-6 lg:px-12 border-t border-white/[0.04]"><div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"><span className="text-xs text-silver-dim font-mono">© {new Date().getFullYear()} Sumeet Kanhiya</span><div className="flex items-center gap-6"><a href="https://github.com/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">GitHub</a><a href="https://linkedin.com/in/sumeetkl" target="_blank" rel="noopener noreferrer" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">LinkedIn</a><Link href="/contact" className="text-xs text-silver-dim hover:text-silver transition-colors font-mono">Contact</Link></div></div></footer></PageTransition>
 );
}