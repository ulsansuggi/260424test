/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "EcoTrack AI",
    description: "AI-powered sustainability dashboard for tracking carbon footprint using real-time data.",
    tags: ["React", "TypeScript", "Node.js"],
    link: "#"
  },
  {
    title: "NexFlow",
    description: "A workflow automation tool designed for distributed teams to manage complex project lifecycles.",
    tags: ["React", "Motion", "Tailwind"],
    link: "#"
  },
  {
    title: "Lume Render",
    description: "Cloud-based path tracing renderer with a focus on speed and accessible luxury design.",
    tags: ["Next.js", "Three.js", "Firebase"],
    link: "#"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-border p-3 md:p-6 lg:p-8 font-sans transition-colors duration-500">
      <div className="min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] bg-brand-bg text-brand-text flex flex-col border-[8px] md:border-[12px] border-brand-border relative overflow-hidden">
        
        {/* Decorative Side Text */}
        <div className="fixed right-4 md:right-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] tracking-[0.4em] uppercase text-gray-300 pointer-events-none z-0 hidden md:block">
          Creative Portfolio (C) 2026
        </div>

        {/* Navigation */}
        <nav className="w-full z-50 border-b border-gray-100 bg-brand-bg/80 backdrop-blur-sm sticky top-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex justify-between items-baseline pt-4 md:pt-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-bold tracking-[0.2em] uppercase"
            >
              SEOUL <span className="text-gray-300 mx-2">/</span> 2026
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-12 items-baseline">
              {["Projects", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-gray-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-text pb-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-brand-bg border-t border-gray-100 px-6 py-8 flex flex-col gap-6"
            >
              {["Projects", "About", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-bold tracking-widest uppercase text-brand-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="pt-20 md:pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-12 gap-8 items-end"
          >
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-7xl md:text-[120px] lg:text-[140px] leading-[0.85] font-serif italic font-light tracking-tighter mb-12">
                Lee<br />
                <span className="pl-0 md:pl-24 block text-brand-text/90">Hyunsook</span>
              </h1>
              
              <div className="flex gap-10 items-center pl-0 md:pl-24">
                <div className="h-[1px] w-20 md:w-32 bg-brand-text"></div>
                <p className="text-sm md:text-lg font-serif italic text-gray-500 uppercase tracking-widest leading-none">
                  Visual Architect & Storyteller
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
              <div className="border-l border-gray-200 pl-8 mb-4">
                <p className="text-sm leading-relaxed mb-6 italic text-gray-600 max-w-xs">
                  I design digital experiences that resonate deeply with users, finding the perfect balance between technology and art.
                </p>
                <button className="text-[10px] font-bold border-b border-brand-text pb-1 uppercase tracking-[0.2em] hover:text-gray-400 transition-colors">
                  View Manifest
                </button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 md:px-12 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 border-t border-gray-200 pt-8 flex justify-between items-baseline">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block mb-2">Portfolio</span>
                <h2 className="text-4xl font-serif italic tracking-tight">Selected Works</h2>
              </div>
              <p className="hidden md:block text-[10px] text-gray-400 uppercase tracking-widest font-semibold italic">01 — 03</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">0{idx + 1} / {project.tags[0]}</span>
                    <div className="w-2 h-2 rounded-full bg-brand-text opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="mb-6 relative overflow-hidden bg-brand-border h-48 md:h-64 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                    <span className="text-gray-300 uppercase tracking-[0.4em] text-[10px] font-bold group-hover:scale-110 transition-transform duration-700">Preview</span>
                    <ExternalLink className="absolute bottom-4 right-4 w-4 h-4 text-white opacity-0 group-hover:opacity-60 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-serif italic mb-2 group-hover:pl-2 transition-all">{project.title}</h3>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest leading-relaxed mb-6">
                    {project.description.slice(0, 60)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-widest text-gray-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-10"
          >
            <span className="text-gray-300 text-[10px] font-bold tracking-[0.5em] uppercase">Connect</span>
            <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-tight max-w-4xl">
              HAVE A PROJECT <br />IN MIND?
            </h2>
            
            <a 
              href="mailto:hello@example.com"
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative text-xs font-bold uppercase tracking-[0.3em] pb-2 overflow-hidden">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-text -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-brand-text transition-colors" />
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-12 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 pt-8 border-t border-gray-100">
            <div className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              © 2026 // ALL RIGHTS RESERVED
            </div>
            
            <div className="flex gap-12">
              {[
                { icon: <Github size={16} />, label: "GH" },
                { icon: <Linkedin size={16} />, label: "LI" },
                { icon: <Mail size={16} />, label: "EM" }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href="#" 
                  className="text-[10px] font-bold tracking-widest text-brand-text hover:text-gray-400 transition-colors uppercase border-b border-transparent hover:border-gray-200"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

