"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import Lenis from '@studio-freight/lenis';

import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export default function AboutMe() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    // Initialiser Splitting
    const results = Splitting();
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Configurer Lenis pour le smooth scroll
    const lenis = new Lenis();
    
    lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 600);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    // Main heading animation
    gsap.fromTo(headingRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    );
    
    // Text animation avec Splitting
    document.querySelectorAll('[data-splitting]').forEach(element => {
      const chars = element.querySelectorAll('.char');
      
      gsap.from(chars, {
        color: "rgb(25,25,25)",  // Couleur de départ (invisible sur fond sombre)
        stagger: 0.03,          // Décalage entre chaque caractère
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,          // Animation liée au scroll
        }
      });
    });
    
    // Skills items staggered animation
    gsap.fromTo(skillsRef.current.children,
      { scale: 0.8, opacity: 0, y: 20 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
    
    // Image animation - simplified, more minimalist
    gsap.fromTo(imageRef.current,
      { 
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, []);
  
  const skills = [
    "JavaScript", "React.js", "Next.js", "Node.js", 
    "Tailwind CSS", "GSAP", "TypeScript", "UI/UX Design"
  ];
  
  return (
    <section ref={sectionRef} className="min-h-screen bg-slate-950 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-indigo-950 opacity-80"></div>
      
      {/* Decorative elements - mais plus subtils */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-700 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-[140px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left column - Text content */}
          <div className="md:w-1/2 space-y-12">
            <h2 ref={headingRef} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 tracking-tight">
              À propos de <br />
              <span className="text-white">mon parcours</span>
            </h2>
            
            <div ref={textRef} className="space-y-6">
              <p data-splitting className="text-reveal text-slate-300 leading-relaxed">
                Passionné par le développement web depuis plus de 5 ans, je combine expertise technique et créativité pour donner vie à des interfaces innovantes et performantes.
              </p>
              
              <p data-splitting className="text-reveal text-slate-400 leading-relaxed">
                Mon approche combine rigueur technique et sens du détail pour créer des expériences digitales qui se démarquent. Je suis constamment à l'affût des nouvelles technologies et des bonnes pratiques.
              </p>
              
              <p data-splitting className="text-reveal text-slate-400 leading-relaxed">
                Chaque projet est une nouvelle opportunité d'explorer des solutions créatives et d'améliorer l'expérience utilisateur à travers un code propre et optimisé.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Compétences techniques</h3>
              <div ref={skillsRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-900/40 border border-indigo-700/30 rounded-full text-sm text-indigo-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Image with minimalist design */}
          <div className="md:w-1/2 h-full flex items-center justify-center">
            <div ref={imageRef} className="relative w-full max-w-md">
              {/* Image container - simplified and minimalist */}
              <div className="w-full h-[500px] relative overflow-hidden rounded-md border border-slate-700/50">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10"></div>
                
                {/* Actual image container */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  {/* Placeholder for your image - replace this div with an actual image */}
                  <span className="text-slate-500">Votre photo ici</span>
                </div>
                
                {/* Minimalist corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-indigo-500/50"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-indigo-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
