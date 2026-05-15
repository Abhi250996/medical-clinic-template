import { motion } from "motion/react";
import { Activity, ArrowRight, Menu, Phone, ShieldCheck } from "lucide-react";

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
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-[100]

        w-[95%] max-w-[1400px]

        rounded-[28px]
        border border-white/20

        bg-white/70
        backdrop-blur-2xl

        shadow-[0_10px_60px_rgba(15,118,110,0.10)]

        px-4 sm:px-6 lg:px-10
      "
    >
      <div className="h-[74px] lg:h-[86px] flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            flex items-center gap-3
            cursor-pointer
            select-none
          "
        >
          {/* Logo Icon */}
          <div
            className="
              relative
              w-11 h-11 lg:w-14 lg:h-14
              rounded-2xl

              bg-gradient-to-br
              from-[#0F766E]
              via-[#14B8A6]
              to-[#67E8F9]

              flex items-center justify-center

              shadow-[0_10px_30px_rgba(20,184,166,0.35)]
            "
          >
            <div
              className="
                absolute inset-[1px]
                rounded-2xl
                bg-gradient-to-br
                from-white/20
                to-transparent
              "
            />

            <Activity className="relative z-10 text-white w-5 h-5 lg:w-6 lg:h-6" />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <h1
              className="
                text-[18px] sm:text-[20px] lg:text-[26px]
                leading-none
                font-black
                tracking-[-0.04em]
                text-[#0F172A]
              "
            >
              ProHealth
            </h1>

            <span
              className="
                mt-1
                text-[9px] lg:text-[10px]

                uppercase
                tracking-[0.35em]

                font-bold
                text-[#14B8A6]
              "
            >
              Medical Institute
            </span>
          </div>
        </motion.div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            ["Research", "research"],
            ["Gallery", "gallery"],
            ["Pulse AI", "pulse"],
            ["Services", "services"],
            ["Reviews", "review"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="
        relative
        group

        text-[13px]
        font-semibold
        tracking-wide

        text-[#0F172A]/70
        hover:text-[#0F766E]

        transition-all duration-300
      "
            >
              {label}

              <span
                className="
          absolute
          left-1/2 -translate-x-1/2
          -bottom-2

          h-[2px]
          w-0

          rounded-full

          bg-gradient-to-r
          from-[#0F766E]
          to-[#14B8A6]

          transition-all duration-300

          group-hover:w-full
        "
              />
            </button>
          ))}
        </div>
        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3 lg:gap-5">
          {/* Contact */}
          <div
            className="
              hidden xl:flex
              items-center gap-3

              pr-5
              border-r border-[#0F172A]/10
            "
          >
            <div
              className="
                w-11 h-11
                rounded-full

                bg-[#0F766E]/10

                flex items-center justify-center
              "
            >
              <Phone className="w-4 h-4 text-[#0F766E]" />
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] text-[#0F172A]/50">Emergency</span>

              <span className="text-[14px] font-bold text-[#0F172A]">
                +91 98765 43210
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsBookingOpen(true)}
            className="
              hidden sm:flex
              items-center gap-3

              relative overflow-hidden

              px-5 lg:px-7
              py-3.5

              rounded-full

              bg-gradient-to-r
              from-[#0F766E]
              via-[#11998E]
              to-[#14B8A6]

              text-white

              font-bold
              text-[11px]
              lg:text-[12px]

              uppercase
              tracking-[0.2em]

              shadow-[0_15px_40px_rgba(20,184,166,0.25)]

              transition-all duration-500
            "
          >
            <div
              className="
                absolute inset-0
                bg-white/10
                opacity-0 hover:opacity-100
                transition-opacity duration-500
              "
            />

            <ShieldCheck className="relative z-10 w-4 h-4" />

            <span className="relative z-10">Book Appointment</span>

            <ArrowRight className="relative z-10 w-4 h-4" />
          </motion.button>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="
              lg:hidden

              w-11 h-11
              rounded-xl

              border border-[#0F172A]/10

              bg-white/60
              backdrop-blur-xl

              flex items-center justify-center

              text-[#0F172A]

              active:scale-95
              transition-all
            "
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
