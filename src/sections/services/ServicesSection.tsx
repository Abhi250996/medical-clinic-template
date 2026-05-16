import {
  Activity,
  ArrowRight,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function ServicesSection({ setIsBookingOpen }: Props) {
  const featuredServices = [
    {
      icon: HeartPulse,
      title: "Cardiology",
      desc: "Heart consultations and preventive healthcare support.",
    },
    {
      icon: Stethoscope,
      title: "Primary Care",
      desc: "Routine consultations and connected appointments.",
    },
    {
      icon: Syringe,
      title: "Wellness Care",
      desc: "Preventive screenings and healthcare programs.",
    },
  ];

  const moreServices = [
    "Lab Testing",
    "Diagnostics",
    "Neurology",
    "Vaccination",
    "ECG Monitoring",
    "Blood Testing",
    "Health Screening",
    "Consultation",
    "Preventive Care",
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
    >
      <div className="relative overflow-hidden bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
        {/* GLOW */}
        <div className="absolute top-[-10%] right-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        <div className="relative z-10">
          {/* HEADER */}
          <div className="max-w-4xl">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] px-3 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
                Healthcare Services
              </span>
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
              Modern healthcare
              <br />
              services for connected
              <br />
              patient care.
            </h2>

            {/* DESC */}
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
              Access consultations, diagnostics and healthcare scheduling
              through one seamless platform.
            </p>
          </div>

          {/* FEATURED SERVICES */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] rounded-[32px] p-6 sm:p-8"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-8">
                    <h3 className="text-2xl tracking-tight font-medium text-[#0F172A]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MORE SERVICES */}
          <div className="mt-14">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-4 h-4 text-[#14B8A6]" />

              <span className="text-sm font-medium text-[#0F172A]">
                More Healthcare Services
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {moreServices.map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full bg-[#F8FAFC] text-sm text-[#0F172A]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="group mt-14 h-[56px] px-7 rounded-2xl bg-[#111827] hover:bg-[#14B8A6] text-white text-sm font-medium flex items-center gap-2 transition-all duration-300"
          >
            <span>Book Appointment</span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
