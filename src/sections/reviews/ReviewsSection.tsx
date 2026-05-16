import { Quote, Sparkles, Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sophia Williams",
      role: "Cardiology Consultation",
      review:
        "Booking appointments and accessing diagnostics felt seamless from start to finish.",
    },
    {
      name: "Michael Johnson",
      role: "Neurology Care",
      review:
        "Live scheduling and fast doctor availability made the entire experience stress-free.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full bg-[#F0F4F4] px-4 sm:px-6 lg:px-8 py-6 lg:py-8"
    >
      ```
      <div className="relative overflow-hidden bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
        {/* SOFT GLOW */}
        <div className="absolute top-[-10%] left-[-10%] w-[320px] h-[320px] rounded-full bg-[#14B8A6]/10 blur-[120px]" />

        {/* HEADER */}
        <div className="relative z-10 max-w-4xl">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />

            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#0F172A]">
              Patient Experience
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.05em] font-normal text-[#0F172A]">
            Trusted healthcare
            <br />
            experiences built around
            <br />
            modern patient care.
          </h2>

          {/* DESC */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#64748B]">
            Patients rely on seamless appointment scheduling, diagnostics access
            and connected healthcare services.
          </p>
        </div>

        {/* REVIEWS */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14">
          {reviews.map((item, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-[32px] p-6 sm:p-8">
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3.5 h-3.5 fill-[#14B8A6] text-[#14B8A6]"
                    />
                  ))}
                </div>

                <Quote className="w-5 h-5 text-[#14B8A6]" />
              </div>

              {/* REVIEW */}
              <p className="mt-8 text-lg sm:text-xl leading-relaxed tracking-tight text-[#0F172A]">
                “{item.review}”
              </p>

              {/* USER */}
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 12}`}
                  alt={item.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                />

                <div>
                  <h4 className="text-sm font-medium text-[#0F172A]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-xs text-[#64748B]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
