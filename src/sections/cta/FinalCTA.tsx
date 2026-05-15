import { motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function FinalCTA({ setIsBookingOpen }: Props) {
  const stats = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#5EEAD4]" />,
      value: "99.8%",
      label: "Clinical Accuracy",
    },

    {
      icon: <Activity className="w-6 h-6 text-[#5EEAD4]" />,
      value: "24/7",
      label: "AI Monitoring",
    },

    {
      icon: <Sparkles className="w-6 h-6 text-[#5EEAD4]" />,
      value: "150K+",
      label: "Patients Served",
    },

    {
      icon: <Calendar className="w-6 h-6 text-[#5EEAD4]" />,
      value: "50+",
      label: "Medical Specialists",
    },
  ];

  return (
    <section
      className="
        relative

        overflow-hidden

        py-16
        sm:py-20
        lg:py-36

        bg-[#F5FBFA]
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <div
        className="
          absolute
          top-[-10%]
          right-[-10%]

          w-[320px]
          h-[320px]

          lg:w-[600px]
          lg:h-[600px]

          rounded-full

          bg-[#14B8A6]/10

          blur-[100px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          left-[-10%]

          w-[300px]
          h-[300px]

          lg:w-[500px]
          lg:h-[500px]

          rounded-full

          bg-[#0F766E]/10

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
        {/* ================= MAIN CTA ================= */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            relative

            overflow-hidden

            rounded-[32px]
            lg:rounded-[48px]

            bg-gradient-to-br
            from-[#07111F]
            via-[#07111F]
            to-[#0F766E]

            shadow-[0_40px_120px_rgba(15,23,42,0.18)]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              top-[-20%]
              right-[-10%]

              w-[260px]
              h-[260px]

              lg:w-[500px]
              lg:h-[500px]

              rounded-full

              bg-[#14B8A6]/15

              blur-[100px]
              lg:blur-[140px]
            "
          />

          {/* Grid */}
          <div
            className="
              relative z-10

              grid
              lg:grid-cols-2

              gap-8
              lg:gap-16

              px-5
              sm:px-8
              lg:px-20

              py-8
              sm:py-10
              lg:py-24
            "
          >
            {/* ================= LEFT CONTENT ================= */}
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

                  backdrop-blur-2xl

                  border border-white/10
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
                  Intelligent Healthcare Platform
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-6
                  sm:mt-8

                  text-[2.4rem]
                  sm:text-[4rem]
                  lg:text-[6.2rem]

                  leading-[0.92]

                  tracking-[-0.06em]

                  font-black

                  text-white
                "
              >
                Begin your
                <br />
                personalized
                <span className="text-[#5EEAD4]"> care</span>
                <br />
                journey.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  sm:mt-8

                  max-w-[720px]

                  text-[15px]
                  sm:text-lg
                  lg:text-xl

                  leading-relaxed

                  text-white/68
                "
              >
                Experience modern healthcare powered by intelligent diagnostics,
                compassionate specialists, and precision medical systems.
              </p>

              {/* Benefits */}
              <div
                className="
                  flex flex-wrap

                  gap-x-5
                  gap-y-3

                  mt-6
                  sm:mt-10
                "
              >
                {[
                  "Instant Appointments",
                  "AI Assisted Care",
                  "Trusted Specialists",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex items-center gap-2
                    "
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5EEAD4]" />

                    <span
                      className="
                        text-[13px]
                        sm:text-sm

                        text-white/72
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="
                  flex flex-col sm:flex-row

                  gap-4

                  mt-7
                  sm:mt-12
                "
              >
                {/* Primary */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="
                    group

                    h-[54px]
                    sm:h-[64px]

                    px-6
                    sm:px-9

                    rounded-2xl

                    bg-white

                    text-[#0F766E]

                    text-[11px]
                    sm:text-sm

                    font-black

                    uppercase

                    tracking-[0.16em]
                    sm:tracking-[0.18em]

                    inline-flex
                    items-center justify-center gap-3

                    hover:scale-[1.02]

                    transition-all duration-500
                  "
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Appointment
                  <ArrowRight
                    className="
                      w-4 h-4 sm:w-5 sm:h-5

                      group-hover:translate-x-1

                      transition-transform
                    "
                  />
                </button>

                {/* Secondary */}
                <button
                  className="
                    h-[54px]
                    sm:h-[64px]

                    px-6
                    sm:px-9

                    rounded-2xl

                    bg-white/10

                    border border-white/10

                    backdrop-blur-2xl

                    text-white

                    text-[11px]
                    sm:text-sm

                    font-black

                    uppercase

                    tracking-[0.16em]
                    sm:tracking-[0.18em]

                    hover:bg-white/15

                    transition-all duration-500
                  "
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* ================= RIGHT STATS ================= */}
            <div
              className="
                grid
                grid-cols-2

                gap-4
                sm:gap-6
              "
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="
                    relative

                    overflow-hidden

                    rounded-[24px]
                    lg:rounded-[34px]

                    bg-white/10

                    backdrop-blur-3xl

                    border border-white/10

                    p-4
                    sm:p-6
                    lg:p-8

                    shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      top-[-20%]
                      right-[-20%]

                      w-[160px]
                      h-[160px]

                      lg:w-[220px]
                      lg:h-[220px]

                      rounded-full

                      bg-[#5EEAD4]/10

                      blur-[70px]
                      lg:blur-[90px]
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

                        bg-white/10

                        flex items-center justify-center
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Value */}
                    <h4
                      className="
                        mt-5
                        sm:mt-7

                        text-2xl
                        sm:text-4xl
                        lg:text-6xl

                        font-black

                        tracking-[-0.05em]

                        text-white
                      "
                    >
                      {item.value}
                    </h4>

                    {/* Label */}
                    <p
                      className="
                        mt-2
                        sm:mt-4

                        text-[9px]
                        sm:text-xs

                        uppercase

                        tracking-[0.14em]
                        sm:tracking-[0.18em]

                        text-white/55
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
