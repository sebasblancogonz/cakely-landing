import { TrackedCtaLink } from './TrackedCtaLink';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1C1917]">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
          Tu pastelería merece estar organizada
        </h2>
        <p className="text-[#A8A29E] mt-4 text-lg max-w-md mx-auto">
          Pruébalo gratis 14 días. Cancela cuando quieras.
        </p>
        <div className="mt-8">
          <TrackedCtaLink
            href={`${appDomain}/empezar-prueba`}
            contentName="home-final"
            className="inline-block bg-white text-[#1C1917] hover:bg-white/90 px-6 py-3 rounded-lg font-medium text-base transition-colors"
          >
            Crear cuenta gratis
          </TrackedCtaLink>
        </div>
      </div>
    </section>
  );
}
