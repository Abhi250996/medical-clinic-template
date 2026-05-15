import { motion } from "motion/react";

import {
  Activity,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sophia Williams",
      role: "Cardiology Patient",
      review:
        "The healthcare experience felt incredibly advanced while remaining compassionate throughout treatment.",
    },

    {
      name: "Michael Johnson",
      role: "Neurology Care",
      review:
        "Exceptional medical systems and a healthcare team that made everything seamless.",
    },

    {
      name: "Emma Thompson",
      role: "Preventive Wellness",
      review:
        "Intelligent diagnostics and personalized healthcare exceeded expectations.",
    },

    {
      name: "Daniel Carter",
      role: "Orthopedic Recovery",
      review:
        "Modern infrastructure and patient-focused systems created a smooth recovery journey.",
    },

    {
      name: "Olivia Brown",
      role: "Wellness Programs",
      review:
        "AI-powered diagnostics gave faster and more accurate healthcare insights.",
    },

    {
      name: "James Miller",
      role: "Emergency Care",
      review:
        "24/7 clinical monitoring and responsive doctors provided incredible support.",
    },

    {
      name: "Isabella Moore",
      role: "Family Healthcare",
      review:
        "Everything from appointments to treatment felt beautifully organized.",
    },

    {
      name: "William Taylor",
      role: "Advanced Diagnostics",
      review:
        "Highly advanced clinical systems with outstanding patient experience.",
    },
  ];

  const metrics = [
    {
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4]" />,
      value: "98%",
      label: "Patient Satisfaction",
    },

    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4]" />,
      value: "150K+",
      label: "Patients Treated",
    },

    {
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4]" />,
      value: "24/7",
      label: "Clinical Monitoring",
    },

    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4]" />,
      value: "99.8%",
      label: "Diagnostic Accuracy",
    },
  ];

  return (
    <section
      id="review"
      className="
        relative

        overflow-hidden

        py-14
        sm:py-18
        lg:py-24

        bg-[#07111F]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="
          absolute
          top-[-10%]
          left-[-10%]

          w-[260px]
          h-[260px]

          lg:w-[600px]
          lg:h-[600px]

          rounded-full

          bg-[#14B8A6]/10

          blur-[90px]
          lg:blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]

          w-[260px]
          h-[260px]

          lg:w-[600px]
          lg:h-[600px]

          rounded-full

          bg-[#5EEAD4]/10

          blur-[90px]
          lg:blur-[160px]
        "
      />

      {/* ================= CONTAINER ================= */}
      <div
        className="
          relative z-10

          max-w-[1700px]

          mx-auto

          px-4
          sm:px-6
          lg:px-14
        "
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[900px] mx-auto">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center gap-2

              px-4 py-2.5

              rounded-full

              bg-white/[0.04]

              border border-white/10

              backdrop-blur-2xl
            "
          >
            <Sparkles className="w-4 h-4 text-[#5EEAD4]" />

            <span
              className="
                text-[8px]
                sm:text-[10px]

                uppercase

                tracking-[0.2em]
                sm:tracking-[0.28em]

                font-black

                text-[#CCFBF1]
              "
            >
              Patient Experience
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              sm:mt-7

              text-[2.1rem]
              sm:text-[4rem]
              lg:text-[5.5rem]

              leading-[0.9]

              tracking-[-0.06em]

              font-black

              text-white
            "
          >
            Trusted by thousands
            <br />
            of patients
            <span className="text-[#5EEAD4]"> worldwide.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              sm:mt-7

              max-w-[700px]

              mx-auto

              text-[14px]
              sm:text-lg

              leading-relaxed

              text-white/60
            "
          >
            Patients trust ProHealth for compassionate healthcare, intelligent
            diagnostics, and exceptional clinical experiences.
          </p>
        </div>

        {/* ================= METRICS ================= */}
        <div
          className="
            grid

            grid-cols-2
            lg:grid-cols-4

            gap-3
            sm:gap-5

            mt-10
            sm:mt-14
          "
        >
          {metrics.map((item) => (
            <div
              key={item.label}
              className="
                relative

                overflow-hidden

                rounded-[22px]
                lg:rounded-[30px]

                bg-white/[0.04]

                border border-white/10

                backdrop-blur-3xl

                p-4
                sm:p-6

                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
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
                    w-10 h-10
                    sm:w-14 sm:h-14

                    rounded-2xl

                    bg-[#14B8A6]/10

                    border border-[#14B8A6]/10

                    flex items-center justify-center
                  "
                >
                  {item.icon}
                </div>

                {/* Value */}
                <h4
                  className="
                    mt-4

                    text-2xl
                    sm:text-5xl

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

                    text-[8px]
                    sm:text-[11px]

                    uppercase

                    tracking-[0.14em]
                    sm:tracking-[0.18em]

                    text-white/50
                  "
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= REVIEWS MARQUEE ================= */}
        <div
          className="
            mt-10
            sm:mt-14

            overflow-hidden
          "
        >
          {/* ROW 1 */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 sm:gap-5 w-max"
          >
            {[...reviews, ...reviews].map((item, i) => (
              <div
                key={i}
                className="
                  relative

                  w-[270px]
                  sm:w-[340px]

                  shrink-0

                  overflow-hidden

                  rounded-[24px]
                  lg:rounded-[30px]

                  bg-white/[0.04]

                  border border-white/10

                  backdrop-blur-3xl

                  p-4
                  sm:p-5

                  shadow-[0_20px_60px_rgba(0,0,0,0.10)]
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
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="
                            w-3 h-3
                            sm:w-4 sm:h-4

                            fill-[#5EEAD4]

                            text-[#5EEAD4]
                          "
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div
                      className="
                        w-8 h-8

                        rounded-xl

                        bg-[#14B8A6]/10

                        flex items-center justify-center
                      "
                    >
                      <Quote className="w-3 h-3 text-[#5EEAD4]" />
                    </div>
                  </div>

                  {/* Review */}
                  <p
                    className="
                      mt-4

                      text-[12px]
                      sm:text-[14px]

                      leading-relaxed

                      text-white/70
                    "
                  >
                    “{item.review}”
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center gap-3 mt-5">
                    {/* Avatar */}
                    <img
                      src={`https://i.pravatar.cc/200?img=${i + 20}`}
                      className="
                        w-10 h-10
                        sm:w-12 sm:h-12

                        rounded-xl

                        object-cover

                        border border-white/10
                      "
                    />

                    {/* Info */}
                    <div>
                      <h4
                        className="
                          text-[13px]
                          sm:text-[15px]

                          font-black

                          text-white
                        "
                      >
                        {item.name}
                      </h4>

                      <p
                        className="
                          text-[10px]
                          sm:text-[11px]

                          text-white/45
                        "
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
