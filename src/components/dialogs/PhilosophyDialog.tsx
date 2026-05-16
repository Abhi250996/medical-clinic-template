import { AnimatePresence, motion } from "motion/react";

import {
  Activity,
  CalendarDays,
  Clock3,
  HeartPulse,
  Shield,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

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
  const cards = [
    {
      icon: HeartPulse,
      title: "Connected Care",
      desc: "Specialist consultations, diagnostics and treatments managed through one seamless workflow.",
    },
    {
      icon: CalendarDays,
      title: "Live Scheduling",
      desc: "Real-time doctor availability with instant appointment coordination.",
    },
    {
      icon: Shield,
      title: "Secure Healthcare Access",
      desc: "Protected healthcare systems prioritizing privacy and patient operations.",
    },
    {
      icon: Sparkles,
      title: "Smart Diagnostics",
      desc: "Modern healthcare infrastructure supporting fast diagnostics and digital reports.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111827]/50 backdrop-blur-md z-[200]"
          />

          {/* MODAL */}
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[210] w-[94%] sm:w-[92%] lg:w-[1180px] max-h-[92vh] overflow-hidden rounded-[32px] bg-[#F8FAFC] shadow-[0_50px_140px_rgba(15,23,42,0.2)]"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* LEFT PANEL */}
              <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-10 bg-[#111827]">
                {/* GLOW */}
                <div className="absolute top-[-20%] right-[-20%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[100px]" />

                {/* TOP */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-10">
                    <Stethoscope className="w-8 h-8 text-[#14B8A6]" />
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-white/50 mb-5">
                    Connected Healthcare Experience
                  </p>

                  <h2 className="text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-white">
                    Modern healthcare,
                    <br />
                    powered by
                    <br />
                    live operations.
                  </h2>

                  <p className="mt-8 max-w-sm leading-relaxed text-white/70 text-sm">
                    Connected healthcare systems designed for appointments,
                    diagnostics, specialist scheduling and patient care
                    coordination.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="relative z-10 flex flex-col gap-4 mt-14">
                  {[
                    "Real-Time Doctor Availability",
                    "Connected Diagnostics Workflow",
                    "Smart Consultation Scheduling",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />

                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative overflow-y-auto max-h-[92vh] p-5 sm:p-8 lg:p-10 bg-white">
                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white flex items-center justify-center transition-all duration-300"
                >
                  <X size={16} className="text-[#0F172A]" />
                </button>

                {/* HEADER */}
                <div className="mb-8 sm:mb-10">
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#64748B]">
                    Healthcare Platform
                  </span>

                  <h3 className="mt-3 text-[2rem] sm:text-[3rem] lg:text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
                    A connected healthcare experience designed around
                    appointments & care.
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
                    Streamlining consultations, diagnostics scheduling and
                    treatment coordination through one unified healthcare
                    workflow.
                  </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {cards.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -4,
                        }}
                        className="group relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6 transition-all duration-300"
                      >
                        {/* GLOW */}
                        <div className="absolute top-[-20%] right-[-20%] w-[140px] h-[140px] rounded-full bg-[#14B8A6]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <div className="relative z-10">
                          {/* ICON */}
                          <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5 text-[#0F172A]" />
                          </div>

                          {/* TITLE */}
                          <h4 className="text-2xl leading-[1] tracking-tight font-medium text-[#0F172A]">
                            {item.title}
                          </h4>

                          {/* DESC */}
                          <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden mt-8 rounded-[32px] bg-[#111827] p-6 sm:p-8 text-white">
                  {/* GLOW */}
                  <div className="absolute top-[-20%] right-[-10%] w-[220px] h-[220px] rounded-full bg-[#14B8A6]/10 blur-[80px]" />

                  <div className="relative z-10">
                    {/* TOP */}
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-4 h-4 text-[#14B8A6]" />

                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">
                        Smart Healthcare Access
                      </span>
                    </div>

                    {/* TITLE */}
                    <h4 className="text-[2rem] sm:text-3xl leading-[1] tracking-tight font-normal">
                      Book consultations &
                      <br />
                      access live healthcare services.
                    </h4>

                    {/* DESC */}
                    <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
                      Connect with specialists, diagnostics systems and
                      treatment services through one connected healthcare
                      platform.
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => {
                        onClose();
                        setIsBookingOpen(true);
                      }}
                      className="mt-8 h-[56px] px-7 rounded-2xl bg-white hover:bg-[#14B8A6] text-[#111827] text-sm font-medium transition-all duration-300"
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
