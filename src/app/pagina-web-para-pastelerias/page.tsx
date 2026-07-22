import type { Metadata } from 'next';
import { VerticalLanding } from '@/components/landing/VerticalLanding';
import { WEB_PASTELERIAS } from '@/lib/verticals';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: WEB_PASTELERIAS.metaTitle,
  description: WEB_PASTELERIAS.metaDescription,
  alternates: { canonical: `${baseUrl}/${WEB_PASTELERIAS.slug}` },
  openGraph: {
    title: WEB_PASTELERIAS.metaTitle,
    description: WEB_PASTELERIAS.metaDescription,
    url: `${baseUrl}/${WEB_PASTELERIAS.slug}`,
    type: 'website',
    images: [
      {
        url: 'https://cakely.es/img/logo.png',
        width: 1200,
        height: 630,
        alt: WEB_PASTELERIAS.metaTitle,
      },
    ],
  },
};

export default function PaginaWebParaPasteleriasPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(WEB_PASTELERIAS.faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            {
              name: 'Página web para pastelerías',
              path: `/${WEB_PASTELERIAS.slug}`,
            },
          ])
        )}
      />
      <VerticalLanding vertical={WEB_PASTELERIAS} />
    </>
  );
}
