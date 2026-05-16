import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  links: string[];
};

export default function FooterNav({ title, links }: Props) {
  return (
    <div className="w-full space-y-3">
      {/* TITLE */}
      <div className="flex items-center gap-2">
        {/* STATUS DOT */}
        <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

        {/* HEADING */}
        <h4 className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/50">
          {title}
        </h4>
      </div>

      {/* LINKS */}
      <div className="space-y-2">
        {links.map((link) => (
          <button
            key={link}
            className="group w-full flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 transition-all duration-300"
          >
            {/* TEXT */}
            <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
              {link}
            </span>

            {/* ICON */}
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#14B8A6]" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
