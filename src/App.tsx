import { motion, useScroll, useTransform } from "motion/react";
import { Phone, Calendar, Heart, Shield, ChevronRight, Menu, X, Star, ArrowUpRight } from "lucide-react";
import { useState, type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms using Motion
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const statsY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  useEffect(() => {
    // GSAP ScrollTrigger for section reveals
    const sections = document.querySelectorAll(".reveal-section");
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    // Parallax background elements
    gsap.to(".parallax-bg", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold/30 selection:text-charcoal overflow-x-hidden">
      {/* Parallax Floating Orbs */}
      <div className="fixed top-20 right-[10%] w-[30vw] h-[30vw] gold-gradient opacity-[0.03] rounded-full blur-[120px] pointer-events-none parallax-bg" />
      <div className="fixed bottom-20 left-[5%] w-[40vw] h-[40vw] charcoal-gradient opacity-[0.02] rounded-full blur-[150px] pointer-events-none parallax-bg" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center shadow-lg shadow-gold/20">
              <Heart className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-charcoal tracking-tight">
              Evercare
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {["About Us", "Features", "Review"].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                className="text-sm font-medium text-charcoal/60 hover:text-gold transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-charcoal text-white px-8 py-3 rounded-full font-medium hover:bg-gold transition-all duration-500 group shadow-xl shadow-charcoal/10"
            >
              <Phone className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
              <span>Emergency 24/7</span>
            </motion.button>
          </div>

          <button 
            className="md:hidden text-charcoal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-charcoal/5 px-6 pb-10 pt-4 absolute w-full"
          >
            <div className="flex flex-col gap-6">
              {["About Us", "Features", "Review"].map((link) => (
                <button 
                  key={link} 
                  onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                  className="text-2xl font-display font-bold text-charcoal text-left"
                >
                  {link}
                </button>
              ))}
              <div className="h-px bg-charcoal/5 w-full my-2" />
              <button className="w-full gold-gradient text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: heroTextY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 relative z-10"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-gold/50" />
                <span className="text-gold-dark text-xs font-bold uppercase tracking-[0.2em]">
                  The Future of Health
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-display font-bold text-charcoal leading-[1] tracking-tighter mb-6">
                Luxury Care <br />
                <span className="text-gold italic font-normal inline-block mt-2">Modern Precision</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-charcoal/50 leading-relaxed max-w-lg font-light"
            >
              Where medical excellence meets five-star hospitality. 
              We don't just treat symptoms; we curate your lifelong wellness journey.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              <button className="gold-gradient text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-500 flex items-center gap-3 group">
                Begin Your Journey
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex flex-col gap-2 justify-center">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                        className="w-12 h-12 rounded-full border-4 border-white shadow-xl"
                        alt="Patient"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-charcoal flex items-center justify-center text-[10px] font-bold text-white shadow-xl">
                      +9k
                    </div>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="flex text-gold">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-charcoal/40 tracking-widest">Global Trust</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[12px] border-white group">
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1400" 
                alt="Elite Medical Professionals" 
                className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 glass px-6 py-4 rounded-2xl border border-white/50 shadow-2xl">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-bold text-charcoal tracking-wide">Live Consultations Available</span>
              </div>
            </div>

            {/* Cinematic Floating Accents */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 w-24 h-24 gold-gradient rounded-full opacity-20 blur-2xl" 
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-gold/10 rounded-full" />
            
            {/* Floating Achievement */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-12 top-1/4 glass p-6 rounded-[2rem] shadow-2xl z-30 border border-gold/20 backdrop-blur-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                  <Star className="fill-current" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-charcoal/30 leading-none">Forbes <br /> Innovation</span>
              </div>
              <p className="text-xs font-medium text-charcoal/70 italic leading-relaxed">
                "Redefining the standards of private healthcare."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-16 bg-charcoal relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-8 bg-gold absolute top-[-32px]" 
            />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal">Scroll</span>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        style={{ y: statsY }}
        className="bg-charcoal py-32 text-white relative overflow-hidden z-20 rounded-t-[4rem] -mt-20"
      >
        <div className="absolute inset-0 gold-gradient opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StatCard 
              icon={<Calendar className="w-8 h-8 text-gold" />}
              title="15+ Years"
              subtitle="Legacy of Trust"
              description="Founded in London, expanded globally. A century of medical wisdom."
            />
            <StatCard 
              icon={<Heart className="w-8 h-8 text-gold" />}
              title="99.2%"
              subtitle="Patient Satisfaction"
              description="Our commitment to excellence reflected in every smiling patient."
            />
            <StatCard 
              icon={<Shield className="w-8 h-8 text-gold" />}
              title="Elite Care"
              subtitle="Globally Certified"
              description="Top 1% of medical facilities worldwide with JCI accreditation."
            />
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section id="about-us" className="py-32 bg-white reveal-section">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="About us" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
          </div>
          
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight">
              A Legacy Built on <br />
              <span className="italic text-gold font-normal">Human Connection.</span>
            </h2>
            <p className="text-lg text-charcoal/60 leading-relaxed font-light">
              We believe that true healing begins with a conversation. Evercare was founded with the vision of removing the clinical coldness of modern medicine and replacing it with warmth, time, and attention.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-display font-bold text-charcoal">240+</p>
                <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold mt-1">Specialists</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-charcoal">12</p>
                <p className="text-sm text-charcoal/40 uppercase tracking-widest font-bold mt-1">Global Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-charcoal/5 reveal-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]"
            >
              Exclusivity
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal mt-4">
              Premium Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="Remote Health"
              desc="24/7 access to your personal doctor via encrypted HD video."
              color="charcoal"
            />
             <FeatureCard 
              title="Genomic Screening"
              desc="Advanced DNA analysis to predict and prevent future risks."
              color="gold"
            />
             <FeatureCard 
              title="Wellness Concierge"
              desc="Personal assistants for your nutrition, fitness and sleep."
              color="charcoal"
            />
             <FeatureCard 
              title="Express Pharmacy"
              desc="Doorstep delivery of medications globally in 24 hours."
              color="charcoal"
            />
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="review" className="py-32 bg-white overflow-hidden relative reveal-section">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
             <div className="flex flex-col gap-4">
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">Testimonials</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal">
                  Trusted by the <br /> 
                  <span className="italic font-normal text-gold">Discerning.</span>
                </h2>
             </div>
             
             <div className="relative p-12 glass rounded-[3rem] border-gold/10">
                <Star className="text-gold w-12 h-12 absolute -top-6 -left-6 fill-current" />
                <p className="text-2xl font-light text-charcoal leading-relaxed mb-8 italic">
                  "The level of detail and personal attention at Evercare is unlike anything I've experienced in global private health. It's not just a clinic; it's a sanctuary for wellness."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gold-gradient p-1">
                    <img 
                      src="https://i.pravatar.cc/100?img=11" 
                      className="w-full h-full rounded-full object-cover grayscale brightness-110" 
                      alt="Reviewer"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-charcoal">Sebastian Vane</p>
                    <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">Philanthropist & Entrepreneur</p>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="flex flex-col gap-6 pt-12">
                <ReviewSmall name="Elena R." rating={5} text="Incredible remote support." />
                <ReviewSmall name="Marcus T." rating={5} text="Premium facility." />
             </div>
             <div className="flex flex-col gap-6">
                <ReviewSmall name="David L." rating={5} text="Life-changing checkup." />
                <ReviewSmall name="Sophia K." rating={5} text="Truly five-star." />
             </div>
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 gold-gradient opacity-10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-6">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className="max-w-7xl mx-auto rounded-[4rem] charcoal-gradient p-16 md:p-32 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 gold-gradient opacity-10 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col items-center gap-10">
            <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight">
              Ready for a higher <br /> standard of <span className="text-gold italic font-normal">Living?</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl font-light">
              Join our exclusive community today. Limited memberships available for this quarter.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="gold-gradient text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-gold/20 hover:scale-105 transition-transform">
                 Apply Now
               </button>
               <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                 Virtual Tour
               </button>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-charcoal/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
              <div className="flex flex-col gap-6 items-center md:items-start">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center">
                     <Heart className="text-white w-6 h-6" />
                   </div>
                   <span className="text-2xl font-display font-bold text-charcoal">Evercare</span>
                 </div>
                 <p className="text-charcoal/40 text-sm leading-relaxed max-w-[200px]">
                   Elevating the human condition through artful medicine.
                 </p>
              </div>
              
              <FooterLinks title="Expertise" links={["Oncology", "Cardiology", "Neurology", "Genetics"]} />
              <FooterLinks title="Community" links={["About us", "Careers", "Impact", "Press"]} />
              <FooterLinks title="Resources" links={["Health Guides", "Portal", "Consult", "Location"]} />
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-charcoal/5">
              <p className="text-xs text-charcoal/30 flex items-center gap-2">
                <Shield className="w-3 h-3" />
                © 2026 Evercare Health Group. London · Dubai · New York
              </p>
              
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">
                <a href="#" className="hover:text-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-gold transition-colors">Status</a>
                <a href="#" className="hover:text-gold transition-colors">Cookie Settings</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, title, subtitle, description }: { icon: ReactNode, title: string, subtitle: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-3xl group hover:bg-white/10 transition-all duration-500"
    >
      <div className="mb-10 bg-white/5 w-20 h-20 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-700">
        {icon}
      </div>
      <h3 className="text-5xl font-display font-medium text-white mb-2 leading-none">{title}</h3>
      <p className="text-gold text-xs tracking-[0.3em] uppercase font-bold mb-6">{subtitle}</p>
      <p className="text-white/30 text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

function FeatureCard({ title, desc, color }: { title: string, desc: string, color: "charcoal" | "gold" }) {
  return (
    <div className={`p-10 rounded-[2.5rem] flex flex-col gap-8 group transition-all duration-500 ${color === "gold" ? "gold-gradient text-white shadow-2xl shadow-gold/20" : "bg-white border border-charcoal/5 hover:border-gold/20"}`}>
       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color === "gold" ? "bg-white/20" : "bg-gold/10 text-gold"}`}>
          <Shield className="w-6 h-6" />
       </div>
       <div className="flex flex-col gap-4">
          <h4 className={`text-xl font-display font-bold ${color === "gold" ? "text-white" : "text-charcoal"}`}>{title}</h4>
          <p className={`text-sm leading-relaxed ${color === "gold" ? "text-white/70" : "text-charcoal/40"}`}>{desc}</p>
       </div>
       <button className={`mt-auto text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300 ${color === "gold" ? "text-white" : "text-gold"}`}>
          Learn More <ChevronRight className="w-4 h-4" />
       </button>
    </div>
  );
}

function ReviewSmall({ name, rating, text }: { name: string, rating: number, text: string }) {
  return (
    <div className="bg-white border border-charcoal/5 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500">
       <div className="flex text-gold mb-2">
          {Array.from({ length: rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
       </div>
       <p className="text-sm font-medium text-charcoal mb-4">"{text}"</p>
       <p className="text-[10px] font-bold uppercase text-charcoal/30 tracking-widest">— {name}</p>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="flex flex-col gap-6">
       <h5 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em]">{title}</h5>
       <ul className="flex flex-col gap-3">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="text-sm text-charcoal/50 hover:text-charcoal transition-colors">{l}</a>
            </li>
          ))}
       </ul>
    </div>
  );
}
