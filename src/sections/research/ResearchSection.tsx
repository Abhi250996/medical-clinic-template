import { motion } from "motion/react";

import { ArrowRight, Sparkles, Workflow } from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function ResearchSection({ setIsBookingOpen }: Props) {
  return (
    <section
      id="technology"
      className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
    >
      ```
      <div className="relative overflow-hidden bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
        {/* SOFT GLOW */}
        <div className="absolute top-[-10%] right-[-5%] w-[320px] h-[320px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC]">
              <Workflow className="w-3.5 h-3.5 text-[#14B8A6]" />

              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
                Smart Healthcare
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
              Connected healthcare
              <br />
              systems for modern
              <br />
              patient care.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
              Simplified appointment scheduling, diagnostics access and
              consultation workflows through one connected healthcare
              experience.
            </p>

            {/* SIMPLE INFO */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                "Digital Appointments",
                "Healthcare Scheduling",
                "Live Consultation Access",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                  <span className="text-sm text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="group mt-12 h-[56px] px-7 rounded-2xl bg-[#111827] hover:bg-[#14B8A6] text-white text-sm font-medium flex items-center gap-2 transition-all duration-300"
            >
              <span>Book Appointment</span>

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-[32px] aspect-[1.05]"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare Operations"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

                  <span className="text-[11px] uppercase tracking-[0.18em] text-white">
                    Live Healthcare Platform
                  </span>
                </div>

                <h3 className="mt-5 text-2xl sm:text-4xl leading-[1] tracking-tight font-normal text-white max-w-md">
                  Modern healthcare scheduling & patient management.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
