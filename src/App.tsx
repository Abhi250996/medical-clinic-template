import { useEffect, useRef, useState } from "react";

import { useScroll, useSpring, useTransform } from "motion/react";

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
import ResearchSection from "./sections/research/ResearchSection";
import PulseSection from "./sections/pulse/PulseSection";
import ServicesSection from "./sections/services/ServicesSection";
import GallerySection from "./sections/gallery/GallerySection";
import ReviewsSection from "./sections/reviews/ReviewsSection";
import FinalCTA from "./sections/cta/FinalCTA";

/* Footer */
import FooterNav from "./components/footer/FooterNav";

gsap.registerPlugin(ScrollTrigger);

function App() {
  /* States */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  /* Refs */
  const heroRef = useRef<HTMLDivElement>(null);

  /* Scroll */
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* Motion Values */
  const cameraZ = useTransform(smoothProgress, [0, 0.4], [1, 1.2]);

  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);

  const bgImageY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  const textParallax = useTransform(smoothProgress, [0, 1], [0, -500]);

  /* GSAP */
  useEffect(() => {
    const reveals = gsap.utils.toArray(".reveal-el");

    reveals.forEach((el: any) => {
      gsap.fromTo(
        el,
        {
          y: 60,
          opacity: 0,
          skewY: 2,
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "expo.out",

          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.to(".camera-view", {
      filter: "blur(10px)",

      scrollTrigger: {
        trigger: ".hero-vision",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  /* Scroll To */
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
    <div
      className="
      bg-[#F4FBFA]

      overflow-hidden

      text-[#0F172A]

      selection:bg-[#14B8A6]/20
      selection:text-[#0F766E]
    "
    >
      {/* Dialogs */}
      <PhilosophyDialog
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
        setIsBookingOpen={setIsBookingOpen}
      />

      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Navigation */}
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

      {/* Sections */}
      <HeroSection setIsBookingOpen={setIsBookingOpen} />

      <ClinicalSection setIsPhilosophyOpen={setIsPhilosophyOpen} />

      <ResearchSection />

      <PulseSection scrollYProgress={scrollYProgress} />

      <ServicesSection />

      <GallerySection />

      <ReviewsSection />

      <FinalCTA setIsBookingOpen={setIsBookingOpen} />

      {/* Footer */}
      <footer
        className="
    py-10
    sm:py-14
    lg:py-20

    border-t border-[#0F172A]/5

    bg-[#F4FBFA]
  "
      >
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className="
        flex flex-col

        gap-8
        sm:gap-12
        lg:gap-16
      "
          >
            {/* ================= TOP ================= */}
            <div
              className="
          grid

          lg:grid-cols-[0.9fr_1.1fr]

          gap-8
          sm:gap-10
          lg:gap-16
        "
            >
              {/* ================= BRAND ================= */}
              <div className="max-w-sm">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                w-10 h-10
                sm:w-12 sm:h-12

                rounded-full

                bg-gradient-to-r
                from-[#0F766E]
                to-[#14B8A6]

                flex items-center justify-center

                shrink-0
              "
                  >
                    <Activity className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3
                      className="
                  text-xl
                  sm:text-2xl

                  leading-none

                  font-black

                  tracking-[-0.04em]
                "
                    >
                      MEDIVUE
                    </h3>

                    <p
                      className="
                  mt-1

                  text-[8px]
                  sm:text-[9px]

                  uppercase

                  tracking-[0.22em]
                  sm:tracking-[0.3em]

                  text-[#14B8A6]
                "
                    >
                      Healthcare Institutes
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
              mt-4
              sm:mt-6

              text-[13px]
              sm:text-sm

              leading-relaxed

              text-[#0F172A]/55
            "
                >
                  Intelligent healthcare infrastructure combining advanced
                  clinical systems with compassionate patient care.
                </p>
              </div>

              {/* ================= NAVIGATION ================= */}
              <div
                className="
            grid

            grid-cols-2
            sm:grid-cols-3

            gap-4
            sm:gap-6
            lg:gap-10
          "
              >
                <FooterNav
                  title="Vision"
                  links={["Genomics", "Diagnostics", "Wellness", "Innovation"]}
                />

                <FooterNav
                  title="Clinical"
                  links={["Doctors", "Research", "Monitoring", "Care Systems"]}
                />

                <FooterNav
                  title="Legal"
                  links={["Privacy", "Terms", "Support", "Security"]}
                />
              </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div
              className="
          flex flex-col
          sm:flex-row

          items-start
          sm:items-center

          justify-between

          gap-4
          sm:gap-6

          pt-5
          sm:pt-6

          border-t border-[#0F172A]/5
        "
            >
              {/* Cities */}
              <div
                className="
            flex flex-wrap

            items-center

            gap-x-4
            gap-y-2
            sm:gap-6

            text-[8px]
            sm:text-[9px]

            font-black

            uppercase

            tracking-[0.16em]
            sm:tracking-[0.22em]

            text-[#0F172A]/35
          "
              >
                <span>San Francisco</span>
                <span>Zurich</span>
                <span>Singapore</span>
                <span>Dubai</span>
              </div>

              {/* Copyright */}
              <p
                className="
            text-[8px]
            sm:text-[10px]

            uppercase

            tracking-[0.14em]
            sm:tracking-[0.18em]

            text-[#0F172A]/35
          "
              >
                © 2026 Medivue Global Institutes.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
