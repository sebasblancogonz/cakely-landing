"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/landing-data";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="container max-w-2xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-[#E7E5E4] bg-transparent rounded-none shadow-none"
            >
              <AccordionTrigger
                className="py-5 text-left font-medium text-[#1C1917] text-base hover:no-underline"
                style={{ textDecoration: "none" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[#78716C] text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
