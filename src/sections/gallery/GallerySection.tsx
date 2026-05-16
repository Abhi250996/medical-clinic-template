import { useState } from "react";

import { ArrowUpRight, Sparkles } from "lucide-react";

import DoctorProfileDialog from "@/src/components/dialogs/DoctorProfileDialog";

type DoctorProfile = {
  name: string;
  specialty: string;
  experience: string;

  degree: string;
  qualification: string;
  availability: string[];

  timings: string;
  consultationFee: string;

  languages: string[];

  nextSlot: string;

  treatment: string;
  service: string;

  about: string;

  image: string;
};

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

const doctors: DoctorProfile[] = [
  {
    name: "Dr. Adrian Vance",
    specialty: "Cardiologist",
    experience: "12+ Years Experience",

    degree: "MBBS, MD Cardiology",

    qualification: "Harvard Medical School",

    availability: ["Mon", "Tue", "Thu", "Sat"],

    timings: "09:00 AM - 05:00 PM",

    consultationFee: "$120",

    languages: ["English", "Spanish"],

    nextSlot: "Today • 04:30 PM",

    treatment: "Heart & Preventive Care",

    service: "Advanced Cardiac Diagnostics",

    about:
      "Specialized in preventive cardiology and long-term cardiac care management.",

    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
  },

  {
    name: "Dr. Elena Rostova",
    specialty: "Pathologist",
    experience: "10+ Years Experience",

    degree: "MBBS, MD Pathology",

    qualification: "Stanford Medical Institute",

    availability: ["Mon", "Wed", "Fri"],

    timings: "10:00 AM - 06:00 PM",

    consultationFee: "$90",

    languages: ["English", "German"],

    nextSlot: "Today • 06:00 PM",

    treatment: "Metabolic Diagnostics",

    service: "Blood Testing",

    about: "Expert in laboratory diagnostics and advanced biomarker testing.",

    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },

  {
    name: "Dr. Marcus Sterling",
    specialty: "Neurologist",
    experience: "14+ Years Experience",

    degree: "MBBS, DM Neurology",

    qualification: "John Hopkins Neurology Center",

    availability: ["Tue", "Thu", "Sat"],

    timings: "08:30 AM - 03:00 PM",

    consultationFee: "$140",

    languages: ["English", "French"],

    nextSlot: "Tomorrow • 10:15 AM",

    treatment: "Neurological Care",

    service: "EEG Analysis",

    about: "Focused on neurological disorders and migraine treatments.",

    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function GallerySection({ setIsBookingOpen }: Props) {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(
    null,
  );

  return (
    <>
      <section
        id="clinic-hub"
        className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
      >
        <div className="bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT */}
            <div className="lg:col-span-4">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC]">
                <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
                  Healthcare Specialists
                </span>
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-3xl sm:text-5xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
                Meet experienced healthcare specialists.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#64748B] max-w-md">
                Explore doctor profiles, consultation schedules and healthcare
                expertise through one connected platform.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {doctors.map((doctor, index) => (
                <div key={index} className="group">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-[28px] bg-[#F8FAFC] aspect-[0.82]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium tracking-tight text-white">
                            {doctor.name}
                          </h3>

                          <p className="mt-1 text-sm text-white/70">
                            {doctor.specialty}
                          </p>
                        </div>

                        <button
                          onClick={() => setSelectedDoctor(doctor)}
                          className="w-11 h-11 rounded-full bg-white text-[#111827] flex items-center justify-center hover:bg-[#14B8A6] transition-all duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DoctorProfileDialog
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        setIsBookingOpen={setIsBookingOpen}
      />
    </>
  );
}
