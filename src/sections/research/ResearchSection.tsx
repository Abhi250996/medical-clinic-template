import { motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Atom,
  Brain,
  CheckCircle2,
  Dna,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ResearchSection() {
  const researchCards = [
    {
      icon: <Dna className="w-6 h-6 text-[#14B8A6]" />,
      title: "Genomic Analysis",
      desc: "Precision genomic intelligence helping specialists personalize treatment systems.",
    },

    {
      icon: <Brain className="w-6 h-6 text-[#14B8A6]" />,
      title: "AI Diagnostics",
      desc: "Machine-assisted healthcare systems improving diagnostics and efficiency.",
    },
  ];

  const stats = [
    {
      icon: <Microscope className="w-5 h-5 text-[#14B8A6]" />,
      title: "Research Labs",
      value: "14+",
    },

    {
      icon: <Activity className="w-5 h-5 text-[#14B8A6]" />,
      title: "Clinical Studies",
      value: "120+",
    },

    {
      icon: <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />,
      title: "Patents Filed",
      value: "80+",
    },

    {
      icon: <Brain className="w-5 h-5 text-[#14B8A6]" />,
      title: "AI Systems",
      value: "35+",
    },
  ];

  return (
    <section
      id="research"
      className="
        relative
        overflow-hidden

        py-16
        sm:py-20
        lg:py-36

        bg-white
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="
          absolute
          top-[-15%]
          right-[-10%]

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
          left-[-10%]

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
    grid
    lg:grid-cols-12

    gap-6
    lg:gap-8

    items-stretch
  "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
      lg:col-span-7

      relative

      overflow-hidden

      rounded-[30px]
      lg:rounded-[40px]

      bg-[#F8FCFB]

      border border-[#0F172A]/5

      p-5
      sm:p-7
      lg:p-10

      shadow-[0_20px_70px_rgba(15,23,42,0.05)]
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

        rounded-full

        bg-[#14B8A6]/10

        blur-[90px]
      "
            />

            <div className="relative z-10">
              {/* Badge */}
              <div
                className="
          inline-flex
          items-center gap-2

          px-4 py-2.5
          sm:px-5 sm:py-3

          rounded-full

          bg-[#14B8A6]/5

          border border-[#14B8A6]/10
        "
              >
                <Atom className="w-4 h-4 text-[#14B8A6]" />

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
                  Medical Innovation
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
          mt-6
          sm:mt-8

          text-[2.4rem]
          sm:text-[4rem]
          lg:text-[5.2rem]

          leading-[0.9]

          tracking-[-0.06em]

          font-black

          text-[#07111F]
        "
              >
                Research-driven
                <br />
                future clinical
                <br />
                <span className="text-[#0F766E]">systems.</span>
              </h2>

              {/* Description */}
              <p
                className="
          mt-5
          sm:mt-7

          max-w-[720px]

          text-[15px]
          sm:text-lg

          leading-relaxed

          text-[#07111F]/60
        "
              >
                Building next-generation healthcare technologies powered by AI
                diagnostics, predictive medicine, and molecular research.
              </p>

              {/* Tags */}
              <div
                className="
          grid
          grid-cols-2
          sm:flex sm:flex-wrap

          gap-3

          mt-7
          sm:mt-9
        "
              >
                {[
                  "AI Diagnostics",
                  "Genomic Systems",
                  "Predictive Medicine",
                  "Clinical Intelligence",
                ].map((item) => (
                  <div
                    key={item}
                    className="
              flex items-center gap-2

              rounded-full

              bg-[#14B8A6]/5

              border border-[#14B8A6]/10

              px-4 py-3
            "
                  >
                    <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                    <span
                      className="
                text-[11px]
                sm:text-[12px]

                font-semibold

                text-[#0F172A]/70
              "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
      lg:col-span-5

      grid

      grid-rows-[1.2fr_auto]

      gap-5
    "
          >
            {/* ================= IMAGE CARD ================= */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
        relative

        overflow-hidden

        min-h-[260px]
        sm:min-h-[320px]
        lg:min-h-[420px]

        rounded-[30px]
        lg:rounded-[38px]

        shadow-[0_30px_100px_rgba(15,23,42,0.10)]
      "
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1800&auto=format&fit=crop"
                className="
          absolute inset-0

          w-full h-full

          object-cover
        "
              />

              {/* Overlay */}
              <div
                className="
          absolute inset-0

          bg-gradient-to-t
          from-[#07111F]/90
          via-[#07111F]/35
          to-transparent
        "
              />

              {/* Content */}
              <div
                className="
          relative z-10

          h-full

          flex flex-col justify-end

          p-5
          sm:p-7
        "
              >
                {/* Badge */}
                <div
                  className="
            inline-flex
            items-center gap-2

            w-fit

            px-4 py-2.5

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

              uppercase

              tracking-[0.2em]

              font-black

              text-white
            "
                  >
                    Precision Labs
                  </span>
                </div>

                {/* Heading */}
                <h3
                  className="
            mt-5

            text-[2rem]
            sm:text-[2.7rem]

            leading-[0.95]

            tracking-[-0.05em]

            font-black

            text-white
          "
                >
                  AI-powered
                  <br />
                  molecular research.
                </h3>

                {/* Description */}
                <p
                  className="
            mt-4

            max-w-md

            text-[14px]
            sm:text-[15px]

            leading-relaxed

            text-white/70
          "
                >
                  Intelligent systems accelerating genomic discoveries and
                  predictive medicine.
                </p>
              </div>
            </motion.div>

            {/* ================= STATS ================= */}
            <div
              className="
        grid
        grid-cols-2

        gap-5
      "
            >
              {[
                ["35+", "AI Research Systems"],
                ["120+", "Clinical Programs"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="
            rounded-[24px]
            lg:rounded-[30px]

            bg-[#F8FCFB]

            border border-[#0F172A]/5

            p-5
            sm:p-6

            shadow-[0_20px_60px_rgba(15,23,42,0.04)]
          "
                >
                  {/* Number */}
                  <h3
                    className="
              text-3xl
              sm:text-5xl

              font-black

              tracking-[-0.05em]

              text-[#07111F]
            "
                  >
                    {value}
                  </h3>

                  {/* Label */}
                  <p
                    className="
              mt-3

              text-[10px]
              sm:text-sm

              uppercase

              tracking-[0.14em]
              sm:tracking-[0.18em]

              text-[#07111F]/50
            "
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
