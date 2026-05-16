import { ArrowRight, Calendar, Sparkles } from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function FinalCTA({ setIsBookingOpen }: Props) {
  return (
    <section className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      ```
      <div className="relative overflow-hidden bg-[#111827] rounded-[32px] sm:rounded-[40px]">
        {/* SOFT GLOW */}
        <div className="absolute top-[-20%] right-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white">
                Connected Healthcare
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-5 text-3xl sm:text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-white">
              Book appointments & healthcare services.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
              Access consultations, diagnostics and healthcare scheduling
              through one seamless platform.
            </p>

            {/* INFO */}
            <div className="flex flex-wrap gap-5 mt-8">
              {["24/7 Access", "Live Scheduling", "Digital Healthcare"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ),
              )}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="group mt-10 h-[54px] px-7 rounded-2xl bg-white hover:bg-[#14B8A6] text-[#111827] text-sm font-medium flex items-center gap-2 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />

              <span>Book Appointment</span>

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
              alt="Healthcare"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#111827]/20 to-[#111827]" />

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <h3 className="max-w-md text-3xl sm:text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-white">
                Simplified healthcare experiences for modern patient care.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
