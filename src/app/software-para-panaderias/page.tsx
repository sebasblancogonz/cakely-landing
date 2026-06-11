import type { Metadata } from 'next';
import { VerticalLanding } from '@/components/landing/VerticalLanding';
import { PANADERIAS } from '@/lib/verticals';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: PANADERIAS.metaTitle,
  description: PANADERIAS.metaDescription,
  alternates: { canonical: `${baseUrl}/${PANADERIAS.slug}` },
  openGraph: {
    title: PANADERIAS.metaTitle,
    description: PANADERIAS.metaDescription,
    url: `${baseUrl}/${PANADERIAS.slug}`,
    type: 'website',
    images: [
      {
        url: 'https://cakely.es/img/logo.png',
        width: 1200,
        height: 630,
        alt: PANADERIAS.metaTitle,
      },
    ],
  },
};

export default function SoftwareParaPanaderiasPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(PANADERIAS.faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Software para panaderías', path: `/${PANADERIAS.slug}` },
          ])
        )}
      />
      <VerticalLanding vertical={PANADERIAS} />
    </>
  );
}
