export type PricingRegion = 'EUR' | 'MXN';

const basicMonthlyPriceId = process.env.STRIPE_PRICE_ID_BASICO_MONTHLY!;
const basicYearlyPriceId = process.env.STRIPE_PRICE_ID_BASICO_YEARLY!;
const proMonthlyPriceId = process.env.STRIPE_PRICE_ID_PRO_MONTHLY!;
const proYearlyPriceId = process.env.STRIPE_PRICE_ID_PRO_YEARLY!;

const basicMonthlyPriceIdMxn =
  process.env.STRIPE_PRICE_ID_BASICO_MONTHLY_MXN || '';
const basicYearlyPriceIdMxn =
  process.env.STRIPE_PRICE_ID_BASICO_YEARLY_MXN || '';
const proMonthlyPriceIdMxn =
  process.env.STRIPE_PRICE_ID_PRO_MONTHLY_MXN || '';
const proYearlyPriceIdMxn =
  process.env.STRIPE_PRICE_ID_PRO_YEARLY_MXN || '';

interface RegionalPlan {
  free: {
    display: string;
    interval: string;
  };
  basico: {
    display: { monthly: string; yearly: string; yearlySavings: string };
    stripeIds: { monthly: string; yearly: string };
  };
  pro: {
    display: { monthly: string; yearly: string; yearlySavings: string };
    stripeIds: { monthly: string; yearly: string };
  };
  footerText: string;
}

const REGIONAL_PRICES: Record<PricingRegion, RegionalPlan> = {
  EUR: {
    free: { display: '0€', interval: '/mes' },
    basico: {
      display: {
        monthly: '9,99€',
        yearly: '99,99€/año',
        yearlySavings: 'ahorra 2 meses',
      },
      stripeIds: { monthly: basicMonthlyPriceId, yearly: basicYearlyPriceId },
    },
    pro: {
      display: {
        monthly: '19,99€',
        yearly: '199,99€/año',
        yearlySavings: 'ahorra 2 meses',
      },
      stripeIds: { monthly: proMonthlyPriceId, yearly: proYearlyPriceId },
    },
    footerText:
      'Todos los precios incluyen IVA · Soporte en español · Datos protegidos en Europa · Cancela cuando quieras',
  },
  MXN: {
    free: { display: '$0', interval: '/mes' },
    basico: {
      display: {
        monthly: '$119 MXN',
        yearly: '$1,149 MXN/año',
        yearlySavings: 'ahorra 2 meses',
      },
      stripeIds: {
        monthly: basicMonthlyPriceIdMxn,
        yearly: basicYearlyPriceIdMxn,
      },
    },
    pro: {
      display: {
        monthly: '$249 MXN',
        yearly: '$2,399 MXN/año',
        yearlySavings: 'ahorra 2 meses',
      },
      stripeIds: {
        monthly: proMonthlyPriceIdMxn,
        yearly: proYearlyPriceIdMxn,
      },
    },
    footerText:
      'Precios en pesos mexicanos (MXN). IVA incluido · Soporte en español · Cancela cuando quieras',
  },
};

const COUNTRY_TO_REGION: Record<string, PricingRegion> = {
  MX: 'MXN',
};

export function getRegionForCountry(country?: string): PricingRegion {
  if (!country) return 'EUR';
  return COUNTRY_TO_REGION[country.toUpperCase()] || 'EUR';
}

export function getRegionalPrices(region: PricingRegion): RegionalPlan {
  return REGIONAL_PRICES[region];
}
