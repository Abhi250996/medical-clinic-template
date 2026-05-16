import { AnimatePresence, motion } from "motion/react";

import {
  CalendarDays,
  Clock3,
  Shield,
  Stethoscope,
  User,
  Users2,
  X,
} from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingDialog({ isOpen, onClose }: Props) {
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[210] w-[94%] sm:w-[92%] lg:w-[980px] max-h-[92vh] overflow-hidden rounded-[32px] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
          >
            <div className="grid lg:grid-cols-2">
              {/* LEFT PANEL */}
              <div className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden bg-[#111827]">
                {/* GLOW */}
                <div className="absolute top-[-20%] right-[-20%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[100px]" />

                {/* CONTENT */}
                <div className="relative z-10">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-10">
                    <Stethoscope className="w-8 h-8 text-[#14B8A6]" />
                  </div>

                  {/* BADGE */}
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/50 mb-5">
                    Smart Healthcare Booking
                  </p>

                  {/* TITLE */}
                  <h2 className="text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-white">
                    Book your
                    <br />
                    consultation.
                  </h2>

                  {/* DESC */}
                  <p className="mt-8 max-w-sm leading-relaxed text-white/70 text-sm">
                    Schedule specialist consultations, diagnostics and treatment
                    appointments through one connected healthcare platform.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="relative z-10 flex flex-col gap-4 mt-14">
                  {[
                    "Live Doctor Availability",
                    "Same-Day Diagnostics",
                    "Connected Healthcare Support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />

                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative overflow-y-auto max-h-[92vh] p-5 sm:p-8 lg:p-10">
                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white flex items-center justify-center transition-all duration-300"
                >
                  <X size={16} className="text-[#0F172A]" />
                </button>

                {/* HEADER */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#64748B]">
                    Appointment Form
                  </span>

                  <h3 className="mt-3 text-[2rem] sm:text-4xl leading-[0.95] tracking-[-0.04em] font-normal text-[#0F172A]">
                    Schedule Appointment
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#64748B] max-w-md">
                    Select your consultation preferences and healthcare
                    schedule.
                  </p>
                </div>

                {/* FORM */}
                <div className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#64748B]">
                      Patient Name
                    </label>

                    <div className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                      <User size={18} className="text-[#64748B]" />

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent outline-none text-[#0F172A] placeholder:text-[#94A3B8]"
                      />
                    </div>
                  </div>

                  {/* DOCTOR */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#64748B]">
                      Specialist
                    </label>

                    <div className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                      <Users2 size={18} className="text-[#64748B]" />

                      <select className="w-full bg-transparent outline-none text-[#0F172A]">
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Diagnostics</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>
                  </div>

                  {/* DATE */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#64748B]">
                      Appointment Date
                    </label>

                    <div className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                      <CalendarDays size={18} className="text-[#64748B]" />

                      <input
                        type="date"
                        className="w-full bg-transparent outline-none text-[#0F172A]"
                      />
                    </div>
                  </div>

                  {/* TIME */}
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#64748B]">
                      Preferred Time
                    </label>

                    <div className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                      <Clock3 size={18} className="text-[#64748B]" />

                      <input
                        type="time"
                        className="w-full bg-transparent outline-none text-[#0F172A]"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="mt-2 w-full h-[58px] rounded-2xl bg-[#111827] hover:bg-[#14B8A6] hover:text-black text-white text-sm font-medium transition-all duration-300">
                    Confirm Appointment
                  </button>

                  {/* TRUST */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <Shield size={14} className="text-[#64748B]" />

                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#64748B]">
                      Secure Healthcare Booking
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
