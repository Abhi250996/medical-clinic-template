import { motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

type Props = {
  setIsPhilosophyOpen: (v: boolean) => void;
};

export default function ClinicalSection({ setIsPhilosophyOpen }: Props) {
  const features = [
    {
      icon: <HeartPulse className="w-6 h-6 text-[#14B8A6]" />,
      title: "Personalized Care",
      desc: "Tailored treatment systems built around every patient's unique clinical journey.",
    },

    {
      icon: <Brain className="w-6 h-6 text-[#14B8A6]" />,
      title: "AI Diagnostics",
      desc: "Advanced intelligence systems helping healthcare professionals improve precision.",
    },

    {
      icon: <ShieldCheck className="w-6 h-6 text-[#14B8A6]" />,
      title: "Trusted Infrastructure",
      desc: "Enterprise-grade healthcare architecture focused on safety and privacy.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        py-16
        sm:py-20
        lg:py-36

        bg-[#F5FBFA]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="
          absolute
          top-[-10%]
          left-[-10%]

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
          right-[-10%]

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
          max-w-[1600px]

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
      lg:col-span-8

      relative

      overflow-hidden

      rounded-[30px]
      lg:rounded-[40px]

      bg-white/80

      backdrop-blur-2xl

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
              {/* Label */}
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
                  Clinical Excellence
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
          mt-6
          sm:mt-8

          text-[2.4rem]
          sm:text-[4rem]
          lg:text-[5.5rem]

          leading-[0.9]

          tracking-[-0.06em]

          font-black

          text-[#07111F]
        "
              >
                Advanced
                <br />
                healthcare designed
                <br />
                <span className="text-[#0F766E]">around people.</span>
              </h2>

              {/* Description */}
              <p
                className="
          mt-5
          sm:mt-7

          max-w-[760px]

          text-[15px]
          sm:text-lg

          leading-relaxed

          text-[#07111F]/60
        "
              >
                We combine compassionate medical expertise with modern
                healthcare technology to create intelligent, patient-first
                clinical systems trusted by thousands of families.
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
                  "Smart Monitoring",
                  "Patient First",
                  "Secure Systems",
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
      lg:col-span-4

      grid
      grid-cols-2
      lg:grid-cols-1

      gap-5
    "
          >
            {/* Stats */}
            {[
              ["98%", "Clinical Accuracy"],
              ["24/7", "Emergency Support"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="
          relative

          overflow-hidden

          rounded-[26px]
          lg:rounded-[32px]

          bg-white/80

          backdrop-blur-2xl

          border border-[#0F172A]/5

          p-5
          sm:p-6
          lg:p-7

          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
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

            rounded-full

            bg-[#14B8A6]/10

            blur-[70px]
          "
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
              w-12 h-12
              sm:w-14 sm:h-14

              rounded-2xl

              bg-[#14B8A6]/10

              flex items-center justify-center

              mb-5
            "
                  >
                    <Activity className="w-6 h-6 text-[#14B8A6]" />
                  </div>

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
                    {number}
                  </h3>

                  {/* Label */}
                  <p
                    className="
              mt-3

              text-[11px]
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
              </div>
            ))}

            {/* AI CARD */}
            <div
              className="
        col-span-2
        lg:col-span-1

        relative

        overflow-hidden

        rounded-[28px]
        lg:rounded-[34px]

        bg-gradient-to-br
        from-[#07111F]
        via-[#0F172A]
        to-[#0F766E]

        p-5
        sm:p-6

        shadow-[0_30px_90px_rgba(15,23,42,0.12)]
      "
            >
              {/* Glow */}
              <div
                className="
          absolute
          top-[-20%]
          right-[-20%]

          w-[220px]
          h-[220px]

          rounded-full

          bg-[#14B8A6]/20

          blur-[90px]
        "
              />

              <div className="relative z-10">
                {/* Badge */}
                <div
                  className="
            inline-flex
            items-center gap-2

            px-3 py-2

            rounded-full

            bg-white/10

            border border-white/10
          "
                >
                  <Sparkles className="w-3 h-3 text-[#5EEAD4]" />

                  <span
                    className="
              text-[8px]

              uppercase

              tracking-[0.18em]

              font-black

              text-white
            "
                  >
                    AI Healthcare
                  </span>
                </div>

                {/* Heading */}
                <h4
                  className="
            mt-5

            text-[1.9rem]
            sm:text-[2.4rem]

            leading-[0.95]

            tracking-[-0.05em]

            font-black

            text-white
          "
                >
                  Smart clinical
                  <br />
                  infrastructure.
                </h4>

                {/* Description */}
                <p
                  className="
            mt-4

            text-[14px]

            leading-relaxed

            text-white/65
          "
                >
                  AI-assisted healthcare systems delivering faster diagnostics
                  and intelligent care.
                </p>

                {/* Mini Stats */}
                <div
                  className="
            grid grid-cols-3

            gap-3

            mt-6
          "
                >
                  {[
                    ["150K+", "Patients"],
                    ["99%", "Accuracy"],
                    ["24/7", "Support"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="
                rounded-2xl

                bg-white/10

                border border-white/10

                p-3
              "
                    >
                      <h5
                        className="
                  text-lg

                  font-black

                  text-white
                "
                      >
                        {value}
                      </h5>

                      <p
                        className="
                  mt-1

                  text-[8px]

                  uppercase

                  tracking-[0.14em]

                  text-white/50
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
        </div>
      </div>
    </section>
  );
}
