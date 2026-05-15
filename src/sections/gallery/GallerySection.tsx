import { motion } from "motion/react";

import {
  Activity,
  ArrowRight,
  Camera,
  CheckCircle2,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function GallerySection() {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
      title: "Advanced Clinical Infrastructure",
    },

    {
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1400&auto=format&fit=crop",
      title: "Modern Patient Recovery Systems",
    },

    {
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop",
      title: "Intelligent Healthcare Operations",
    },
  ];

  return (
    <section
      id="gallery"
      className="
        relative

        overflow-hidden

        py-16
        sm:py-20
        lg:py-36

        bg-white
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="
          absolute
          top-[-10%]
          right-[-10%]

          w-[320px]
          h-[320px]

          lg:w-[650px]
          lg:h-[650px]

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

    gap-5
    lg:gap-7

    items-stretch
  "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
      lg:col-span-7

      relative

      overflow-hidden

      rounded-[28px]
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

        blur-[100px]
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
                <Camera className="w-4 h-4 text-[#14B8A6]" />

                <span
                  className="
            text-[9px]
            sm:text-[10px]

            uppercase

            tracking-[0.22em]
            sm:tracking-[0.28em]

            font-black

            text-[#0F766E]
          "
                >
                  Clinical Environment
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
          mt-5
          sm:mt-7

          text-[2.2rem]
          sm:text-[4rem]
          lg:text-[5rem]

          leading-[0.9]

          tracking-[-0.06em]

          font-black

          text-[#07111F]
        "
              >
                Modern healthcare
                <br />
                spaces designed
                <span className="text-[#0F766E]"> for comfort.</span>
              </h2>

              {/* Description */}
              <p
                className="
          mt-5
          sm:mt-7

          max-w-[720px]

          text-[14px]
          sm:text-lg

          leading-relaxed

          text-[#07111F]/60
        "
              >
                Every healthcare environment is thoughtfully designed to create
                trust, comfort, efficiency, and exceptional clinical
                experiences.
              </p>

              {/* Tags */}
              <div
                className="
          grid
          grid-cols-2
          sm:flex sm:flex-wrap

          gap-3

          mt-7
        "
              >
                {[
                  "Smart Infrastructure",
                  "Luxury Recovery",
                  "AI Operations",
                  "Modern Equipment",
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

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
      lg:col-span-5

      relative

      overflow-hidden

      min-h-[280px]
      sm:min-h-[360px]
      lg:min-h-full

      rounded-[30px]
      lg:rounded-[40px]

      shadow-[0_30px_100px_rgba(15,23,42,0.10)]
    "
          >
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2200&auto=format&fit=crop"
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
        via-[#07111F]/25
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
        sm:p-8
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

          mb-5
        "
              >
                <Sparkles className="w-4 h-4 text-[#5EEAD4]" />

                <span
                  className="
            text-[8px]
            sm:text-[9px]

            uppercase

            tracking-[0.18em]

            font-black

            text-white
          "
                >
                  Smart Healthcare
                </span>
              </div>

              {/* Heading */}
              <h3
                className="
          text-[2rem]
          sm:text-[3rem]

          leading-[0.92]

          tracking-[-0.05em]

          font-black

          text-white
        "
              >
                Premium clinical
                <br />
                infrastructure.
              </h3>

              {/* Bottom Stats */}
              <div
                className="
          grid grid-cols-3

          gap-3

          mt-6
        "
              >
                {[
                  ["100%", "Sanitized"],
                  ["24/7", "Support"],
                  ["AI", "Powered"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="
              rounded-2xl

              bg-white/10

              border border-white/10

              backdrop-blur-2xl

              p-3
            "
                  >
                    <h5
                      className="
                text-lg
                sm:text-xl

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

                text-white/55
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

        {/* ================= MOBILE IMAGE MARQUEE ================= */}
        <div
          className="
    lg:hidden

    overflow-hidden

    mt-6
  "
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 w-max"
          >
            {[
              "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
            ]
              .concat([
                "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
              ])
              .map((img, i) => (
                <div
                  key={i}
                  className="
            relative

            w-[220px]
            h-[160px]

            shrink-0

            overflow-hidden

            rounded-[24px]

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
                >
                  <img
                    src={img}
                    className="
              absolute inset-0

              w-full h-full

              object-cover
            "
                  />

                  <div
                    className="
              absolute inset-0

              bg-gradient-to-t
              from-[#07111F]/70
              to-transparent
            "
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
