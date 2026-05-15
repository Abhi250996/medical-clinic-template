import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { Phone, Calendar, Heart, Shield, ChevronRight, Menu, X, Star, ArrowRight, Play, Award, Globe, Microscope, Activity, Stethoscope, User, Mail, MessageSquare, Dna, ShieldCheck, Sparkles, Quote, HeartPulse, ChevronLeft } from "lucide-react";
import { useState, type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [currentResearchIndex, setCurrentResearchIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const researchCards = [
    {
      title: "Neural Link Diagnostics",
      desc: "Next-generation brain mapping for cognitive optimization and recovery.",
      image: "https://images.unsplash.com/photo-1732704573802-8ec393009148?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Genomic Synthesis",
      desc: "Personalized sequencing that uncovers your unique biological architecture.",
      image: "https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Nanotech Infusion",
      desc: "Micro-scale precision delivery systems for localized cellular therapy.",
      image: "https://plus.unsplash.com/premium_photo-1661504621780-b71adb3bd5cf?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Bio-Digital Twins",
      desc: "Creating virtual biological models to simulate treatment outcomes safely.",
      image: "https://plus.unsplash.com/premium_photo-1681492330852-d4662d477b72?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Quantum MRI",
      desc: "Ultra-high resolution imaging powered by quantum sensing technology.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Synaptic Restoration",
      desc: "Neural regeneration protocols for advanced degenerative recovery.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const scrollResearch = (direction: 'left' | 'right') => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const visibleCards = isMobile ? 1 : isTablet ? 2 : 4;

    if (direction === 'left') {
      setCurrentResearchIndex(prev => Math.max(0, prev - 1));
    } else {
      setCurrentResearchIndex(prev => Math.min(researchCards.length - visibleCards, prev + 1));
    }
  };
  const { scrollYProgress } = useScroll();
  
  // Smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Camera Cinematic Transforms
  const cameraZ = useTransform(smoothProgress, [0, 0.4], [1, 1.2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);
  const bgImageY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const textParallax = useTransform(smoothProgress, [0, 1], [0, -500]);

  useEffect(() => {
    // GSAP Cinematic Reveal for every section
    const reveals = gsap.utils.toArray(".reveal-el");
    reveals.forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0, skewY: 2 },
        { 
          y: 0, 
          opacity: 1, 
          skewY: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Camera Lens Blur Effect on scroll
    gsap.to(".camera-view", {
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: ".hero-vision",
        start: "center center",
        end: "bottom top",
        scrub: true
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-soft-white text-midnight-navy selection:bg-medical-blue/20 selection:text-medical-blue">
      {/* Philosophy Dialog */}
      <AnimatePresence>
        {isPhilosophyOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPhilosophyOpen(false)}
              className="absolute inset-0 bg-midnight-navy/95 backdrop-blur-2xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-midnight-navy border border-white/10 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_100px_rgba(0,229,255,0.15)]"
            >
              {/* Left Side: Cinematic Visuals */}
              <div className="hidden lg:flex w-2/5 relative bg-midnight-navy overflow-hidden p-20 items-center justify-center border-r border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,119,190,0.2),transparent_70%)]" />
                <div className="cyber-grid absolute inset-0 opacity-20" />
                
                <div className="relative z-10 flex flex-col items-center gap-12">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-64 h-64 border border-cyan-glow/20 rounded-full flex items-center justify-center"
                   >
                      <div className="absolute inset-4 border border-medical-blue/30 rounded-full border-dashed animate-spin" style={{ animationDuration: '30s' }} />
                      <Dna size={120} className="text-cyan-glow animate-pulse" />
                   </motion.div>
                   
                   <div className="text-center">
                      <Quote className="text-cyan-glow mx-auto mb-6 opacity-40" />
                      <p className="text-3xl font-display font-light italic text-white/80 leading-relaxed">
                        “True healthcare combines <br /> 
                        <span className="font-black text-white not-italic">medical excellence</span> <br /> 
                        with human compassion.”
                      </p>
                      <div className="mt-12 flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-glow">The Medivue Ethos</span>
                        <div className="flex gap-1 justify-center">
                           {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ delay: i*0.2, repeat: Infinity }} className="w-1 h-1 bg-cyan-glow rounded-full" />)}
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 overflow-y-auto p-12 lg:p-24 custom-scrollbar">
                <button 
                  onClick={() => setIsPhilosophyOpen(false)}
                  className="absolute top-10 right-10 p-4 hover:bg-white/5 rounded-full transition-all text-white/40 hover:text-white"
                >
                  <X size={32} />
                </button>

                <div className="max-w-xl mx-auto lg:mx-0">
                  <header className="mb-20">
                    <span className="text-cyan-glow font-bold tracking-[0.6em] uppercase text-[10px] mb-6 block">Foundation of Care</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-tight mb-8">
                       Our Clinical <br /> Philosophy
                    </h2>
                    <p className="text-white/40 text-xl font-light leading-relaxed">
                      Healthcare should feel personal, intelligent, and deeply human. Our philosophy is built around delivering exceptional care through advanced technology, empathy, and long-term patient relationships.
                    </p>
                  </header>

                  <div className="grid gap-16">
                    <PhilosophyItem 
                      icon={<User className="text-cyan-glow" />}
                      title="Patient-Centered Care"
                      desc="Every patient is unique. We focus on listening carefully, understanding individual health goals, and creating personalized treatment experiences."
                    />
                    <PhilosophyItem 
                      icon={<Sparkles className="text-cyan-glow" />}
                      title="Precision Through Innovation"
                      desc="Our clinic leverages modern diagnostics, digital healthcare systems, and advanced medical technologies to support faster decisions."
                    />
                    <PhilosophyItem 
                      icon={<HeartPulse className="text-cyan-glow" />}
                      title="Compassionate Human Connection"
                      desc="We believe healthcare extends beyond treatment. Building trust, reducing anxiety, and supporting emotional wellbeing are essential."
                    />
                    <PhilosophyItem 
                      icon={<Activity className="text-cyan-glow" />}
                      title="Preventive & Long-Term Wellness"
                      desc="Our philosophy emphasizes prevention, early detection, and long-term health management to help patients maintain healthier lives."
                    />
                    <PhilosophyItem 
                      icon={<ShieldCheck className="text-cyan-glow" />}
                      title="Ethical & Transparent Practice"
                      desc="We maintain the highest standards of clinical ethics, transparency, patient privacy, and evidence-based medical care."
                    />
                  </div>

                  <div className="mt-24 pt-16 border-t border-white/5 flex flex-col gap-10">
                    <button 
                      onClick={() => { setIsPhilosophyOpen(false); setIsBookingOpen(true); }}
                      className="medical-gradient text-white py-8 rounded-[2rem] text-sm font-black uppercase tracking-[0.4em] shadow-2xl hover:scale-105 transition-all w-full"
                    >
                      Book a Consultation
                    </button>
                    <p className="text-center text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">Integrated Care System v2.0</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Dialog */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-medical-blue/20 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 medical-gradient" />
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-8 right-8 text-midnight-navy/20 hover:text-medical-blue transition-colors"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8">
                <div>
                   <span className="text-medical-blue text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Direct Access</span>
                   <h2 className="text-4xl font-display font-black tracking-tighter">Schedule Your Consultation</h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); setIsBookingOpen(false); }}>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-medical-blue" size={16} />
                      <input type="text" placeholder="Dr. John Doe" className="w-full bg-soft-white border border-midnight-navy/5 rounded-full py-4 pl-14 pr-6 focus:border-medical-blue outline-none transition-all" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 ml-4">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-medical-blue" size={16} />
                      <input type="email" placeholder="contact@modern.com" className="w-full bg-soft-white border border-midnight-navy/5 rounded-full py-4 pl-14 pr-6 focus:border-medical-blue outline-none transition-all" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 ml-4">Service Required</label>
                    <select className="w-full bg-soft-white border border-midnight-navy/5 rounded-full py-4 px-6 focus:border-medical-blue outline-none appearance-none transition-all">
                      <option>Precision Genomics</option>
                      <option>Neurological Reset</option>
                      <option>Cellular Optimization</option>
                      <option>Preventative Health Vision</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 ml-4">Additional Notes</label>
                    <textarea rows={3} placeholder="Briefly describe your requirements..." className="w-full bg-soft-white border border-midnight-navy/5 rounded-[2rem] py-4 px-6 focus:border-medical-blue outline-none transition-all resize-none" />
                  </div>
                  <button className="md:col-span-2 medical-gradient text-white py-5 rounded-full text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3">
                    Submit Request <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="lg:hidden fixed inset-0 bg-soft-white/90 z-[150] p-8 pt-40 flex flex-col gap-10"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-12 right-12 p-3 bg-midnight-navy/5 rounded-full"
            >
              <X size={32} />
            </button>
            {[["The Vision", "vision"], ["Clinical", "clinical"], ["Research", "research"], ["Excellence", "review"]].map(([label, id], i) => (
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                key={id}
                onClick={() => scrollTo(id)}
                className="text-5xl font-display font-black text-left border-b border-midnight-navy/5 pb-4 text-midnight-navy hover:text-medical-blue transition-colors"
              >
                {label}
              </motion.button>
            ))}
            <button 
              onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
              className="medical-gradient text-white py-8 rounded-3xl text-2xl font-black uppercase tracking-widest mt-auto shadow-2xl shadow-medical-blue/30"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100] glass px-8 rounded-full border border-midnight-navy/5 shadow-xl">
        <div className="h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-black tracking-tighter leading-none">MEDIVUE</span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-medical-blue uppercase leading-none mt-1">Institutes</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-12">
            {[["The Vision", "vision"], ["Clinical", "clinical"], ["Research", "research"], ["Experience", "review"]].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[11px] font-black uppercase tracking-[0.3em] text-midnight-navy/40 hover:text-medical-blue transition-all duration-500 relative py-2 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-blue transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-3 medical-gradient text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-medical-blue/30 transition-all duration-500 group"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Priority Access</span>
            </button>
            <button className="lg:hidden p-2 text-midnight-navy" onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Cinematic Hero Vision */}
      <section id="vision" className="hero-vision relative min-h-screen overflow-hidden bg-medical-light noise-bg cyber-grid">
        <div className="scanline" />
        
        <motion.div 
           style={{ 
             scale: cameraZ,
             opacity: useTransform(smoothProgress, [0, 0.4], [1, 0.8])
           }} 
           className="camera-view absolute inset-0 z-0"
        >
          <motion.div style={{ y: bgImageY }} className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d3fd0d?auto=format&fit=crop&q=95&w=2400" 
              alt="Medical Center"
              className="w-full h-[140%] object-cover brightness-[0.95] saturate-[0.8] contrast-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-medical-light via-transparent to-medical-blue/10" />
          <div className="absolute inset-0 bg-medical-light/40 backdrop-blur-[1px]" />
          
          <motion.div 
            animate={{ 
              x: ["-10%", "10%"],
              y: ["-5%", "5%"]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[140%] h-[140%] bg-radial-gradient from-medical-blue/10 via-transparent to-transparent pointer-events-none"
          />
        </motion.div>

        {/* HUD Elements */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
           {/* Top Coordinates */}
           <div className="absolute top-32 left-12 font-mono text-[8px] text-medical-blue/50 flex flex-col gap-1 tracking-widest">
              <span>LAT: 37.7749° N</span>
              <span>LONG: 122.4194° W</span>
              <div className="w-12 h-px bg-medical-blue/20 mt-2" />
           </div>

           {/* Pulse Line */}
           <div className="absolute bottom-32 left-0 w-full h-[1px] bg-medical-blue/10 overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-40 h-full bg-medical-blue/40 shadow-[0_0_20px_rgba(2,132,199,0.5)]"
              />
           </div>

           {/* Floating HUD Box 1 */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute top-1/2 left-8 -translate-y-1/2 glass border border-medical-blue/20 p-4 rounded-xl hidden xl:flex flex-col gap-3"
           >
              <Microscope size={20} className="text-medical-blue" />
              <div className="flex flex-col gap-0.5">
                 <span className="text-[7px] font-black uppercase text-midnight-navy/40 tracking-[0.2em]">Cellular Zoom</span>
                 <span className="text-[10px] font-mono text-medical-blue">x10,000 Precision</span>
              </div>
           </motion.div>

           {/* Floating HUD Box 2 */}
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-12 right-12 glass border border-medical-blue/20 p-6 rounded-3xl hidden xl:flex items-center gap-6"
           >
              <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black uppercase text-midnight-navy tracking-widest">System Online</span>
                 <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-medical-blue/10 rounded-full overflow-hidden relative">
                       <motion.div 
                        animate={{ height: ["0%", "100%", "0%"] }}
                        transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                        className="absolute bottom-0 left-0 w-full bg-medical-blue" 
                       />
                    </div>)}
                 </div>
              </div>
              <Activity className="text-medical-blue animate-pulse" />
           </motion.div>
        </div>

        <div className="relative z-30 max-w-[1700px] mx-auto px-6 lg:px-20 min-h-screen flex items-center">
          <div className="w-full relative">
            
            {/* Massive Background Text */}
            <div className="absolute -top-[10vw] left-0 pointer-events-none select-none opacity-[0.05] w-full text-center overflow-hidden">
               <h2 className="text-[25vw] font-display font-black text-medical-blue whitespace-nowrap leading-none tracking-tighter">
                  MEDIVUE SYSTEM
               </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-24 items-center">
               <motion.div 
                  style={{ y: textParallax, opacity: heroOpacity }}
                  className="lg:col-span-8 flex flex-col items-start"
               >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center gap-4 mb-12"
                  >
                    <div className="w-8 h-8 rounded-lg bg-medical-blue/10 flex items-center justify-center p-2">
                       <Stethoscope className="text-medical-blue w-full h-full" />
                    </div>
                    <span className="text-medical-blue text-[10px] font-black uppercase tracking-[0.8em]">The Future Protocol</span>
                  </motion.div>

                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                    <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-display font-extrabold text-midnight-navy leading-[0.85] tracking-[-0.04em]">
                        PRECISION <br />
                        <span className="text-medical-blue italic font-thin tracking-[-0.02em] shimmer bg-clip-text">GENOMICS.</span>
                      </h1>
                    </motion.div>
                  </div>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-midnight-navy/60 text-lg md:text-xl font-light max-w-xl mt-12 leading-relaxed"
                  >
                    Transcending traditional medicine through molecular accuracy and AI-driven clinical insights. Your biological potential, engineered.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="mt-16 flex flex-col md:flex-row items-center gap-10"
                  >
                    <button 
                      onClick={() => setIsBookingOpen(true)}
                      className="medical-gradient text-white px-16 py-8 rounded-[2rem] text-xs font-black uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(2,132,199,0.2)] hover:scale-105 hover:glow-box transition-all duration-500 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        Book Appointment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 shimmer opacity-10" />
                    </button>

                    <div className="flex flex-col gap-2">
                       <p className="text-midnight-navy/40 text-[9px] font-black uppercase tracking-widest mb-1">Global Reputation</p>
                       <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                             {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-medical-light/80 overflow-hidden box-content shadow-xl"><img src={`https://i.pravatar.cc/100?img=${i+44}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>)}
                          </div>
                          <div className="flex flex-col">
                             <span className="text-midnight-navy font-display font-black text-xl leading-none">99.8%</span>
                             <span className="text-medical-blue text-[8px] font-bold uppercase tracking-widest mt-1">Direct Success Rate</span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
               </motion.div>

               {/* Right: Dynamic Medical Visualization */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                 className="lg:col-span-4 relative hidden lg:block"
               >
                  <div className="relative group">
                     {/* Decorative Rings */}
                     <div className="absolute inset-0 border border-cyan-glow/20 rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
                     <div className="absolute inset-0 border border-medical-blue/10 rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
                     
                     <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-white/5 shadow-2xl skew-y-1">
                        <img 
                           src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=90&w=1200" 
                           className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms]"
                           alt="Clinical Precision"
                           referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-medical-blue/20 mix-blend-overlay" />
                        
                        {/* Internal HUD */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <div className="w-1/2 h-1/2 border border-cyan-glow/40 rounded-full animate-pulse flex items-center justify-center">
                              <div className="w-4 h-4 bg-cyan-glow rounded-full shadow-[0_0_20px_rgba(0,229,255,1)]" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Aesthetic Data Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute -bottom-10 -left-10 glass border border-white/10 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl w-[320px]"
                  >
                     <p className="text-midnight-navy font-display font-medium text-xl leading-tight">
                        "The standard of care is no longer a benchmark, but a <span className="font-black text-medical-blue">starting point.</span>"
                     </p>
                     <div className="flex items-center gap-3 mt-6">
                        <Award className="text-medical-blue" size={20} />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-midnight-navy/40">Excellence Award 2026</span>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 3 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40"
        >
           <div className="w-px h-20 bg-gradient-to-b from-cyan-glow to-transparent" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-glow/40 rotate-180 [writing-mode:vertical-lr]">Scroll Vision</span>
        </motion.div>
      </section>



      {/* Precision in Healing Section */}
      <section id="clinical" className="py-40 md:py-60 bg-soft-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.2] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
            <div className="relative group perspective-1000">
               {/* Background Decorative Element */}
               <div className="absolute -inset-10 medical-gradient opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity" />
               
               <motion.div 
                whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                className="reveal-el overflow-hidden rounded-[4rem] shadow-[-30px_30px_80px_rgba(0,119,190,0.2)] border-4 border-white p-2 bg-white relative z-10"
              >
                <div className="absolute inset-0 bg-medical-blue/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-[2s]" />
                <img 
                  src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-[700px] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2.5s] scale-105 group-hover:scale-100"
                  alt="Clinical Research Excellence"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dynamic HUD Scan */}
                <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between overflow-hidden">
                   <motion.div 
                    animate={{ y: ["0%", "1000%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1 bg-cyan-glow/30 shadow-[0_0_20px_rgba(0,229,255,1)]" 
                   />
                   <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                      <div className="w-16 h-4 border-t-2 border-l-2 border-cyan-glow" />
                      <div className="w-16 h-4 border-t-2 border-r-2 border-cyan-glow" />
                   </div>
                </div>
              </motion.div>
              
              {/* Data Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-12 -left-12 glass p-8 rounded-3xl border border-white/20 shadow-2xl z-20 hidden 2xl:flex flex-col gap-4"
              >
                 <div className="flex items-center gap-3">
                    <Activity className="text-medical-blue" size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-midnight-navy">Real-time Biosync</span>
                 </div>
                 <div className="w-32 h-2 bg-midnight-navy/5 rounded-full overflow-hidden">
                    <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/2 h-full military-gradient bg-medical-blue" />
                 </div>
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 glass p-12 rounded-[4rem] shadow-2xl border border-medical-blue/30 hidden md:block backdrop-blur-3xl z-20">
                 <div className="flex items-baseline gap-2">
                    <p className="text-7xl font-display font-black text-medical-blue tracking-tighter leading-none">A++</p>
                    <Star className="text-cyan-glow fill-current" size={24} />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-midnight-navy/40 mt-3">Global Distinction</p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="reveal-el">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-px bg-medical-blue" />
                   <span className="text-medical-blue font-bold tracking-[0.8em] uppercase text-[10px]">Strategic Vision</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-display font-black text-midnight-navy tracking-tighter leading-[0.9] mb-12">
                   WHERE TECHNOLOGY <br /> 
                   <span className="text-medical-blue italic font-thin tracking-[-0.04em] shimmer bg-clip-text">MEETS HUMANITY.</span>
                </h2>
                <div className="flex gap-4 mb-10">
                   <div className="px-6 py-2 rounded-full light-medical-gradient text-[9px] font-black uppercase tracking-widest text-medical-blue">Compassion First</div>
                   <div className="px-6 py-2 rounded-full bg-midnight-navy/5 text-[9px] font-black uppercase tracking-widest text-midnight-navy/60">Digital Era</div>
                </div>
                <p className="text-xl text-midnight-navy/60 font-light leading-relaxed max-w-xl">
                  We combine advanced medical innovation with compassionate, patient-centered care to deliver a healthcare experience built on trust, precision, and long-term wellness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-el">
                 <PhilosophyPoint icon={<HeartPulse size={20} />} title="Patient-First Care" desc="Tailored treatment plans for unique needs." />
                 <PhilosophyPoint icon={<Dna size={20} />} title="Precision Diagnostics" desc="Advanced tech for accurate early detection." />
                 <PhilosophyPoint icon={<ShieldCheck size={20} />} title="Trusted Healthcare" desc="Transparent, evidence-based practices." />
                 <PhilosophyPoint icon={<Sparkles size={20} />} title="Modern Innovation" desc="AI-assisted smarter medical decisions." />
              </div>

              <div className="pt-8 reveal-el">
                <button 
                  onClick={() => setIsPhilosophyOpen(true)}
                  className="w-full py-8 rounded-[2rem] medical-gradient text-white font-black uppercase text-[11px] tracking-[0.5em] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-4 group"
                >
                  Explore Our Philosophy <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Atrium - Medical Innovation */}
      <section id="research" className="py-40 bg-medical-light text-midnight-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Advanced Lab"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-medical-light via-medical-light/60 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
              <div className="reveal-el max-w-2xl">
                <span className="text-medical-blue font-bold tracking-[0.4em] uppercase text-[10px]">Innovation Hub</span>
                <h2 className="text-4xl md:text-7xl font-display font-black text-midnight-navy tracking-tighter mt-4 md:mt-6 leading-none">
                  THE FUTURE <br /> OF <span className="text-medical-blue italic font-normal">DIAGNOSTICS.</span>
                </h2>
                <p className="text-midnight-navy/50 text-sm md:text-lg font-light leading-relaxed mt-4 md:mt-8">
                  Our research facilities are at the nexus of technology and biology. From automated screening to AI-driven insights, we push the boundaries of what's possible in modern healthcare.
                </p>
              </div>
            
            <div className="flex gap-4 reveal-el">
               <button 
                 onClick={() => scrollResearch('left')}
                 disabled={currentResearchIndex === 0}
                 className="w-14 h-14 rounded-full border border-medical-blue/20 flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all text-medical-blue group disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
               >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
               </button>
               <button 
                 onClick={() => scrollResearch('right')}
                 disabled={currentResearchIndex >= researchCards.length - 4}
                 className="w-14 h-14 rounded-full border border-medical-blue/20 flex items-center justify-center hover:bg-medical-blue hover:text-white transition-all text-medical-blue group disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
               >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden p-4 -m-4">
              <motion.div 
                className="flex gap-4 md:gap-8"
                animate={{ 
                  x: window.innerWidth < 768 
                    ? `-${currentResearchIndex * 100}%` 
                    : window.innerWidth < 1024 
                      ? `-${currentResearchIndex * 50}%` 
                      : `-${currentResearchIndex * 25}%` 
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {researchCards.map((card, idx) => (
                  <div key={idx} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex-shrink-0">
                    <div className="reveal-el group cursor-pointer overflow-hidden rounded-[3rem] border border-medical-blue/10 hover:border-medical-blue/30 transition-all duration-700 bg-white shadow-xl h-full flex flex-col hover:-translate-y-2 md:hover:-translate-y-4 shadow-medical-blue/5 hover:shadow-medical-blue/20">
                      <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                        <img 
                          src={card.image} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          alt={card.title}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-10 flex-1 flex flex-col">
                         <h4 className="text-2xl font-display font-bold text-midnight-navy">{card.title}</h4>
                         <p className="text-midnight-navy/40 text-sm mt-4 flex-1">{card.desc}</p>
                         <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-medical-blue group-hover:gap-4 transition-all">
                            Read Case Study <ChevronRight size={14} />
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Pulse Strip */}
      <section className="h-[60vh] relative overflow-hidden">
        <motion.div 
           style={{ y: useTransform(scrollYProgress, [0.4, 0.7], ["-20%", "20%"]) }}
           className="absolute inset-0"
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-[140%] object-cover brightness-75 grayscale shadow-inner"
            alt="Medical Professional"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-medical-blue/20 backdrop-grayscale-[0.5]" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="reveal-el text-center">
                <span className="text-white text-[10px] font-black uppercase tracking-[1em] mb-4 block">Unwavering Focus</span>
                <h3 className="text-white text-4xl md:text-6xl font-display font-light italic">Science in Every Breath.</h3>
            </div>
        </div>
      </section>

      {/* Services Showcase - Bento Grid */}
      <section className="bg-medical-light py-24 md:py-40 rounded-[3rem] md:rounded-[5rem] md:mx-4 relative overflow-hidden -mt-10 shadow-inner">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-32 reveal-el">
            <div className="flex flex-col items-start">
              <span className="text-medical-blue font-bold tracking-[0.8em] uppercase text-[10px] mb-4">Medical Expertise</span>
              <h2 className="text-5xl md:text-9xl font-display font-black text-midnight-navy tracking-tighter leading-[0.8]">Clinical <br /> Prowess.</h2>
            </div>
            <p className="max-w-md text-midnight-navy/40 text-sm md:text-lg font-light leading-relaxed border-l border-medical-blue/20 pl-4 md:pl-8">
              Our multidisciplinary approach combines decades of surgical experience with futuristic diagnostic tools to deliver unmatched care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <FeatureCard 
              className="md:col-span-8 md:row-span-2 min-h-[400px] md:min-h-[500px]"
              title="Robotic Surgical Integration"
              image="https://images.unsplash.com/photo-1666214280391-c9ef08d09da8?q=80&w=1200&auto=format&fit=crop"
              desc="Experience the absolute pinnacle of surgical accuracy with our AI-guided, sub-millimeter robotic systems for complex neurological and cardiac procedures."
              badge="Next-Gen Surgical"
            />
            <FeatureCard 
              className="md:col-span-4 h-[300px] md:h-[350px]"
              title="Advanced Cellular Analysis"
              image="https://plus.unsplash.com/premium_photo-1661382271058-03900019d8ba?q=80&w=1200&auto=format&fit=crop"
              desc="Real-time biological mapping to detect irregularities at the cellular level."
              badge="Diagnostics"
            />
            <FeatureCard 
              className="md:col-span-4 h-[300px] md:h-[350px]" 
              title="Holographic Imaging"
              image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
              desc="True 3D volumetric internal vision for unparalleled diagnostic confidence."
            />
            
            <FeatureCard 
              className="md:col-span-4 min-h-[300px] md:min-h-[350px]"
              title="Preventive Genomics"
              image="https://plus.unsplash.com/premium_photo-1681426650328-8fc0a124b377?q=80&w=1200&auto=format&fit=crop"
              desc="Mapping your unique biological timeline."
            />
            <FeatureCard 
              className="md:col-span-4 min-h-[300px] md:min-h-[350px]"
              title="Neural Restoration"
              image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800"
              desc="Pioneering treatments for cognitive health."
            />
            <FeatureCard 
              className="md:col-span-4 min-h-[300px] md:min-h-[350px]"
              title="Optimum Recovery"
              image="https://plus.unsplash.com/premium_photo-1681995498495-5258d436e705?q=80&w=1200&auto=format&fit=crop"
              desc="Accelerated biological healing protocols."
            />
          </div>
        </div>
      </section>

      {/* The Gallery - Medical Excellence */}
      <section className="py-24 md:py-40 bg-soft-white grid-bg overflow-hidden reveal-section">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-24">
            <div className="reveal-el">
              <span className="text-medical-blue font-bold tracking-[0.4em] uppercase text-[10px]">Excellence</span>
              <h2 className="text-5xl md:text-8xl font-display font-black text-midnight-navy tracking-tighter mt-4 leading-none">
                CURATING<br /> <span className="text-medical-blue italic font-normal">RESULTS.</span>
              </h2>
            </div>
            <p className="reveal-el max-w-sm text-midnight-navy/40 text-sm font-light leading-relaxed pb-2">
              Our clinical environments are engineered for serenity and performance. Every surface, every tool, and every professional is committed to your outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="reveal-el col-span-1 h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1704455306925-1401c3012117?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Modern Tech"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-medical-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            
            <div className="flex flex-col gap-6 md:gap-8 col-span-1">
              <motion.div 
                whileHover={{ y: -10 }}
                className="reveal-el h-[250px] md:h-[284px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt="Medical Exam"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="reveal-el h-[250px] md:h-[284px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt="Doctor"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="reveal-el col-span-1 h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1674049406107-f5c1e8258d4a?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Modern Technology"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="review" className="py-40 bg-soft-white grid-bg">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="reveal-el">
              <span className="text-medical-blue font-bold tracking-[0.4em] uppercase text-[10px]">Testimonials</span>
              <h2 className="text-5xl md:text-8xl font-display font-black text-midnight-navy tracking-tighter mt-4">The Impact.</h2>
            </div>
            <div className="flex -space-x-4 reveal-el">
              {[1,2,3,4,5].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  className="w-20 h-20 rounded-full border-[6px] border-white shadow-lg grayscale" 
                  alt="Review" 
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <TestimonialCard 
              text="The medical intervention I received was decades ahead of standard care. Their precision diagnostics changed everything."
              author="Alex Sterling"
              role="Biological Engineer"
            />
            <TestimonialCard 
              text="Medivue treats healthcare like high-performance engineering. Their focus on data-driven results is a revelation."
              author="Sara Lin"
              role="Innovation Lead"
            />
            <TestimonialCard 
              text="I finally feel heard and understood. Their personalized medical protocols are tailored to my exact DNA."
              author="Marcus V."
              role="Tech Founder"
            />
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="pb-40 px-4 reveal-el">
        <div className="max-w-[1400px] mx-auto relative rounded-[5rem] overflow-hidden min-h-[60vh] flex items-center justify-center bg-medical-light shadow-2xl border border-medical-blue/10">
          <div className="absolute inset-0">
             <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-10 grayscale"
              alt="Clinical Path"
              referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-medical-blue/5" />
          </div>
          
          <div className="relative z-10 text-center flex flex-col items-center gap-12 px-6">
            <h2 className="text-5xl md:text-9xl font-display font-black text-midnight-navy tracking-tighter leading-none">
               TRUST IN THE <br />
               <span className="text-medical-blue italic font-normal">FUTURE.</span>
            </h2>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="medical-gradient text-white px-16 py-8 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform duration-700"
            >
               Book Consultation
            </button>
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.5em] text-midnight-navy/20">
               <span>ISO CERTIFIED</span>
               <span>HIPAA COMPLIANT</span>
               <span>EST. 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-24 border-t border-midnight-navy/5 bg-soft-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-20">
               <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center">
                      <Activity className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-black tracking-tighter">MEDIVUE</span>
                  </div>
                  <p className="max-w-[300px] text-sm text-midnight-navy/40 font-light leading-relaxed">
                    Advancing human potential through precision diagnostics and unparalleled medical care.
                  </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
                 <FooterNav title="Vision" links={["Genomics", "LifeLabs", "Sanctuary", "Foundry"]} />
                 <FooterNav title="Clinical" links={["Doctors", "Surgery", "Wellness", "Pharmacy"]} />
                 <FooterNav title="Legal" links={["Privacy", "Terms", "Support", "Status"]} />
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-midnight-navy/5">
               <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-midnight-navy/40">
                  <span>San Francisco</span>
                  <span>Zurich</span>
                  <span>Singapore</span>
                  <span>Dubai</span>
               </div>
               <p className="text-[10px] font-black uppercase tracking-widest text-midnight-navy/20">
                  © 2026 Medivue Global Institutes. All medical rights reserved.
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ className, title, image, desc, badge }: { className: string, title: string, image: string, desc: string, badge?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -15, transition: { duration: 0.5 } }}
      className={`reveal-el relative group overflow-hidden rounded-[3rem] ${className}`}
    >
      <img 
        src={image} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        alt={title}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/90 via-midnight-navy/20 to-transparent group-hover:via-midnight-navy/40 transition-all duration-700" />
      
      <div className="absolute bottom-10 left-10 right-10">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-blue/90 text-white text-[9px] font-black uppercase tracking-widest mb-4">
            {badge}
          </span>
        )}
        <h3 className="text-3xl font-display font-black text-white mb-3">{title}</h3>
        <p className="text-white/80 text-sm font-light leading-relaxed max-w-xs">{desc}</p>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ text, author, role }: { text: string, author: string, role: string }) {
  return (
    <div className="reveal-el glass !bg-white/5 border border-midnight-navy/5 p-12 rounded-[3rem] shadow-sm hover:shadow-2xl hover:border-medical-blue/20 transition-all duration-700 group">
       <div className="flex gap-1 mb-8">
          {[1,2,3,4,5].map(i => <Star key={i} className="text-medical-blue w-4 h-4 fill-current group-hover:scale-125 transition-transform" />)}
       </div>
       <p className="text-2xl font-display font-medium text-midnight-navy/80 italic leading-relaxed mb-10">
          "{text}"
       </p>
       <div className="flex flex-col">
          <p className="text-lg font-black text-midnight-navy">{author}</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-medical-blue mt-1">{role}</p>
       </div>
    </div>
  );
}

function FooterNav({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="flex flex-col gap-6">
       <span className="text-[9px] font-black uppercase tracking-[0.5em] text-medical-blue">{title}</span>
       <ul className="flex flex-col gap-3">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs font-bold text-midnight-navy/40 hover:text-medical-blue transition-colors text-left">{l}</button>
            </li>
          ))}
       </ul>
    </div>
  );
}

function PhilosophyItem({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-8 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-cyan-glow/50 transition-all duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-cyan-glow transition-colors">{title}</h4>
        <p className="text-white/40 text-sm font-light leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function PhilosophyPoint({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-3xl bg-midnight-navy/5 border border-midnight-navy/5 flex flex-col gap-4">
       <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center text-medical-blue">
          {icon}
       </div>
       <div className="flex flex-col gap-1">
          <span className="text-xs font-black uppercase text-midnight-navy tracking-widest">{title}</span>
          <span className="text-[10px] text-midnight-navy/40 font-medium">{desc}</span>
       </div>
    </div>
  );
}

