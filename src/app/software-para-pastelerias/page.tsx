import type { Metadata } from 'next';
import { VerticalLanding } from '@/components/landing/VerticalLanding';
import { PASTELERIAS } from '@/lib/verticals';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: PASTELERIAS.metaTitle,
  description: PASTELERIAS.metaDescription,
  alternates: { canonical: `${baseUrl}/${PASTELERIAS.slug}` },
  openGraph: {
    title: PASTELERIAS.metaTitle,
    description: PASTELERIAS.metaDescription,
    url: `${baseUrl}/${PASTELERIAS.slug}`,
    type: 'website',
  },
};

export default function SoftwareParaPasteleriasPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(PASTELERIAS.faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Software para pastelerías', path: `/${PASTELERIAS.slug}` },
          ])
        )}
      />
      <VerticalLanding vertical={PASTELERIAS} />
    </>
  );
}
