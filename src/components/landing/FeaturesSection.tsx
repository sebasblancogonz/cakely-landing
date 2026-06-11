import { FEATURES } from '@/lib/landing-data';
import { Reveal } from './Reveal';

export function FeaturesSection() {
  return (
    <section id="funciones" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Todo lo que necesitas para tu obrador
          </h2>
          <p className="text-[#78716C] mt-3 text-lg max-w-lg mx-auto">
            Cada herramienta resuelve un problema real de tu día a día.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {FEATURES.map((feature, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="p-6 rounded-xl border border-transparent hover:border-[#E7E5E4] hover:bg-[#FAFAF8] hover:shadow-sm transition-all h-full">
                <div className="w-10 h-10 rounded-lg bg-[#FBE4C8] flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#C97A2E]" />
                </div>
                <h3 className="font-sans font-semibold text-[#1C1917] mt-4 text-base">
                  {feature.title}
                </h3>
                <p className="text-[#78716C] mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
