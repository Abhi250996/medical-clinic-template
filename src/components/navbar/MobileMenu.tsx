import { AnimatePresence, motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
  setIsBookingOpen: (v: boolean) => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  scrollTo,
  setIsBookingOpen,
}: Props) {
  const menuItems = [
    ["Research", "research"],
    ["Gallery", "gallery"],
    ["Pulse AI", "pulse"],
    ["Services", "services"],
    ["Reviews", "review"],
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ================= OVERLAY ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              lg:hidden
              fixed inset-0
              bg-[#07111F]/60
              backdrop-blur-xl
              z-[140]
            "
          />

          {/* ================= MENU ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: -24,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -18,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 280,
            }}
            className="
              lg:hidden

              fixed

              top-20
              sm:top-24

              left-3
              right-3

              sm:left-auto
              sm:right-6
              sm:w-[400px]

              rounded-[30px]
              sm:rounded-[36px]

              bg-white/85

              backdrop-blur-3xl

              border border-white/20

              shadow-[0_40px_120px_rgba(15,118,110,0.20)]

              overflow-y-auto
              max-h-[92vh]

              z-[150]
            "
          >
            {/* ================= BACKGROUND GLOW ================= */}
            <div
              className="
                absolute
                top-[-20%]
                right-[-20%]

                w-[220px]
                h-[220px]

                rounded-full

                bg-[#14B8A6]/10

                blur-[90px]
              "
            />

            {/* ================= HEADER ================= */}
            <div
              className="
                relative z-10

                flex items-center justify-between

                px-5 py-4
                sm:px-6 sm:py-5

                border-b border-[#0F766E]/10
              "
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    relative

                    w-11 h-11
                    sm:w-14 sm:h-14

                    rounded-2xl
                    sm:rounded-3xl

                    bg-gradient-to-br
                    from-[#0F766E]
                    via-[#14B8A6]
                    to-[#5EEAD4]

                    flex items-center justify-center

                    shadow-[0_12px_30px_rgba(20,184,166,0.25)]
                  "
                >
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <div className="flex flex-col">
                  <span
                    className="
                      text-[1.1rem]
                      sm:text-[1.35rem]

                      leading-none

                      tracking-[-0.04em]

                      font-black

                      text-[#07111F]
                    "
                  >
                    ProHealth
                  </span>

                  <span
                    className="
                      mt-1

                      text-[8px]
                      sm:text-[9px]

                      uppercase

                      tracking-[0.28em]
                      sm:tracking-[0.35em]

                      font-black

                      text-[#14B8A6]
                    "
                  >
                    Medical Institute
                  </span>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="
                  w-10 h-10
                  sm:w-11 sm:h-11

                  rounded-2xl

                  bg-[#0F766E]/5

                  flex items-center justify-center

                  text-[#07111F]

                  hover:bg-[#0F766E]/10

                  transition-all duration-500
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* ================= NAVIGATION ================= */}
            <div className="relative z-10 px-4 sm:px-5 pt-4 sm:pt-5">
              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center gap-2

                  px-2
                "
              >
                <Sparkles className="w-3 h-3 text-[#14B8A6]" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]

                    uppercase

                    tracking-[0.28em]
                    sm:tracking-[0.35em]

                    font-black

                    text-[#14B8A6]
                  "
                >
                  Navigation
                </span>
              </div>

              {/* Menu Items */}
              <div
                className="
                  mt-4

                  flex flex-col

                  gap-2.5
                "
              >
                {menuItems.map(([label, id], i) => (
                  <motion.button
                    key={id}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.06,
                      },
                    }}
                    onClick={() => {
                      scrollTo(id);
                      onClose();
                    }}
                    className="
                      group

                      relative

                      overflow-hidden

                      flex items-center justify-between

                      px-4 py-4
                      sm:px-5 sm:py-5

                      rounded-[22px]
                      sm:rounded-3xl

                      bg-white/70

                      border border-[#0F766E]/5

                      hover:border-[#14B8A6]/20

                      hover:bg-gradient-to-r
                      hover:from-[#0F766E]/5
                      hover:to-[#14B8A6]/10

                      transition-all duration-500
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute
                        right-[-20%]
                        top-[-20%]

                        w-[120px]
                        h-[120px]

                        rounded-full

                        bg-[#14B8A6]/10

                        blur-[50px]

                        opacity-0

                        group-hover:opacity-100

                        transition-all duration-500
                      "
                    />

                    {/* Text */}
                    <span
                      className="
                        relative z-10

                        text-[14px]
                        sm:text-[15px]

                        font-semibold

                        tracking-[-0.01em]

                        text-[#07111F]
                      "
                    >
                      {label}
                    </span>

                    {/* Arrow */}
                    <div
                      className="
                        relative z-10

                        w-9 h-9
                        sm:w-10 sm:h-10

                        rounded-2xl

                        bg-[#14B8A6]/10

                        flex items-center justify-center

                        transition-all duration-500

                        group-hover:bg-[#14B8A6]
                      "
                    >
                      <ArrowRight
                        size={16}
                        className="
                          text-[#14B8A6]

                          transition-all duration-500

                          group-hover:text-white
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ================= CONTACT CARD ================= */}
            <div className="relative z-10 px-4 sm:px-5 mt-5">
              <div
                className="
                  relative

                  overflow-hidden

                  rounded-[28px]
                  sm:rounded-[34px]

                  bg-gradient-to-br
                  from-[#0F766E]
                  via-[#11998E]
                  to-[#14B8A6]

                  p-5
                  sm:p-6

                  text-white

                  shadow-[0_20px_60px_rgba(20,184,166,0.22)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-[-20%]
                    right-[-20%]

                    w-[180px]
                    h-[180px]

                    rounded-full

                    bg-white/10

                    blur-[90px]
                  "
                />

                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-11 h-11
                        sm:w-14 sm:h-14

                        rounded-2xl
                        sm:rounded-3xl

                        bg-white/10

                        border border-white/10

                        backdrop-blur-2xl

                        flex items-center justify-center
                      "
                    >
                      <Phone size={18} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          sm:text-[10px]

                          uppercase

                          tracking-[0.22em]
                          sm:tracking-[0.25em]

                          text-white/70
                        "
                      >
                        Emergency Support
                      </p>

                      <h3
                        className="
                          mt-1

                          text-[1.15rem]
                          sm:text-[1.4rem]

                          leading-none

                          tracking-[-0.03em]

                          font-black
                        "
                      >
                        +91 98765 43210
                      </h3>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setIsBookingOpen(true);
                      onClose();
                    }}
                    className="
                      group

                      mt-5

                      w-full

                      h-[52px]
                      sm:h-[58px]

                      rounded-2xl

                      bg-white

                      text-[#0F766E]

                      text-[10px]
                      sm:text-[11px]

                      uppercase

                      tracking-[0.16em]
                      sm:tracking-[0.18em]

                      font-black

                      flex items-center justify-center gap-3

                      hover:scale-[1.02]

                      transition-all duration-500
                    "
                  >
                    <ShieldCheck
                      size={16}
                      className="
                        transition-transform

                        group-hover:scale-110
                      "
                    />
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* ================= FOOTER ================= */}
            <div
              className="
                relative z-10

                flex items-center justify-between

                px-5 py-4 mt-3
                sm:px-6 sm:py-5

                border-t border-[#0F766E]/5
              "
            >
              <span
                className="
                  text-[9px]
                  sm:text-[10px]

                  uppercase

                  tracking-[0.22em]
                  sm:tracking-[0.25em]

                  font-bold

                  text-[#07111F]/40
                "
              >
                ProHealth © 2026
              </span>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                <div className="w-2 h-2 rounded-full bg-[#0F766E]" />
                <div className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
