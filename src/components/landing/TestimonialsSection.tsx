import { TESTIMONIALS } from '@/lib/landing-data';

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Lo dicen quienes ya lo usan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-[#E7E5E4]"
            >
              <blockquote className="text-[#44403C] text-base leading-relaxed">
                {testimonial.text}
              </blockquote>
              <footer className="mt-6">
                <cite className="not-italic font-semibold text-[#1C1917] text-sm block">
                  {testimonial.name}
                </cite>
                <span className="text-[#A8A29E] text-sm">
                  {testimonial.business}
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
