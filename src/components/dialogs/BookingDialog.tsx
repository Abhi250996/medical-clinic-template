import { AnimatePresence, motion } from "motion/react";

import { Calendar, Clock3, Shield, Stethoscope, User, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingDialog({ isOpen, onClose }: Props) {
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

              bg-[#0F172A]/55

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
              lg:w-[960px]

              max-h-[92vh]

              overflow-hidden

              rounded-[28px]
              sm:rounded-[36px]

              bg-white

              shadow-[0_40px_120px_rgba(15,23,42,0.18)]
            "
          >
            <div className="grid lg:grid-cols-2">
              {/* ================= LEFT PANEL ================= */}
              <div
                className="
                  relative

                  hidden lg:flex

                  flex-col justify-between

                  p-10

                  overflow-hidden

                  bg-gradient-to-br
                  from-[#0F766E]
                  via-[#11998E]
                  to-[#14B8A6]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute

                    top-[-20%]
                    right-[-20%]

                    w-[300px]
                    h-[300px]

                    rounded-full

                    bg-white/10

                    blur-[80px]
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
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>

                  <p
                    className="
                      text-[10px]

                      uppercase

                      tracking-[0.25em]

                      font-black

                      text-white/70

                      mb-5
                    "
                  >
                    PROHEALTH MEDICAL
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
                    Book Your
                    <br />
                    Appointment.
                  </h2>

                  <p
                    className="
                      mt-8

                      max-w-sm

                      leading-relaxed

                      text-white/70
                    "
                  >
                    Schedule a consultation with our specialists and receive
                    personalized healthcare support.
                  </p>
                </div>

                {/* Bottom Features */}
                <div className="relative z-10 flex flex-col gap-5 mt-14">
                  {[
                    "Advanced Diagnostics",
                    "24/7 Patient Assistance",
                    "AI Powered Clinical Care",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-[#5EEAD4]" />

                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= RIGHT FORM ================= */}
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
                <div className="mb-7 sm:mb-9">
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
                    Appointment Form
                  </span>

                  <h3
                    className="
                      mt-3

                      text-[2rem]
                      sm:text-4xl

                      leading-[0.95]

                      tracking-[-0.04em]

                      font-black

                      text-[#0F172A]
                    "
                  >
                    Get Started
                  </h3>

                  <p
                    className="
                      mt-3
                      sm:mt-4

                      text-[14px]
                      sm:text-base

                      leading-relaxed

                      text-[#0F172A]/50
                    "
                  >
                    Fill in your information and our healthcare team will
                    contact you shortly.
                  </p>
                </div>

                {/* ================= FORM ================= */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      className="
                        text-[10px]
                        sm:text-[11px]

                        uppercase

                        tracking-[0.16em]
                        sm:tracking-[0.18em]

                        font-black

                        text-[#0F172A]/40
                      "
                    >
                      Full Name
                    </label>

                    <div
                      className="
                        mt-2.5
                        sm:mt-3

                        flex items-center gap-3

                        px-4 py-3.5
                        sm:px-5 sm:py-4

                        rounded-2xl

                        border border-[#0F172A]/5

                        bg-[#F8FAFC]
                      "
                    >
                      <User size={17} className="text-[#14B8A6]" />

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="
                          w-full

                          bg-transparent

                          outline-none

                          text-sm
                          sm:text-base

                          text-[#0F172A]

                          placeholder:text-[#0F172A]/30
                        "
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      className="
                        text-[10px]
                        sm:text-[11px]

                        uppercase

                        tracking-[0.16em]
                        sm:tracking-[0.18em]

                        font-black

                        text-[#0F172A]/40
                      "
                    >
                      Appointment Date
                    </label>

                    <div
                      className="
                        mt-2.5
                        sm:mt-3

                        flex items-center gap-3

                        px-4 py-3.5
                        sm:px-5 sm:py-4

                        rounded-2xl

                        border border-[#0F172A]/5

                        bg-[#F8FAFC]
                      "
                    >
                      <Calendar size={17} className="text-[#14B8A6]" />

                      <input
                        type="date"
                        className="
                          w-full

                          bg-transparent

                          outline-none

                          text-sm
                          sm:text-base

                          text-[#0F172A]
                        "
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      className="
                        text-[10px]
                        sm:text-[11px]

                        uppercase

                        tracking-[0.16em]
                        sm:tracking-[0.18em]

                        font-black

                        text-[#0F172A]/40
                      "
                    >
                      Preferred Time
                    </label>

                    <div
                      className="
                        mt-2.5
                        sm:mt-3

                        flex items-center gap-3

                        px-4 py-3.5
                        sm:px-5 sm:py-4

                        rounded-2xl

                        border border-[#0F172A]/5

                        bg-[#F8FAFC]
                      "
                    >
                      <Clock3 size={17} className="text-[#14B8A6]" />

                      <input
                        type="time"
                        className="
                          w-full

                          bg-transparent

                          outline-none

                          text-sm
                          sm:text-base

                          text-[#0F172A]
                        "
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    className="
                      mt-2

                      w-full

                      h-[54px]
                      sm:h-[60px]

                      rounded-2xl

                      bg-gradient-to-r
                      from-[#0F766E]
                      to-[#14B8A6]

                      text-white

                      text-[11px]
                      sm:text-sm

                      font-black

                      uppercase

                      tracking-[0.16em]
                      sm:tracking-[0.18em]

                      shadow-[0_20px_50px_rgba(20,184,166,0.25)]

                      hover:scale-[1.01]

                      transition-all duration-500
                    "
                  >
                    Confirm Appointment
                  </button>

                  {/* Secure */}
                  <div
                    className="
                      flex items-center justify-center gap-2.5

                      pt-1
                      sm:pt-2
                    "
                  >
                    <Shield size={13} className="text-[#14B8A6]" />

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]

                        uppercase

                        tracking-[0.16em]
                        sm:tracking-[0.18em]

                        font-black

                        text-[#0F172A]/40
                      "
                    >
                      Secure Medical Booking
                    </span>
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
