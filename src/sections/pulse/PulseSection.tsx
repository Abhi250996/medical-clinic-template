import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function PulseSection({ setIsBookingOpen }: Props) {
  return (
    <section
      id="pulse-analytics"
      className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
    >
      <div className="relative overflow-hidden bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
        {/* SOFT GLOW */}
        <div className="absolute top-[-10%] right-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        <div className="relative z-10 max-w-5xl">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
              Connected Healthcare
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
            Simplified healthcare
            <br />
            scheduling for modern
            <br />
            patient experiences.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
            Book consultations, manage appointments and access healthcare
            services through one connected digital platform.
          </p>

          {/* SIMPLE INFO */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              "24/7 Appointment Access",
              "Live Doctor Availability",
              "Digital Healthcare Platform",
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
      </div>
    </section>
  );
}
