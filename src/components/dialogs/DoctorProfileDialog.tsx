import {
  CalendarDays,
  Clock3,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

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
  doctor: DoctorProfile | null;

  onClose: () => void;

  setIsBookingOpen: (v: boolean) => void;
};

export default function DoctorProfileDialog({
  doctor,
  onClose,
  setIsBookingOpen,
}: Props) {
  return (
    <AnimatePresence>
      ```
      {doctor && (
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
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[210] w-[94%] lg:w-[980px] max-h-[92vh] overflow-hidden rounded-[36px] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
          >
            <div className="grid lg:grid-cols-[380px_1fr]">
              {/* IMAGE SIDE */}
              <div className="relative bg-[#111827] overflow-hidden min-h-[320px] lg:min-h-full">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                  {/* STATUS */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6] px-3 py-1.5 w-fit">
                    <div className="w-2 h-2 rounded-full bg-black" />

                    <span className="text-[10px] uppercase tracking-wider font-semibold text-black">
                      Available Today
                    </span>
                  </div>

                  {/* NAME */}
                  <h2 className="mt-6 text-4xl leading-[0.95] tracking-tight font-normal">
                    {doctor.name}
                  </h2>

                  {/* SPECIALTY */}
                  <p className="mt-3 text-white/70">{doctor.specialty}</p>

                  {/* EXPERIENCE */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                    <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />

                    <span>{doctor.experience}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative overflow-y-auto max-h-[92vh] p-6 sm:p-8 lg:p-10">
                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-white transition-all duration-300"
                >
                  <X className="w-4 h-4 text-[#0F172A]" />
                </button>

                {/* HEADER */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#64748B]">
                    Doctor Profile
                  </span>

                  <h3 className="mt-3 text-4xl leading-[0.95] tracking-tight font-normal text-[#0F172A]">
                    Qualifications & consultation details
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-[#64748B] max-w-2xl">
                    {doctor.about}
                  </p>
                </div>

                {/* INFO GRID */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {/* DEGREE */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <GraduationCap className="w-5 h-5 text-[#0F172A]" />

                    <h4 className="mt-4 text-sm font-semibold text-[#0F172A]">
                      Degree
                    </h4>

                    <p className="mt-2 text-sm text-[#64748B]">
                      {doctor.degree}
                    </p>
                  </div>

                  {/* QUALIFICATION */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <Stethoscope className="w-5 h-5 text-[#0F172A]" />

                    <h4 className="mt-4 text-sm font-semibold text-[#0F172A]">
                      Qualification
                    </h4>

                    <p className="mt-2 text-sm text-[#64748B]">
                      {doctor.qualification}
                    </p>
                  </div>

                  {/* AVAILABLE DAYS */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <CalendarDays className="w-5 h-5 text-[#0F172A]" />

                    <h4 className="mt-4 text-sm font-semibold text-[#0F172A]">
                      Available Days
                    </h4>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {doctor.availability.map((day) => (
                        <div
                          key={day}
                          className="px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs text-[#0F172A]"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TIMINGS */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <Clock3 className="w-5 h-5 text-[#0F172A]" />

                    <h4 className="mt-4 text-sm font-semibold text-[#0F172A]">
                      Consultation Hours
                    </h4>

                    <p className="mt-2 text-sm text-[#64748B]">
                      {doctor.timings}
                    </p>
                  </div>
                </div>

                {/* EXTRA */}
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {/* FEE */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <span className="text-[10px] uppercase tracking-wider text-[#64748B]">
                      Consultation Fee
                    </span>

                    <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#0F172A]">
                      {doctor.consultationFee}
                    </h3>
                  </div>

                  {/* LANGUAGES */}
                  <div className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-[#0F172A]" />

                      <span className="text-sm font-medium text-[#0F172A]">
                        Languages
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {doctor.languages.map((lang) => (
                        <div
                          key={lang}
                          className="px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs text-[#0F172A]"
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    onClose();

                    setTimeout(() => {
                      setIsBookingOpen(true);
                    }, 200);
                  }}
                  className="mt-8 w-full h-[58px] rounded-2xl bg-[#111827] hover:bg-[#14B8A6] hover:text-black text-white text-sm font-medium transition-all duration-300"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
