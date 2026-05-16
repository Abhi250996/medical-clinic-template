import { useEffect, useState } from "react";

import { useScroll, useSpring } from "motion/react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Activity } from "lucide-react";

/* Navbar */
import Navbar from "./components/navbar/Navbar";
import MobileMenu from "./components/navbar/MobileMenu";

/* Dialogs */
import BookingDialog from "./components/dialogs/BookingDialog";
import PhilosophyDialog from "./components/dialogs/PhilosophyDialog";

/* Sections */
import HeroSection from "./sections/hero/HeroSection";
import ClinicalSection from "./sections/clinical/ClinicalSection";
import ServicesSection from "./sections/services/ServicesSection";
import GallerySection from "./sections/gallery/GallerySection";
import PulseSection from "./sections/pulse/PulseSection";
import ResearchSection from "./sections/research/ResearchSection";
import ReviewsSection from "./sections/reviews/ReviewsSection";
import FinalCTA from "./sections/cta/FinalCTA";

/* Footer */
import FooterNav from "./components/footer/FooterNav";

gsap.registerPlugin(ScrollTrigger);

function App() {
  /* STATES */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  /* SCROLL */
  const { scrollYProgress } = useScroll();

  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* REVEALS */
  useEffect(() => {
    const reveals = gsap.utils.toArray(".reveal-el");

    reveals.forEach((el: any) => {
      gsap.fromTo(
        el,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  /* SCROLL ENGINE */
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
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#F0F4F4] text-[#0F172A] overflow-hidden selection:bg-[#14B8A6]/30 selection:text-[#0F172A]">
      ```
      {/* DIALOGS */}
      <PhilosophyDialog
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
        setIsBookingOpen={setIsBookingOpen}
      />
      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      {/* NAVIGATION */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        scrollTo={scrollTo}
        setIsBookingOpen={setIsBookingOpen}
      />
      <Navbar
        setIsMenuOpen={setIsMenuOpen}
        setIsBookingOpen={setIsBookingOpen}
        scrollTo={scrollTo}
      />
      {/* WEBSITE */}
      <HeroSection setIsBookingOpen={setIsBookingOpen} />
      <ClinicalSection setIsPhilosophyOpen={setIsPhilosophyOpen} />
      <ServicesSection setIsBookingOpen={setIsBookingOpen} />
      <GallerySection setIsBookingOpen={setIsBookingOpen} />
      <PulseSection setIsBookingOpen={setIsBookingOpen} />
      <ResearchSection setIsBookingOpen={setIsBookingOpen} />
      <ReviewsSection />
      <FinalCTA setIsBookingOpen={setIsBookingOpen} />
      {/* FOOTER */}
      <footer className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="relative overflow-hidden bg-[#111827] rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          {/* SOFT GLOW */}
          <div className="absolute top-[-20%] right-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
            {/* LEFT */}
            <div className="max-w-md">
              {/* BRAND */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#14B8A6]" />
                </div>

                <div>
                  <h3 className="text-2xl tracking-tight font-semibold text-white">
                    MEDIVUE
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Smart Healthcare Platform
                  </p>
                </div>
              </div>

              {/* DESC */}
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                Connected healthcare platform for appointments, consultations
                and patient care experiences.
              </p>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <FooterNav
                title="Platform"
                links={["Appointments", "Doctors", "Diagnostics"]}
              />

              <FooterNav
                title="Services"
                links={["Consultations", "Lab Testing", "Healthcare Access"]}
              />

              <FooterNav
                title="Support"
                links={["Privacy", "Security", "Contact"]}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="relative z-10 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* STATUS */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

              <span className="text-[11px] text-white/50">
                Live healthcare platform
              </span>
            </div>

            {/* COPYRIGHT */}
            <p className="text-[11px] text-white/40">
              © 2026 Medivue Healthcare
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
