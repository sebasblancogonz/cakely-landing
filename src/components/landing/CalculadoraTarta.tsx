'use client';

import { useState } from 'react';
import {
  Calculator,
  Sparkles,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';
import { TrackedCtaLink } from './TrackedCtaLink';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

// Misma lógica demo que app.cakely.es/calcular: costes medios del sector.
// La imprecisión es deliberada — el producto de pago calcula con los costes
// reales de cada obrador.
const DEMO_DEFAULTS = {
  laborRateHourly: 10,
  overheadMarkupPercent: 15,
  profitMarginPercent: 30,
  ivaPercent: 10,
};

const PRODUCTS: Record<
  string,
  { label: string; costPerKg: number; baseHours: number }
> = {
  bizcocho_basico: { label: 'Bizcocho básico', costPerKg: 3.5, baseHours: 1.0 },
  tarta_fondant: { label: 'Tarta con fondant', costPerKg: 6.0, baseHours: 2.0 },
  tarta_buttercream: {
    label: 'Tarta con buttercream',
    costPerKg: 5.0,
    baseHours: 1.5,
  },
  cupcakes: { label: 'Cupcakes (docena)', costPerKg: 4.5, baseHours: 1.5 },
  galletas: {
    label: 'Galletas decoradas (docena)',
    costPerKg: 3.5,
    baseHours: 2.0,
  },
  cheesecake: { label: 'Cheesecake', costPerKg: 5.5, baseHours: 1.5 },
};

const DECORATION_MULTIPLIER: Record<string, number> = {
  simple: 1.0,
  media: 1.3,
  compleja: 2.0,
};

interface CalcResult {
  costeIngredientes: number;
  costeManoObra: number;
  costePackaging: number;
  costesIndirectos: number;
  costeTotal: number;
  precioRecomendado: number;
  iva: number;
  precioFinal: number;
  margen: number;
}

const round = (n: number) => Math.round(n * 100) / 100;
const eur = (n: number) =>
  n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

function calcular(
  product: string,
  weight: number,
  quantity: number,
  decoration: string,
  packagingCost: number
): CalcResult {
  const { laborRateHourly, overheadMarkupPercent, profitMarginPercent, ivaPercent } =
    DEMO_DEFAULTS;
  const p = PRODUCTS[product];

  const costeIngredientes = p.costPerKg * weight * quantity;
  const costeManoObra =
    p.baseHours * (DECORATION_MULTIPLIER[decoration] ?? 1.0) * laborRateHourly * quantity;
  const costePackaging = packagingCost * quantity;

  const costesDirectos = costeIngredientes + costeManoObra + costePackaging;
  const costesIndirectos = costesDirectos * (overheadMarkupPercent / 100);
  const costeTotal = costesDirectos + costesIndirectos;

  const precioRecomendado = costeTotal / (1 - profitMarginPercent / 100);
  const iva = precioRecomendado * (ivaPercent / 100);

  return {
    costeIngredientes: round(costeIngredientes),
    costeManoObra: round(costeManoObra),
    costePackaging: round(costePackaging),
    costesIndirectos: round(costesIndirectos),
    costeTotal: round(costeTotal),
    precioRecomendado: round(precioRecomendado),
    iva: round(iva),
    precioFinal: round(precioRecomendado + iva),
    margen: round(precioRecomendado - costeTotal),
  };
}

const inputClass =
  'w-full h-11 rounded-xl border border-[#E7E5E4] bg-white px-3 text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#E8943A]/40';

export function CalculadoraTarta() {
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('1.5');
  const [quantity, setQuantity] = useState('1');
  const [decoration, setDecoration] = useState('media');
  const [packagingCost, setPackagingCost] = useState('1.5');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CalcResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const onCalcular = () => {
    const w = parseFloat(weight);
    const q = parseInt(quantity, 10);
    const pack = parseFloat(packagingCost) || 0;

    if (!PRODUCTS[product]) return setError('Selecciona un tipo de producto.');
    if (!Number.isFinite(w) || w < 0.1 || w > 20)
      return setError('El peso debe estar entre 0,1 y 20 kg.');
    if (!Number.isInteger(q) || q < 1 || q > 100)
      return setError('La cantidad debe estar entre 1 y 100.');

    setError(null);
    const res = calcular(product, w, q, decoration, pack);
    setResult(res);

    window.fbq?.('track', 'Lead', {
      content_name: 'calculadora_landing_resultado',
      currency: 'EUR',
      value: res.precioFinal,
    });

    setTimeout(() => {
      document
        .getElementById('resultado')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Calculadora */}
      <div className="bg-white rounded-3xl border border-[#E7E5E4] shadow-lg p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#E8943A]/15 flex items-center justify-center">
            <Calculator className="h-4 w-4 text-[#E8943A]" />
          </div>
          <span className="text-sm font-medium text-[#44403C]">
            Calculadora rápida — gratis, sin registro
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#1C1917]">
              Tipo de producto
            </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className={inputClass}
            >
              <option value="">Selecciona un producto</option>
              {Object.entries(PRODUCTS).map(([key, p]) => (
                <option key={key} value={key}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#1C1917]">
                Peso (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#1C1917]">
                Cantidad
              </label>
              <input
                type="number"
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#1C1917]">
              Complejidad de la decoración
            </label>
            <select
              value={decoration}
              onChange={(e) => setDecoration(e.target.value)}
              className={inputClass}
            >
              <option value="simple">Simple</option>
              <option value="media">Media</option>
              <option value="compleja">Compleja</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-[#1C1917]">
              Coste de packaging por unidad (€)
            </label>
            <input
              type="number"
              step="0.5"
              value={packagingCost}
              onChange={(e) => setPackagingCost(e.target.value)}
              className={inputClass}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="button"
            onClick={onCalcular}
            className="w-full h-12 bg-[#E8943A] hover:bg-[#D07A2B] text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Calcular precio recomendado
          </button>
        </div>
      </div>

      {/* Resultado */}
      {result && (
        <div id="resultado" className="mt-6 space-y-4">
          <div className="bg-white rounded-3xl border border-[#E8943A]/30 shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-sm text-[#44403C]/60 mb-1">Deberías cobrar</p>
              <p className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917]">
                {eur(result.precioFinal)}
              </p>
              <p className="text-xs text-[#44403C]/50 mt-1">IVA incluido</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-xl bg-[#FED7AA]/20">
                <p className="text-xs text-[#44403C]/60">Coste</p>
                <p className="font-semibold text-[#1C1917]">
                  {eur(result.costeTotal)}
                </p>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#E8943A]/10">
                <p className="text-xs text-[#44403C]/60">Sin IVA</p>
                <p className="font-semibold text-[#1C1917]">
                  {eur(result.precioRecomendado)}
                </p>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#C9A96E]/10">
                <p className="text-xs text-[#44403C]/60">Margen</p>
                <p className="font-semibold text-[#E8943A]">
                  <TrendingUp className="inline h-3 w-3 mr-0.5" />
                  {DEMO_DEFAULTS.profitMarginPercent}%
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="w-full flex items-center justify-center gap-1 text-sm text-[#E8943A] hover:text-[#D07A2B] transition-colors py-2"
            >
              Ver desglose completo
              {showBreakdown ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {showBreakdown && (
              <div className="mt-3 space-y-2 border-t border-[#E7E5E4] pt-4 text-sm">
                <Row label="Ingredientes" value={eur(result.costeIngredientes)} />
                <Row label="Mano de obra" value={eur(result.costeManoObra)} />
                <Row label="Packaging" value={eur(result.costePackaging)} />
                <Row
                  label="Costes indirectos"
                  value={eur(result.costesIndirectos)}
                />
                <div className="border-t border-[#E7E5E4] my-2" />
                <Row label="Coste total" value={eur(result.costeTotal)} bold />
                <Row label="Tu beneficio" value={eur(result.margen)} accent />
                <Row label="IVA" value={eur(result.iva)} />
                <div className="border-t border-[#E7E5E4] my-2" />
                <Row label="Precio final" value={eur(result.precioFinal)} bold />
              </div>
            )}

            <p className="mt-4 text-xs text-[#44403C]/60 bg-[#FED7AA]/20 rounded-xl p-3">
              ⚠️ Esto es una <strong>estimación con costes medios del sector</strong>{' '}
              (ingredientes genéricos, 10 €/h de mano de obra). Con los precios de
              tus ingredientes y tu tarifa real, tu precio puede variar bastante.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#1C1917] to-[#44403C] rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Calcula con TUS costes reales
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Con Cakely usas tus propios ingredientes, recetas y tarifas: el
              escandallo exacto de cada tarta, presupuestos que puedes enviar al
              cliente y convertir en pedido.
            </p>
            <TrackedCtaLink
              href={`${appDomain}/empezar-prueba?from=calculadora-landing`}
              contentName="calculadora_landing_cta"
              className="inline-flex items-center justify-center gap-2 w-full h-12 bg-[#E8943A] hover:bg-[#D07A2B] text-white font-semibold rounded-full transition-colors"
            >
              Probar Cakely gratis
              <ArrowRight className="h-4 w-4" />
            </TrackedCtaLink>
            <p className="text-white/50 text-xs mt-3">
              Sin tarjeta de crédito. Listo en 30 segundos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  bold,
  accent,
}: {
  label: string;
  value: string;
  bold?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={bold ? 'font-semibold text-[#1C1917]' : 'text-[#44403C]/70'}>
        {label}
      </span>
      <span
        className={
          accent
            ? 'text-[#E8943A] font-medium'
            : bold
              ? 'font-semibold text-[#1C1917]'
              : 'text-[#44403C]'
        }
      >
        {value}
      </span>
    </div>
  );
}
