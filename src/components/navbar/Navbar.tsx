import { useEffect, useState } from "react";

import { motion } from "motion/react";

import { ArrowRight, Menu, Phone } from "lucide-react";

type Props = {
  setIsMenuOpen: (v: boolean) => void;
  setIsBookingOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
};

export default function Navbar({
  setIsMenuOpen,
  setIsBookingOpen,
  scrollTo,
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 pt-3"
    >
      <div
        className={`
          mx-auto
          max-w-[1400px]
          transition-all
          duration-500
          ${
            isScrolled
              ? `
                h-[68px]
                lg:h-[78px]
                rounded-[24px]
                border border-white/40
                bg-white/70
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                px-5 lg:px-8
              `
              : `
                h-[80px]
                lg:h-[90px]
                px-2 lg:px-0
              `
          }
        `}
      >
        <div className="h-full flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="font-semibold text-xl lg:text-2xl tracking-tight text-[#0F172A]">
              MEDIVUE
            </span>

            <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
          </div>

          {/* NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {[
              ["Technology", "technology"],
              ["Services", "services"],
              ["Doctors", "clinic-hub"],
              ["Diagnostics", "pulse-analytics"],
              ["Experience", "experience"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium tracking-tight text-[#64748B] hover:text-[#0F172A] transition-colors duration-300"
              >
                {label}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 lg:gap-5">
            {/* CONTACT */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#0F172A]" />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[#64748B]">
                  Emergency
                </span>

                <span className="text-xs font-medium text-[#0F172A]">
                  +91 98765 43210
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#111827] hover:bg-[#14B8A6] hover:text-black text-white font-medium text-sm px-5 py-3 rounded-full transition-all duration-300"
            >
              <span>Book Appointment</span>

              <ArrowRight className="w-4 h-4" />
            </button>

            {/* MOBILE */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
