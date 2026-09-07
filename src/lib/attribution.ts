import type { NextRequest, NextResponse } from 'next/server';

/**
 * Captura de utm_* / fbclid / gclid en la landing.
 *
 * Copia deliberada de `lib/attribution/utm.ts` del repo de la app (son repos
 * distintos). Debe mantener el mismo nombre de cookie, formato JSON y dominio
 * para que `app.cakely.es` pueda leerla al crear el negocio.
 */

export const ATTRIBUTION_COOKIE = 'cakely_utm';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 días, first-touch
const MAX_VALUE_LENGTH = 100;

const KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const;

type Attribution = Partial<Record<(typeof KEYS)[number], string>>;

function sanitize(raw: string | null): string | undefined {
  if (!raw) return undefined;
  // eslint-disable-next-line no-control-regex
  const cleaned = raw.replace(/[\x00-\x1f\x7f]/g, '').trim();
  return cleaned ? cleaned.slice(0, MAX_VALUE_LENGTH) : undefined;
}

function readAttribution(params: URLSearchParams): Attribution | null {
  const result: Attribution = {};
  let found = false;
  for (const key of KEYS) {
    const value = sanitize(params.get(key));
    if (value) {
      result[key] = value;
      found = true;
    }
  }
  return found ? result : null;
}

function cookieDomain(hostname: string): string | undefined {
  const host = hostname.toLowerCase();
  return host === 'cakely.es' || host.endsWith('.cakely.es')
    ? '.cakely.es'
    : undefined;
}

export function withAttributionCookie(
  request: NextRequest,
  response: NextResponse,
): NextResponse {
  if (request.cookies.get(ATTRIBUTION_COOKIE)) return response;

  const attribution = readAttribution(request.nextUrl.searchParams);
  if (!attribution) return response;

  const hostname = (
    request.headers.get('host') ?? request.nextUrl.hostname
  ).split(':')[0];

  response.cookies.set(ATTRIBUTION_COOKIE, JSON.stringify(attribution), {
    path: '/',
    maxAge: MAX_AGE,
    sameSite: 'lax',
    domain: cookieDomain(hostname),
  });
  return response;
}
