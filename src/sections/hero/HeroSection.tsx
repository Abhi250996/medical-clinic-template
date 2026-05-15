import { motion } from "motion/react";

import { Activity, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type Props = {
  setIsBookingOpen: (v: boolean) => void;
};

export default function HeroSection({ setIsBookingOpen }: Props) {
  return (
    <section
      className="
        relative

        min-h-[100svh]

        overflow-hidden

        bg-[#EEF7F6]
      "
    >
      {/* ================= HERO CONTAINER ================= */}
      <div
        className="
          relative

          w-full
          min-h-[100svh]

          overflow-hidden
        "
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2200&auto=format&fit=crop"
            className="
              w-full
              h-full

              object-cover
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-r
              from-[#07111F]/95
              via-[#07111F]/72
              to-[#07111F]/25
            "
          />

          {/* Glow 1 */}
          <div
            className="
              absolute
              left-[-10%]
              top-[-10%]

              w-[320px]
              h-[320px]

              lg:w-[900px]
              lg:h-[900px]

              rounded-full

              bg-[#14B8A6]/20

              blur-[100px]
              lg:blur-[170px]
            "
          />

          {/* Glow 2 */}
          <div
            className="
              absolute
              bottom-[-20%]
              right-[-10%]

              w-[260px]
              h-[260px]

              lg:w-[700px]
              lg:h-[700px]

              rounded-full

              bg-[#5EEAD4]/10

              blur-[90px]
              lg:blur-[150px]
            "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative z-20

            w-full
            max-w-[1650px]

            mx-auto

            px-5
            sm:px-8
            lg:px-20
            xl:px-28

            pt-36
            sm:pt-40
            lg:pt-44

            pb-36
            sm:pb-40
            lg:pb-52
          "
        >
          <div className="max-w-[780px]">
            {/* ================= BADGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                inline-flex
                items-center gap-2

                px-4 py-2.5
                sm:px-5 sm:py-3

                rounded-full

                bg-white/10

                backdrop-blur-2xl

                border border-white/10
              "
            >
              {/* Pulse */}
              <div className="relative">
                <div
                  className="
                    w-2 h-2

                    rounded-full

                    bg-[#5EEAD4]
                  "
                />

                <div
                  className="
                    absolute inset-0

                    rounded-full

                    bg-[#5EEAD4]

                    animate-ping
                  "
                />
              </div>

              {/* Text */}
              <span
                className="
                  text-white/90

                  text-[9px]
                  sm:text-xs

                  uppercase

                  tracking-[0.22em]
                  sm:tracking-[0.3em]

                  font-black
                "
              >
                Trusted Advanced Healthcare
              </span>
            </motion.div>

            {/* ================= HEADING ================= */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                mt-6
                sm:mt-8

                text-[2.8rem]
                sm:text-[4.8rem]
                lg:text-[7rem]

                leading-[0.9]

                tracking-[-0.06em]

                font-black

                text-white
              "
            >
              Compassionate
              <br />
              <span className="text-white">care,</span>
              <span className="text-[#5EEAD4]"> exceptional</span>
              <br />
              results.
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-5
                sm:mt-8

                max-w-[640px]

                text-[15px]
                sm:text-lg
                lg:text-xl

                leading-relaxed

                text-white/72
              "
            >
              Delivering world-class healthcare with personalized treatment,
              intelligent clinical systems, and patient-first care trusted by
              thousands of families.
            </motion.p>

            {/* ================= CTA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                flex flex-col sm:flex-row

                gap-4 sm:gap-5

                mt-8
                sm:mt-10
              "
            >
              {/* Primary CTA */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="
                  group

                  h-[54px]
                  sm:h-[62px]

                  px-6
                  sm:px-8

                  rounded-2xl

                  bg-gradient-to-r
                  from-[#0F766E]
                  via-[#14B8A6]
                  to-[#2DD4BF]

                  text-white

                  text-[11px]
                  sm:text-sm

                  font-black

                  uppercase

                  tracking-[0.18em]

                  flex items-center justify-center gap-3

                  shadow-[0_20px_60px_rgba(20,184,166,0.35)]

                  hover:scale-[1.02]
                  hover:shadow-[0_25px_70px_rgba(20,184,166,0.45)]

                  transition-all duration-500
                "
              >
                Book Appointment
                <ArrowRight
                  className="
                    w-4 h-4
                    sm:w-5 sm:h-5

                    group-hover:translate-x-1

                    transition-transform
                  "
                />
              </button>

              {/* Premium Analytics Card */}
              <div
                className="
    relative

    overflow-hidden

    flex items-center gap-4

    rounded-2xl

    bg-white/10

    backdrop-blur-3xl

    border border-white/10

    px-5
    sm:px-6

    py-3
    sm:py-4

    min-w-[260px]
  "
              >
                {/* Glow */}
                <div
                  className="
      absolute
      top-[-40%]
      right-[-20%]

      w-[140px]
      h-[140px]

      rounded-full

      bg-[#14B8A6]/20

      blur-[60px]
    "
                />

                {/* Animated Graph */}
                <div
                  className="
      relative z-10

      flex items-end gap-1

      h-[32px]
    "
                >
                  {[50, 80, 65, 95, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h - 25}%`, `${h}%`, `${h - 15}%`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="
          w-1.5
          sm:w-2

          rounded-full

          bg-gradient-to-t
          from-[#0F766E]
          via-[#14B8A6]
          to-[#5EEAD4]
        "
                    />
                  ))}
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p
                    className="
        text-[9px]
        sm:text-[10px]

        uppercase

        tracking-[0.18em]

        font-black

        text-white/45
      "
                  >
                    Clinical Analytics
                  </p>

                  <h4
                    className="
        mt-1

        text-sm
        sm:text-base

        font-bold

        text-white
      "
                  >
                    Live AI Health Metrics
                  </h4>
                </div>

                {/* Badge */}
                <div
                  className="
      relative z-10

      ml-auto

      flex items-center justify-center

      w-10 h-10

      rounded-xl

      bg-[#14B8A6]/15

      border border-[#14B8A6]/20
    "
                >
                  <Activity className="w-5 h-5 text-[#5EEAD4]" />
                </div>
              </div>
            </motion.div>

            {/* ================= TRUST INDICATORS ================= */}
            <div
              className="
                grid

                grid-cols-1
                sm:grid-cols-3

                gap-3
                sm:gap-4

                mt-8
                sm:mt-12
              "
            >
              {[
                "24/7 Emergency Support",
                "Certified Specialists",
                "Modern Clinical Labs",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-2

                    rounded-2xl

                    bg-white/[0.05]

                    border border-white/10

                    backdrop-blur-2xl

                    px-4 py-3
                  "
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5EEAD4]" />

                  <span
                    className="
                      text-[12px]
                      sm:text-sm

                      text-white/75
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FLOATING RECOVERY CARD ================= */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            hidden xl:flex

            absolute
            top-40
            right-24

            items-center gap-5

            px-7 py-5

            rounded-[32px]

            bg-white/75

            backdrop-blur-3xl

            border border-white/50

            shadow-[0_25px_80px_rgba(15,23,42,0.15)]

            z-30
          "
        >
          {/* Avatars */}
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                className="
                  w-14 h-14

                  rounded-full

                  border-2 border-white
                "
              />
            ))}
          </div>

          {/* Content */}
          <div>
            <h4
              className="
                text-3xl

                font-black

                text-[#0F172A]
              "
            >
              150K+
            </h4>

            <p className="text-sm text-[#0F172A]/55">Successful Recoveries</p>
          </div>
        </motion.div>

        {/* ================= BOTTOM STATS ================= */}
        <div
          className="
            absolute

            left-1/2
            bottom-5
            sm:bottom-8
            lg:bottom-10

            -translate-x-1/2

            w-[92%]
            max-w-[1450px]

            rounded-[28px]
            lg:rounded-[36px]

            bg-white/12

            backdrop-blur-3xl

            border border-white/15

            shadow-[0_30px_80px_rgba(0,0,0,0.18)]

            px-5
            sm:px-8
            lg:px-14

            py-5
            sm:py-6
            lg:py-10

            z-30
          "
        >
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4

              gap-5
              sm:gap-8
              lg:gap-10
            "
          >
            {[
              ["20+", "Years Experience"],
              ["95%", "Patient Satisfaction"],
              ["5,000+", "Patients Served"],
              ["120+", "Healthcare Specialists"],
            ].map(([number, label]) => (
              <div key={label}>
                <h3
                  className="
                    text-2xl
                    sm:text-4xl
                    lg:text-6xl

                    font-black

                    tracking-[-0.05em]

                    text-white
                  "
                >
                  {number}
                </h3>

                <p
                  className="
                    mt-2
                    sm:mt-3

                    text-[9px]
                    sm:text-[11px]
                    lg:text-xs

                    uppercase

                    tracking-[0.15em]
                    sm:tracking-[0.2em]

                    text-white/60
                  "
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
