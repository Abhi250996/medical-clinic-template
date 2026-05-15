import { motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <HeartPulse className="w-6 h-6 text-[#14B8A6]" />,
      title: "Cardiology",
      desc: "Advanced cardiovascular systems powered by precision diagnostics and intelligent monitoring.",
    },

    {
      icon: <Brain className="w-6 h-6 text-[#14B8A6]" />,
      title: "Neurology",
      desc: "Comprehensive neurological healthcare supported by AI-assisted diagnostics.",
    },

    {
      icon: <Stethoscope className="w-6 h-6 text-[#14B8A6]" />,
      title: "Primary Care",
      desc: "Personalized preventive healthcare focused on long-term wellness.",
    },

    {
      icon: <ShieldCheck className="w-6 h-6 text-[#14B8A6]" />,
      title: "Preventive Care",
      desc: "Intelligent healthcare assessments and proactive clinical treatment.",
    },

    {
      icon: <Syringe className="w-6 h-6 text-[#14B8A6]" />,
      title: "Vaccination",
      desc: "Modern immunization infrastructure designed for accessibility and safety.",
    },

    {
      icon: <Sparkles className="w-6 h-6 text-[#14B8A6]" />,
      title: "Wellness Programs",
      desc: "Holistic healthcare experiences integrating recovery and wellness.",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative

        overflow-hidden

        py-16
        sm:py-20
        lg:py-36

        bg-[#F5FBFA]
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div
        className="
          absolute
          top-[-15%]
          left-[-10%]

          w-[320px]
          h-[320px]

          lg:w-[650px]
          lg:h-[650px]

          rounded-full

          bg-[#14B8A6]/10

          blur-[100px]
          lg:blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]

          w-[280px]
          h-[280px]

          lg:w-[500px]
          lg:h-[500px]

          rounded-full

          bg-[#0F766E]/8

          blur-[100px]
          lg:blur-[140px]
        "
      />

      {/* ================= CONTAINER ================= */}
      <div
        className="
          relative z-10

          w-full
          max-w-[1650px]

          mx-auto

          px-5
          sm:px-8
          lg:px-20
          xl:px-28
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            flex flex-col
            lg:flex-row

            lg:items-end
            lg:justify-between

            gap-8
            lg:gap-10
          "
        >
          {/* Left */}
          <div className="max-w-[760px]">
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center gap-2

                px-4 py-2.5
                sm:px-5 sm:py-3

                rounded-full

                bg-white

                border border-[#14B8A6]/10
              "
            >
              <Activity className="w-4 h-4 text-[#14B8A6]" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]

                  uppercase

                  tracking-[0.22em]
                  sm:tracking-[0.3em]

                  font-black

                  text-[#0F766E]
                "
              >
                Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                sm:mt-8

                text-[2.3rem]
                sm:text-[4rem]
                lg:text-[6rem]

                leading-[0.92]

                tracking-[-0.06em]

                font-black

                text-[#07111F]
              "
            >
              Personalized medical
              <br />
              services built
              <span className="text-[#0F766E]"> for people.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                sm:mt-8

                max-w-[720px]

                text-[15px]
                sm:text-lg

                leading-relaxed

                text-[#07111F]/60
              "
            >
              Delivering intelligent healthcare systems combining modern
              diagnostics and compassionate patient-centered care.
            </p>
          </div>

          {/* Right Stats */}
          <div
            className="
              grid
              grid-cols-2

              gap-4
              sm:gap-5

              lg:min-w-[430px]
            "
          >
            {[
              ["50+", "Medical Specialists"],
              ["24/7", "Clinical Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="
                  rounded-[22px]
                  sm:rounded-[30px]

                  bg-white/80

                  backdrop-blur-2xl

                  border border-[#0F172A]/5

                  p-4
                  sm:p-6

                  shadow-[0_20px_60px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    text-2xl
                    sm:text-4xl

                    font-black

                    tracking-[-0.05em]

                    text-[#07111F]
                  "
                >
                  {value}
                </h3>

                <p
                  className="
                    mt-2

                    text-[12px]
                    sm:text-sm

                    text-[#07111F]/50
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5
            sm:gap-7

            mt-14
            sm:mt-20
            lg:mt-24
          "
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{
                y: -4,
              }}
              className="
                group

                relative

                overflow-hidden

                rounded-[26px]
                lg:rounded-[38px]

                bg-white/80

                backdrop-blur-2xl

                border border-[#0F172A]/5

                p-5
                sm:p-7
                lg:p-9

                shadow-[0_25px_80px_rgba(15,23,42,0.05)]

                transition-all duration-500
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  top-[-20%]
                  right-[-20%]

                  w-[180px]
                  h-[180px]

                  lg:w-[240px]
                  lg:h-[240px]

                  rounded-full

                  bg-[#14B8A6]/10

                  blur-[70px]
                  lg:blur-[100px]
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    lg:w-16 lg:h-16

                    rounded-2xl
                    lg:rounded-3xl

                    bg-[#14B8A6]/10

                    border border-[#14B8A6]/10

                    flex items-center justify-center

                    transition-all duration-500

                    group-hover:scale-105
                  "
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    sm:mt-7

                    text-[1.6rem]
                    sm:text-3xl

                    leading-[0.95]

                    tracking-[-0.04em]

                    font-black

                    text-[#07111F]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    sm:mt-5

                    text-[14px]
                    sm:text-base

                    leading-relaxed

                    text-[#07111F]/55
                  "
                >
                  {service.desc}
                </p>

                {/* CTA */}
                <button
                  className="
                    group/btn

                    inline-flex
                    items-center gap-3

                    mt-6
                    sm:mt-8

                    text-[#0F766E]

                    text-[10px]
                    sm:text-[11px]

                    uppercase

                    tracking-[0.14em]
                    sm:tracking-[0.18em]

                    font-black
                  "
                >
                  Explore Service
                  <ArrowRight
                    className="
                      w-4 h-4

                      transition-transform

                      group-hover/btn:translate-x-1
                    "
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          whileHover={{ y: -3 }}
          className="
            relative

            overflow-hidden

            mt-14
            sm:mt-20
            lg:mt-24

            rounded-[30px]
            lg:rounded-[44px]

            bg-gradient-to-br
            from-[#07111F]
            via-[#0F172A]
            to-[#0F766E]

            shadow-[0_40px_120px_rgba(15,23,42,0.18)]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              top-[-10%]
              right-[-10%]

              w-[240px]
              h-[240px]

              lg:w-[400px]
              lg:h-[400px]

              rounded-full

              bg-[#14B8A6]/15

              blur-[90px]
              lg:blur-[140px]
            "
          />

          {/* Content */}
          <div
            className="
              relative z-10

              grid
              lg:grid-cols-2

              gap-8
              lg:gap-14

              px-5
              sm:px-8
              lg:px-20

              py-8
              sm:py-10
              lg:py-20
            "
          >
            {/* Left */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div
                className="
                  inline-flex
                  items-center gap-2

                  w-fit

                  px-4 py-2.5
                  sm:px-5 sm:py-3

                  rounded-full

                  bg-white/10

                  border border-white/10

                  backdrop-blur-2xl
                "
              >
                <Sparkles className="w-4 h-4 text-[#5EEAD4]" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]

                    uppercase

                    tracking-[0.22em]
                    sm:tracking-[0.3em]

                    font-black

                    text-white
                  "
                >
                  Integrated Healthcare Platform
                </span>
              </div>

              {/* Heading */}
              <h3
                className="
                  mt-6
                  sm:mt-8

                  text-[2.2rem]
                  sm:text-[4rem]
                  lg:text-[5rem]

                  leading-[0.92]

                  tracking-[-0.06em]

                  font-black

                  text-white
                "
              >
                Complete healthcare
                <br />
                ecosystem.
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  sm:mt-7

                  max-w-[620px]

                  text-[15px]
                  sm:text-lg

                  leading-relaxed

                  text-white/70
                "
              >
                Intelligent healthcare systems combining diagnostics,
                monitoring, and modern treatment infrastructure into one
                platform.
              </p>
            </div>

            {/* Right Metrics */}
            <div
              className="
                grid
                grid-cols-2

                gap-4
                sm:gap-6
              "
            >
              {[
                ["50+", "Specialists"],
                ["24/7", "Monitoring"],
                ["150K+", "Patients"],
                ["99.8%", "Clinical Accuracy"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="
                    rounded-[22px]
                    sm:rounded-[30px]

                    bg-white/10

                    border border-white/10

                    backdrop-blur-2xl

                    p-4
                    sm:p-6
                    lg:p-7
                  "
                >
                  <h4
                    className="
                      text-2xl
                      sm:text-4xl
                      lg:text-5xl

                      font-black

                      tracking-[-0.05em]

                      text-white
                    "
                  >
                    {value}
                  </h4>

                  <p
                    className="
                      mt-3
                      sm:mt-4

                      text-[9px]
                      sm:text-[11px]

                      uppercase

                      tracking-[0.14em]
                      sm:tracking-[0.18em]

                      text-white/60
                    "
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
