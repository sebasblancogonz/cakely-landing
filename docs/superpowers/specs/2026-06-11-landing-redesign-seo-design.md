# Rediseño de la landing + arquitectura SEO (España, pastelerías + panaderías)

**Fecha:** 2026-06-11
**Estado:** Aprobado (diseño validado en sesión de brainstorming)
**Repo:** `cakely-landing`

## Contexto y objetivo

El objetivo del bloque es **captación de usuarios nuevos** vía búsqueda orgánica en España. Hoy la landing es una sola página orientada exclusivamente a "pastelería". Queremos posicionar también el vertical **panadería** ("gestión pedidos panadería", "software para panaderías") y que el tráfico aterrice en una landing que convierta.

**Nota de contexto (corregida tras explorar el código):** la landing YA implementa el design system (paleta cálida en `globals.css`, serif Playfair, componentes Notion+artisan — commit `8f87d2a`). La parte visual de este bloque NO es una migración de tokens sino una **elevación**: subir el nivel del hero, añadir social proof, micro-interacciones y pulido de secciones.

Rediseño y SEO se ejecutan como **un solo bloque**: para una landing de una página son en gran parte el mismo trabajo, y así cada página se construye una sola vez sobre los componentes nuevos.

Fuera de alcance en este bloque: producción de contenido del blog (fase 2), México/hreflang, rediseño de la webapp, verticales adicionales.

## Arquitectura de páginas

| Página | Keyword objetivo principal | Rol |
|---|---|---|
| `/` (rediseñada) | "gestión pedidos pastelería" + marca | Conserva el posicionamiento ya indexado; presenta y enlaza los verticales |
| `/software-para-pastelerias` (nueva) | "software para pastelerías", "programa pastelería" | Transaccional vertical |
| `/software-para-panaderias` (nueva) | "software para panaderías", "gestión pedidos panadería", "programa panadería" | Transaccional vertical |
| `/precio-real`, `/blog`, legales | — | Sin cambios estructurales (el blog hereda el restyling de Header/Footer) |

**Estrategia de dos capas:** los verticales atacan búsquedas transaccionales ("software para X"); el blog (fase 2) atacará las informacionales ("cómo organizar los pedidos de una panadería") enlazando internamente a los verticales.

## Plantilla `VerticalLanding`

Las dos páginas verticales comparten una plantilla parametrizada. Secciones, en orden:

1. **Hero** — H1 específico del vertical + subcopy + screenshot + CTA principal.
2. **Dolores/beneficios** — copy en el idioma del negocio:
   - Panadería: encargos, obrador, producción diaria, pedidos por WhatsApp/teléfono perdidos en libretas.
   - Pastelería: tartas personalizadas, presupuestos, fechas de entrega.
3. **Features mapeadas** — las features de Cakely presentadas desde el caso de uso del vertical.
4. **Testimonio** (1 por vertical).
5. **Resumen de pricing** con enlace a la sección completa de la home.
6. **FAQ propia del vertical** — con JSON-LD `FAQPage`.
7. **CTA final.**

La parametrización (copy, keywords, screenshots, FAQs) vive en un objeto de configuración por vertical, de modo que añadir un tercer vertical (cafeterías, obradores) sea cuestión de horas.

## Elevación visual

La base ya está en el design system; este bloque la sube de nivel:

- **Hero más ambicioso:** fondo con gradiente cálido sutil, CTA primario en naranja de marca (hoy es negro), franja de social proof bajo el hero, animación de entrada.
- **Micro-interacciones:** componente `Reveal` (fade-in al hacer scroll, respetando `prefers-reduced-motion`) aplicado a las secciones; hover states en cards de features y pricing.
- **Testimonios** con estrellas gold y mejor jerarquía visual.
- **Coherencia de copy:** corregir restos de "sin tarjeta" en `CtaSection` (contradicen el fix `b7cc2cd` del hero).
- La home conserva su estructura de secciones: se añade un bloque de presentación de verticales ("¿Tienes una panadería?").
- Mobile-first: el tráfico de búsqueda del nicho es mayoritariamente móvil.

## SEO técnico

- **Metadata por página:** title/description únicos, canonical, OG image propia.
- **JSON-LD:** `SoftwareApplication` + `Organization` en home; `FAQPage` + `BreadcrumbList` en cada vertical.
- **Sitemap:** `sitemap.ts` ampliado con las rutas nuevas.
- **Enlazado interno:** header/footer → verticales; home → bloques de vertical; blog → verticales (cuando llegue fase 2).
- **Rendimiento:** `next/image` en todos los visuales, fuentes con `next/font`, Core Web Vitals en verde.
- **Analytics:** eventos en los CTAs (por página de entrada) para medir conversión a signup.
- Sin hreflang (solo España/español por ahora).

## Criterios de éxito

- **Al desplegar:** 4 páginas indexadas en Search Console; CWV en verde; rich results de FAQ validados.
- **8–12 semanas:** impresiones y clics crecientes en GSC para la familia de keywords de panadería y pastelería; signups atribuibles a los verticales vía analytics.

## Testing

- Build de producción limpio (`pnpm build`).
- Validación de JSON-LD con Rich Results Test.
- Lighthouse ≥ 90 en Performance y SEO en las 4 páginas.
- Revisión visual responsive (móvil/tablet/desktop) de home y verticales.

## Riesgos y mitigaciones

- **Perder rankings actuales de la home:** la home mantiene su keyword principal, URL y estructura de contenido; el rediseño no elimina secciones ni cambia URLs existentes.
- **Canibalización pastelería home vs vertical:** la home apunta a "gestión pedidos pastelería" + marca; el vertical a "software/programa para pastelerías". Titles y H1 diferenciados.
- **SEO es lento:** las expectativas de tráfico son a 8–12 semanas; el bloque entrega la base, el compounding lo hace el tiempo + fase 2 (contenido).
