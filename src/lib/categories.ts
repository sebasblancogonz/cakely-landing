import { BlogCategory } from "@prisma/client";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  GESTION: "Gestión",
  FINANZAS: "Finanzas",
  RECETAS: "Recetas",
  MARKETING: "Marketing",
  PRODUCTIVIDAD: "Productividad",
  TENDENCIAS: "Tendencias",
  CASOS_ESTUDIO: "Casos de Estudio",
};

export const CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  GESTION: "Gestión de pedidos, clientes y operaciones diarias",
  FINANZAS: "Control de costes, rentabilidad y precios",
  RECETAS: "Recetas y técnicas de repostería artesanal",
  MARKETING: "Estrategias de marketing y captación de clientes",
  PRODUCTIVIDAD: "Organización del obrador y mejora de procesos",
  TENDENCIAS: "Novedades del sector y tendencias del mercado",
  CASOS_ESTUDIO: "Casos de éxito y testimonios de pastelerías",
};

export const CATEGORY_SLUGS: Record<BlogCategory, string> = {
  GESTION: "gestion",
  FINANZAS: "finanzas",
  RECETAS: "recetas",
  MARKETING: "marketing",
  PRODUCTIVIDAD: "productividad",
  TENDENCIAS: "tendencias",
  CASOS_ESTUDIO: "casos-estudio",
};

// Inversión del mapeo para convertir slug a enum
export const SLUG_TO_CATEGORY: Record<string, BlogCategory> = {
  "gestion": BlogCategory.GESTION,
  "finanzas": BlogCategory.FINANZAS,
  "recetas": BlogCategory.RECETAS,
  "marketing": BlogCategory.MARKETING,
  "productividad": BlogCategory.PRODUCTIVIDAD,
  "tendencias": BlogCategory.TENDENCIAS,
  "casos-estudio": BlogCategory.CASOS_ESTUDIO,
};

export function getCategoryLabel(category: BlogCategory): string {
  return CATEGORY_LABELS[category];
}

export function getCategoryDescription(category: BlogCategory): string {
  return CATEGORY_DESCRIPTIONS[category];
}

export function getCategorySlug(category: BlogCategory): string {
  return CATEGORY_SLUGS[category];
}

export function getCategoryFromSlug(slug: string): BlogCategory | null {
  return SLUG_TO_CATEGORY[slug] || null;
}

export function getAllCategories(): Array<{
  value: BlogCategory;
  label: string;
  slug: string;
  description: string;
}> {
  return Object.values(BlogCategory).map((category) => ({
    value: category,
    label: CATEGORY_LABELS[category],
    slug: CATEGORY_SLUGS[category],
    description: CATEGORY_DESCRIPTIONS[category],
  }));
}
