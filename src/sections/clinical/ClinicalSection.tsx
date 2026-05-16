import { Activity, ArrowRight, CalendarDays } from "lucide-react";

type Props = {
  setIsPhilosophyOpen: (v: boolean) => void;
};

export default function ClinicalSection({ setIsPhilosophyOpen }: Props) {
  return (
    <section
      id="about"
      className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
    >
      ```
      <div className="relative overflow-hidden w-full bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 lg:py-20">
        {/* SOFT GLOW */}
        <div className="absolute top-[-10%] right-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC]">
              <Activity className="w-3.5 h-3.5 text-[#14B8A6]" />

              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
                Connected Healthcare
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A] max-w-4xl">
              Healthcare scheduling
              <br />
              designed for modern
              <br />
              patient experiences.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
              Book consultations, access diagnostics and manage healthcare
              appointments through one seamless digital platform.
            </p>

            {/* SIMPLE STATS */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                ["24/7", "Appointments"],
                ["50+", "Healthcare Experts"],
                ["12K+", "Consultations"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F172A]">
                    {value}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-[#64748B]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] rounded-[32px] p-6 sm:p-8">
              {/* TOP */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white">
                <CalendarDays className="w-3.5 h-3.5 text-[#14B8A6]" />

                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
                  Live Scheduling
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-2xl sm:text-3xl leading-[1] tracking-tight font-normal text-[#0F172A]">
                Real-time appointment scheduling & availability.
              </h3>

              {/* DESC */}
              <p className="mt-5 text-sm leading-relaxed text-[#64748B]">
                Monitor available consultation slots, diagnostics access and
                healthcare schedules through one connected system.
              </p>

              {/* SIMPLE LIST */}
              <div className="mt-8 space-y-4">
                {[
                  "Doctor Availability",
                  "Diagnostics Scheduling",
                  "Instant Appointment Access",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                    <span className="text-sm text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setIsPhilosophyOpen(true)}
                className="mt-10 h-[54px] px-6 rounded-2xl bg-[#111827] hover:bg-[#14B8A6] text-white text-sm font-medium flex items-center gap-2 transition-all duration-300"
              >
                <span>Explore Platform</span>

                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
