'use client';

import Link from 'next/link';
import { PRICING_FEATURES } from '@/lib/landing-data';
import { useUserCountry } from '@/hooks/use-user-country';
import { getRegionalPrices } from '@/lib/pricing';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

export function PricingSection() {
  const { region } = useUserCountry();
  const prices = getRegionalPrices(region);

  return (
    <section id="precios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Planes simples, sin letra pequeña
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto items-start">
          {/* Free */}
          <div className="bg-[#FAFAF8] rounded-xl p-8 border border-[#E7E5E4]">
            <p className="font-sans font-semibold text-[#1C1917] text-lg">
              Gratuito
            </p>
            <p className="font-sans text-4xl font-bold text-[#1C1917] mt-4">
              {prices.free.display}
            </p>
            <p className="text-sm text-[#A8A29E] mt-1">Siempre gratis</p>

            <ul className="mt-8">
              {PRICING_FEATURES.free.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-[#44403C] py-2 border-b border-[#E7E5E4] last:border-0"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`${appDomain}/auth/register`}
              className="block w-full mt-8 border border-[#E7E5E4] text-[#1C1917] hover:bg-[#F5F5F4] rounded-lg py-2.5 text-sm font-medium text-center transition-colors"
            >
              Empezar gratis
            </Link>
          </div>

          {/* Básico */}
          <div className="bg-white rounded-xl p-8 border border-[#E7E5E4]">
            <p className="font-sans font-semibold text-[#1C1917] text-lg">
              Básico
            </p>
            <p className="font-sans text-4xl font-bold text-[#1C1917] mt-4">
              {prices.basico.display.monthly}
              <span className="text-base font-normal text-[#78716C]">
                /mes
              </span>
            </p>
            <p className="text-sm text-[#A8A29E] mt-1">
              {prices.basico.display.yearly} ({prices.basico.display.yearlySavings})
            </p>

            <ul className="mt-8">
              {PRICING_FEATURES.basico.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-[#44403C] py-2 border-b border-[#E7E5E4] last:border-0"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`${appDomain}/empezar-prueba?priceId=${prices.basico.stripeIds.monthly}`}
              className="block w-full mt-8 border border-[#E7E5E4] text-[#1C1917] hover:bg-[#F5F5F4] rounded-lg py-2.5 text-sm font-medium text-center transition-colors"
            >
              Prueba 14 días gratis
            </Link>
          </div>

          {/* Pro (highlighted) */}
          <div className="bg-[#1C1917] rounded-xl p-8">
            <p className="text-[#C9A96E] text-xs font-medium tracking-wide uppercase mb-4">
              Popular
            </p>
            <p className="font-sans font-semibold text-white text-lg">Pro</p>
            <p className="font-sans text-4xl font-bold text-white mt-4">
              {prices.pro.display.monthly}
              <span className="text-base font-normal text-white/50">/mes</span>
            </p>
            <p className="text-sm text-[#C9A96E] mt-1">
              {prices.pro.display.yearly} ({prices.pro.display.yearlySavings})
            </p>

            <ul className="mt-8">
              {PRICING_FEATURES.pro.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-white/70 py-2 border-b border-white/10 last:border-0"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`${appDomain}/empezar-prueba?priceId=${prices.pro.stripeIds.monthly}`}
              className="block w-full mt-8 bg-white text-[#1C1917] hover:bg-white/90 rounded-lg py-2.5 text-sm font-medium text-center transition-colors"
            >
              Prueba 14 días gratis
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#A8A29E]">{prices.footerText}</p>
        </div>
      </div>
    </section>
  );
}
