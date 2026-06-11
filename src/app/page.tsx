import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { PlanComparisonTable } from '@/components/landing/PlanComparisonTable';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { Footer } from '@/components/landing/Footer';
import { VerticalsTeaser } from '@/components/landing/VerticalsTeaser';
import {
  organizationJsonLd,
  softwareApplicationJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <script {...jsonLdScriptProps(organizationJsonLd())} />
      <script {...jsonLdScriptProps(softwareApplicationJsonLd())} />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <VerticalsTeaser />
        <TestimonialsSection />
        <PricingSection />
        <PlanComparisonTable />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
