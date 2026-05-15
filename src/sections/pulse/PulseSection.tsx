import { motion, MotionValue, useTransform } from "motion/react";

import {
  Activity,
  Brain,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function PulseSection({ scrollYProgress }: Props) {
  const pulseScale = useTransform(scrollYProgress, [0.2, 0.5], [0.92, 1.18]);

  const pulseOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0.2, 1]);

  const bars = [45, 80, 60, 95, 55, 70, 85];

  return (
    <section
      id="pulse"
      className="
        relative

        overflow-hidden

        py-16
        sm:py-20
        lg:py-40

        bg-[#07111F]
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div
        className="
          absolute
          top-[-10%]
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
          bottom-[-20%]
          right-[-10%]

          w-[320px]
          h-[320px]

          lg:w-[650px]
          lg:h-[650px]

          rounded-full

          bg-[#5EEAD4]/10

          blur-[100px]
          lg:blur-[160px]
        "
      />

      {/* ================= PULSE CIRCLES ================= */}
      <motion.div
        style={{
          scale: pulseScale,
          opacity: pulseOpacity,
        }}
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[280px]
          h-[280px]

          lg:w-[700px]
          lg:h-[700px]

          rounded-full

          border border-[#14B8A6]/10
        "
      />

      <motion.div
        style={{
          scale: pulseScale,
          opacity: pulseOpacity,
        }}
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[180px]
          h-[180px]

          lg:w-[500px]
          lg:h-[500px]

          rounded-full

          border border-[#14B8A6]/10
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
        {/* ================= MAIN GRID ================= */}
        <div
          className="
    grid
    lg:grid-cols-12

    gap-5
    lg:gap-6

    mt-12
    sm:mt-16
    lg:mt-20
  "
        >
          {/* ================= LEFT ANALYTICS ================= */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
      lg:col-span-8

      relative

      overflow-hidden

      rounded-[28px]
      lg:rounded-[40px]

      bg-white/[0.03]

      border border-white/10

      backdrop-blur-3xl

      p-5
      sm:p-7
      lg:p-8

      shadow-[0_30px_100px_rgba(0,0,0,0.18)]
    "
          >
            {/* Glow */}
            <div
              className="
        absolute
        top-[-20%]
        right-[-10%]

        w-[220px]
        h-[220px]

        rounded-full

        bg-[#14B8A6]/10

        blur-[100px]
      "
            />

            {/* TOP */}
            <div
              className="
        relative z-10

        grid
        lg:grid-cols-[1.2fr_0.8fr]

        gap-6
        lg:gap-8
      "
            >
              {/* LEFT TEXT */}
              <div>
                <span
                  className="
            text-[9px]
            sm:text-[10px]

            uppercase

            tracking-[0.22em]
            sm:tracking-[0.28em]

            font-black

            text-[#5EEAD4]
          "
                >
                  Live Medical Intelligence
                </span>

                <h3
                  className="
            mt-4
            sm:mt-5

            text-[2rem]
            sm:text-[3rem]
            lg:text-[4rem]

            leading-[0.92]

            tracking-[-0.05em]

            font-black

            text-white
          "
                >
                  Continuous
                  <br />
                  patient monitoring.
                </h3>

                <p
                  className="
            mt-4
            sm:mt-5

            max-w-[520px]

            text-[14px]
            sm:text-[15px]

            leading-relaxed

            text-white/60
          "
                >
                  AI-assisted healthcare infrastructure continuously monitoring
                  clinical intelligence and predictive patient data.
                </p>

                {/* MINI STATS */}
                <div
                  className="
            grid grid-cols-3

            gap-3

            mt-6
          "
                >
                  {[
                    ["99.8%", "Accuracy"],
                    ["24/7", "Monitoring"],
                    ["120+", "Signals"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="
                rounded-2xl

                bg-white/[0.04]

                border border-white/10

                p-3
                sm:p-4
              "
                    >
                      <h4
                        className="
                  text-lg
                  sm:text-2xl

                  font-black

                  text-white
                "
                      >
                        {value}
                      </h4>

                      <p
                        className="
                  mt-1

                  text-[8px]
                  sm:text-[9px]

                  uppercase

                  tracking-[0.14em]

                  text-white/45
                "
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="
          relative

          overflow-hidden

          min-h-[240px]
          lg:min-h-full

          rounded-[26px]
          lg:rounded-[32px]
        "
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1800&auto=format&fit=crop"
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
            via-[#07111F]/20
            to-transparent
          "
                />

                {/* Bottom Content */}
                <div
                  className="
            absolute bottom-0 left-0 right-0

            p-5
          "
                >
                  <div
                    className="
              inline-flex
              items-center gap-2

              px-3 py-2

              rounded-full

              bg-white/10

              border border-white/10

              backdrop-blur-2xl
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
                      AI Monitoring
                    </span>
                  </div>

                  <h4
                    className="
              mt-4

              text-[1.5rem]
              sm:text-[2rem]

              leading-[0.95]

              tracking-[-0.04em]

              font-black

              text-white
            "
                  >
                    Real-time
                    <br />
                    healthcare AI.
                  </h4>
                </div>
              </div>
            </div>

            {/* GRAPH */}
            <div
              className="
        relative z-10

        flex items-end

        gap-2
        sm:gap-3

        mt-8
        sm:mt-10

        h-[120px]
        sm:h-[160px]
      "
            >
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="
            flex-1

            rounded-full

            bg-white/[0.04]

            overflow-hidden

            h-full
          "
                >
                  <motion.div
                    animate={{
                      height: [`20%`, `${h}%`, `35%`],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="
              w-full

              rounded-full

              bg-gradient-to-t
              from-[#0F766E]
              via-[#14B8A6]
              to-[#5EEAD4]
            "
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT BENTO ================= */}
          <div
            className="
      lg:col-span-4

      grid
      grid-cols-2
      lg:grid-cols-1

      gap-5
    "
          >
            {[
              {
                icon: <HeartPulse className="w-5 h-5 text-[#5EEAD4]" />,
                title: "Live Monitoring",
                desc: "Continuous healthcare monitoring systems.",
              },

              {
                icon: <Brain className="w-5 h-5 text-[#5EEAD4]" />,
                title: "Predictive AI",
                desc: "Forecasting clinical risks before escalation.",
              },

              {
                icon: <ShieldCheck className="w-5 h-5 text-[#5EEAD4]" />,
                title: "Secure Systems",
                desc: "Enterprise-grade healthcare protection.",
              },

              {
                icon: <CheckCircle2 className="w-5 h-5 text-[#5EEAD4]" />,
                title: "99% Accuracy",
                desc: "AI-assisted precision diagnostics network.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="
          relative

          overflow-hidden

          rounded-[24px]
          lg:rounded-[28px]

          bg-white/[0.04]

          border border-white/10

          backdrop-blur-3xl

          p-5
          sm:p-6

          shadow-[0_20px_70px_rgba(0,0,0,0.12)]
        "
              >
                {/* Glow */}
                <div
                  className="
            absolute
            top-[-20%]
            right-[-20%]

            w-[140px]
            h-[140px]

            rounded-full

            bg-[#14B8A6]/10

            blur-[70px]
          "
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
              w-11 h-11
              sm:w-12 sm:h-12

              rounded-2xl

              bg-[#14B8A6]/10

              border border-[#14B8A6]/10

              flex items-center justify-center

              mb-4
            "
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4
                    className="
              text-[1.15rem]
              sm:text-[1.4rem]

              leading-[1]

              tracking-[-0.03em]

              font-black

              text-white
            "
                  >
                    {item.title}
                  </h4>

                  {/* Desc */}
                  <p
                    className="
              mt-3

              text-[12px]
              sm:text-[13px]

              leading-relaxed

              text-white/55
            "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
