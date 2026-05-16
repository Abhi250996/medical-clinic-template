import { motion } from "motion/react";

import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function HeroSection({ setIsBookingOpen }: Props) {
  const liveStats = [
    {
      value: "24/7",
      label: "Appointments",
    },
    {
      value: "50+",
      label: "Specialists",
    },
    {
      value: "12K+",
      label: "Patients",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#F0F4F4] px-2 sm:px-3 pt-24 lg:pt-28 pb-3">
      <div className="relative overflow-hidden w-full bg-white border border-[#E2E8F0] rounded-[32px] sm:rounded-[40px] shadow-[0_10px_40px_rgba(15,23,42,0.06)] min-h-[calc(100vh-120px)]">
        {/* SOFT GLOW */}
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] lg:w-[720px] lg:h-[720px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        {/* GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-120px)]">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            <div>
              {/* BADGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-[#14B8A6]" />

                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#0F172A]">
                  Smart Healthcare Platform
                </span>
              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-8 text-[3.2rem] sm:text-[5rem] lg:text-[6.2rem] leading-[0.92] tracking-[-0.06em] font-normal text-[#0F172A]"
              >
                Modern healthcare,
                <br />
                powered by
                <br />
                live scheduling.
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#64748B]"
              >
                Book consultations, access diagnostics and manage specialist
                appointments through one connected healthcare experience.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="flex flex-wrap items-center gap-4 mt-8"
              >
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="group h-[56px] px-7 rounded-2xl bg-[#111827] hover:bg-[#14B8A6] text-white hover:text-black text-sm font-medium flex items-center gap-2 transition-all duration-300"
                >
                  <CalendarDays className="w-4 h-4" />

                  <span>Book Appointment</span>

                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </button>

                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                  <span>Live doctor availability</span>
                </div>
              </motion.div>
            </div>

            {/* STATS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="grid grid-cols-3 gap-3 mt-10"
            >
              {liveStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5"
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A]">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-[#64748B]">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-7 relative p-3 sm:p-5 lg:p-6">
            <div className="relative w-full h-full min-h-[500px] lg:min-h-full rounded-[30px] overflow-hidden bg-[#111827]">
              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
                alt="Healthcare Platform"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-[#111827]/50" />

              {/* TOP STATUS */}
              <div className="absolute top-5 left-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/80">
                    24/7 Live Healthcare Access
                  </span>
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                  }}
                  className="max-w-2xl"
                >
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-white">
                    Connected healthcare
                    <br />
                    for modern clinics &
                    <br />
                    patient care.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
                    Real-time appointments, diagnostics scheduling and
                    specialist care through one seamless healthcare platform.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
