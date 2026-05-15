import { AnimatePresence, motion } from "motion/react";

import { Activity, Brain, HeartPulse, Shield, Sparkles, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setIsBookingOpen: (v: boolean) => void;
};

export default function PhilosophyDialog({
  isOpen,
  onClose,
  setIsBookingOpen,
}: Props) {
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
              fixed inset-0

              bg-[#0F172A]/60

              backdrop-blur-md

              z-[200]
            "
          />

          {/* ================= MODAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
              fixed

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              z-[210]

              w-[94%]
              sm:w-[92%]
              lg:w-[1180px]

              max-h-[92vh]

              overflow-hidden

              rounded-[28px]
              sm:rounded-[40px]

              bg-white

              shadow-[0_50px_140px_rgba(15,23,42,0.22)]
            "
          >
            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              {/* ================= LEFT PANEL ================= */}
              <div
                className="
                  relative

                  hidden lg:flex

                  flex-col justify-between

                  overflow-hidden

                  p-10

                  bg-gradient-to-br
                  from-[#07111F]
                  via-[#07111F]
                  to-[#0F766E]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute

                    top-[-20%]
                    right-[-20%]

                    w-[320px]
                    h-[320px]

                    rounded-full

                    bg-[#14B8A6]/20

                    blur-[100px]
                  "
                />

                {/* Top */}
                <div className="relative z-10">
                  <div
                    className="
                      w-16 h-16

                      rounded-3xl

                      bg-white/10

                      backdrop-blur-xl

                      flex items-center justify-center

                      mb-10
                    "
                  >
                    <Brain className="w-8 h-8 text-[#5EEAD4]" />
                  </div>

                  <p
                    className="
                      text-[10px]

                      uppercase

                      tracking-[0.28em]

                      font-black

                      text-white/60

                      mb-5
                    "
                  >
                    Clinical Philosophy
                  </p>

                  <h2
                    className="
                      text-5xl

                      leading-[0.95]

                      tracking-[-0.05em]

                      font-black

                      text-white
                    "
                  >
                    Human Care,
                    <br />
                    Enhanced By
                    <br />
                    Intelligence.
                  </h2>

                  <p
                    className="
                      mt-8

                      max-w-sm

                      leading-relaxed

                      text-white/65
                    "
                  >
                    Healthcare combining empathy, diagnostics, and intelligent
                    systems to create deeply personalized care.
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 flex flex-col gap-5 mt-14">
                  {[
                    "Precision Clinical Systems",
                    "Compassion First Approach",
                    "AI Assisted Diagnostics",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-[#5EEAD4]" />

                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= RIGHT CONTENT ================= */}
              <div
                className="
                  relative

                  overflow-y-auto

                  max-h-[92vh]

                  p-5
                  sm:p-7
                  lg:p-10
                "
              >
                {/* Close */}
                <button
                  onClick={onClose}
                  className="
                    absolute
                    top-4
                    right-4

                    sm:top-5
                    sm:right-5

                    w-9 h-9
                    sm:w-10 sm:h-10

                    rounded-full

                    bg-[#0F766E]/5

                    hover:bg-[#0F766E]/10

                    flex items-center justify-center

                    transition-all duration-300
                  "
                >
                  <X size={16} className="text-[#0F172A]" />
                </button>

                {/* ================= HEADER ================= */}
                <div className="mb-8 sm:mb-10">
                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]

                      uppercase

                      tracking-[0.22em]
                      sm:tracking-[0.25em]

                      font-black

                      text-[#14B8A6]
                    "
                  >
                    ProHealth Philosophy
                  </span>

                  <h3
                    className="
                      mt-3

                      text-[2rem]
                      sm:text-[3rem]
                      lg:text-5xl

                      leading-[0.95]

                      tracking-[-0.05em]

                      font-black

                      text-[#0F172A]
                    "
                  >
                    A New Era Of
                    <br />
                    Healthcare Experience.
                  </h3>

                  <p
                    className="
                      mt-4
                      sm:mt-5

                      max-w-2xl

                      text-[14px]
                      sm:text-base

                      leading-relaxed

                      text-[#0F172A]/55
                    "
                  >
                    Redefining healthcare through innovation, empathy, and
                    intelligent clinical systems while preserving the human
                    connection.
                  </p>
                </div>

                {/* ================= CARDS ================= */}
                <div
                  className="
                    grid
                    sm:grid-cols-2

                    gap-4
                    sm:gap-5
                  "
                >
                  {[
                    {
                      icon: <HeartPulse className="w-5 h-5 text-[#0F766E]" />,
                      title: "Compassionate Care",
                      desc: "Deeply personalized healthcare experiences centered around empathy and trust.",
                    },

                    {
                      icon: <Brain className="w-5 h-5 text-[#0F766E]" />,
                      title: "AI Clinical Systems",
                      desc: "Intelligent diagnostics enabling faster and more accurate healthcare delivery.",
                    },

                    {
                      icon: <Shield className="w-5 h-5 text-[#0F766E]" />,
                      title: "Trusted Infrastructure",
                      desc: "Enterprise-grade systems prioritizing safety, reliability, and privacy.",
                    },

                    {
                      icon: <Sparkles className="w-5 h-5 text-[#0F766E]" />,
                      title: "Future Innovation",
                      desc: "Continuous investment in emerging healthcare technologies and research.",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group

                        relative

                        overflow-hidden

                        rounded-[24px]
                        sm:rounded-[30px]

                        border border-[#0F172A]/5

                        bg-[#F8FAFC]

                        p-5
                        sm:p-7

                        transition-all duration-500
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          absolute
                          top-[-20%]
                          right-[-20%]

                          w-[140px]
                          h-[140px]

                          rounded-full

                          bg-[#14B8A6]/10

                          blur-[60px]

                          opacity-0

                          group-hover:opacity-100

                          transition-all duration-500
                        "
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className="
                            w-12 h-12
                            sm:w-14 sm:h-14

                            rounded-2xl

                            bg-[#14B8A6]/10

                            flex items-center justify-center

                            mb-5
                          "
                        >
                          {item.icon}
                        </div>

                        {/* Title */}
                        <h4
                          className="
                            text-[1.3rem]
                            sm:text-2xl

                            leading-[1]

                            tracking-[-0.03em]

                            font-black

                            text-[#0F172A]
                          "
                        >
                          {item.title}
                        </h4>

                        {/* Desc */}
                        <p
                          className="
                            mt-3
                            sm:mt-4

                            text-[13px]
                            sm:text-sm

                            leading-relaxed

                            text-[#0F172A]/55
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* ================= CTA ================= */}
                <div
                  className="
                    relative

                    overflow-hidden

                    mt-7
                    sm:mt-9

                    rounded-[26px]
                    sm:rounded-[32px]

                    bg-gradient-to-r
                    from-[#0F766E]
                    to-[#14B8A6]

                    p-5
                    sm:p-8

                    text-white
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      top-[-20%]
                      right-[-10%]

                      w-[220px]
                      h-[220px]

                      rounded-full

                      bg-white/10

                      blur-[80px]
                    "
                  />

                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-4 h-4 text-[#5EEAD4]" />

                      <span
                        className="
                          text-[9px]
                          sm:text-[10px]

                          uppercase

                          tracking-[0.18em]
                          sm:tracking-[0.2em]

                          font-black
                        "
                      >
                        Advanced Healthcare Access
                      </span>
                    </div>

                    {/* Heading */}
                    <h4
                      className="
                        text-[1.9rem]
                        sm:text-3xl

                        leading-[1]

                        tracking-[-0.04em]

                        font-black
                      "
                    >
                      Begin Your Personalized
                      <br />
                      Clinical Journey.
                    </h4>

                    {/* Desc */}
                    <p
                      className="
                        mt-4

                        max-w-xl

                        text-[14px]
                        sm:text-base

                        leading-relaxed

                        text-white/70
                      "
                    >
                      Connect with healthcare experts and experience
                      next-generation medical care designed around your needs.
                    </p>

                    {/* CTA */}
                    <button
                      onClick={() => {
                        onClose();
                        setIsBookingOpen(true);
                      }}
                      className="
                        mt-6
                        sm:mt-8

                        h-[52px]
                        sm:h-[58px]

                        px-6
                        sm:px-7

                        rounded-2xl

                        bg-white

                        text-[#0F766E]

                        text-[11px]
                        sm:text-sm

                        font-black

                        uppercase

                        tracking-[0.14em]
                        sm:tracking-[0.15em]

                        hover:scale-[1.02]

                        transition-all duration-500
                      "
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
