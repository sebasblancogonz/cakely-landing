import {
  ClipboardList,
  DollarSign,
  ChefHat,
  Megaphone,
  Zap,
  TrendingUp,
  Award,
  LucideIcon
} from "lucide-react";
import { BlogCategory } from "@prisma/client";

export const CATEGORY_ICONS: Record<BlogCategory, LucideIcon> = {
  GESTION: ClipboardList,
  FINANZAS: DollarSign,
  RECETAS: ChefHat,
  MARKETING: Megaphone,
  PRODUCTIVIDAD: Zap,
  TENDENCIAS: TrendingUp,
  CASOS_ESTUDIO: Award,
};

export const CATEGORY_COLORS: Record<BlogCategory, { bg: string; text: string; hover: string }> = {
  GESTION: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hover: "hover:bg-blue-100",
  },
  FINANZAS: {
    bg: "bg-green-50",
    text: "text-green-600",
    hover: "hover:bg-green-100",
  },
  RECETAS: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    hover: "hover:bg-pink-100",
  },
  MARKETING: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    hover: "hover:bg-purple-100",
  },
  PRODUCTIVIDAD: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    hover: "hover:bg-yellow-100",
  },
  TENDENCIAS: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    hover: "hover:bg-orange-100",
  },
  CASOS_ESTUDIO: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    hover: "hover:bg-emerald-100",
  },
};

export function getCategoryIcon(category: BlogCategory): LucideIcon {
  return CATEGORY_ICONS[category];
}

export function getCategoryColors(category: BlogCategory) {
  return CATEGORY_COLORS[category];
}
