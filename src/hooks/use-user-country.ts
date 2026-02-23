import { getRegionForCountry, type PricingRegion } from '@/lib/pricing';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function useUserCountry(): {
  country: string | undefined;
  region: PricingRegion;
} {
  const country = getCookie('user-country');
  return {
    country,
    region: getRegionForCountry(country),
  };
}
