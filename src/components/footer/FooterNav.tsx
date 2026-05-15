import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  links: string[];
};

export default function FooterNav({ title, links }: Props) {
  return (
    <div
      className="
        w-full

        space-y-1.5
        sm:space-y-3
      "
    >
      {/* ================= TITLE ================= */}
      <div className="flex items-center gap-1.5">
        {/* Dot */}
        <div
          className="
            w-1.5 h-1.5

            rounded-full

            bg-[#14B8A6]
          "
        />

        {/* Title */}
        <h4
          className="
            text-[8px]
            sm:text-[10px]

            leading-none

            font-black

            uppercase

            tracking-[0.14em]
            sm:tracking-[0.22em]

            text-[#0F172A]/45
          "
        >
          {title}
        </h4>
      </div>

      {/* ================= LINKS ================= */}
      <div
        className="
          grid

          grid-cols-2
          sm:grid-cols-1

          gap-1
          sm:gap-1.5
        "
      >
        {links.map((link) => (
          <button
            key={link}
            className="
              group

              relative

              overflow-hidden

              flex items-center justify-between

              rounded-lg
              sm:rounded-xl

              px-2.5
              sm:px-4

              py-1.5
              sm:py-2.5

              h-[34px]
              sm:h-[48px]

              text-left

              bg-[#14B8A6]/[0.03]
              sm:bg-transparent

              border border-[#14B8A6]/10
              sm:border-transparent

              hover:bg-[#14B8A6]/6

              transition-all duration-200
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute
                inset-0

                opacity-0

                group-hover:opacity-100

                bg-gradient-to-r
                from-[#0F766E]/5
                to-[#14B8A6]/10

                transition-all duration-200
              "
            />

            {/* Text */}
            <span
              className="
                relative z-10

                text-[10px]
                sm:text-[14px]

                leading-none

                font-medium

                tracking-[-0.01em]

                text-[#0F172A]/65

                group-hover:text-[#0F766E]

                transition-all duration-200

                truncate
              "
            >
              {link}
            </span>

            {/* Arrow */}
            <div
              className="
                hidden sm:flex

                relative z-10

                w-6 h-6

                rounded-full

                bg-[#14B8A6]/8

                items-center justify-center

                opacity-0

                group-hover:opacity-100

                transition-all duration-200
              "
            >
              <ArrowRight
                className="
                  w-3 h-3

                  text-[#0F766E]
                "
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
