import { AnimatePresence, motion } from "motion/react";

import {
  Activity,
  ArrowUpRight,
  CalendarDays,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
  setIsBookingOpen: (v: boolean) => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  scrollTo,
  setIsBookingOpen,
}: Props) {
  const menuItems = [
    ["Technology", "technology"],
    ["Services", "services"],
    ["Doctors", "clinic-hub"],
    ["Diagnostics", "pulse-analytics"],
    ["Experience", "experience"],
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111827]/50 backdrop-blur-md z-[140]"
          />

          {/* PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed top-20 left-3 right-3 sm:left-auto sm:right-6 sm:w-[420px] rounded-[32px] bg-white/90 backdrop-blur-2xl border border-white/40 shadow-[0_30px_120px_rgba(15,23,42,0.12)] overflow-hidden z-[150]"
          >
            {/* GLOW */}
            <div className="absolute top-[-20%] right-[-20%] w-[240px] h-[240px] rounded-full bg-[#14B8A6]/10 blur-[90px]" />

            <div className="relative z-10">
              {/* HEADER */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-[#E2E8F0]">
                {/* BRAND */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#111827] flex items-center justify-center">
                    <Activity className="w-5 h-5 text-[#14B8A6]" />
                  </div>

                  <div>
                    <h3 className="text-[1.15rem] leading-none tracking-tight font-semibold text-[#0F172A]">
                      MEDIVUE
                    </h3>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#64748B]">
                      Healthcare Platform
                    </p>
                  </div>
                </div>

                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <X size={16} className="text-[#0F172A]" />
                </button>
              </div>

              {/* LABEL */}
              <div className="px-5 pt-5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#64748B]">
                  Navigation
                </span>
              </div>

              {/* NAV ITEMS */}
              <div className="px-5 pt-5 flex flex-col gap-3">
                {menuItems.map(([label, id], index) => (
                  <motion.button
                    key={id}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.05,
                      },
                    }}
                    onClick={() => {
                      scrollTo(id);
                      onClose();
                    }}
                    className="group flex items-center justify-between rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white px-5 py-4 transition-all duration-300"
                  >
                    <span className="text-[15px] font-medium tracking-tight text-[#0F172A]">
                      {label}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#14B8A6] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#0F172A]" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CONTACT PANEL */}
              <div className="px-5 mt-6 mb-5">
                <div className="relative overflow-hidden rounded-[30px] bg-[#111827] p-6 text-white">
                  {/* GLOW */}
                  <div className="absolute top-[-20%] right-[-20%] w-[180px] h-[180px] rounded-full bg-[#14B8A6]/10 blur-[70px]" />

                  <div className="relative z-10">
                    {/* TOP */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#14B8A6]" />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                          Emergency Support
                        </p>

                        <h4 className="mt-1 text-xl font-semibold tracking-tight">
                          +91 98765 43210
                        </h4>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => {
                        setIsBookingOpen(true);
                        onClose();
                      }}
                      className="mt-6 w-full h-[54px] rounded-2xl bg-white hover:bg-[#14B8A6] text-[#111827] text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <CalendarDays className="w-4 h-4" />

                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-5 py-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                  MEDIVUE © 2026
                </span>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                  <div className="w-2 h-2 rounded-full bg-[#0F172A]" />

                  <div className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
