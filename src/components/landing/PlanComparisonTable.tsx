import { Check, Minus } from 'lucide-react';
import { PLAN_COMPARISON, type PlanColumn } from '@/lib/landing-data';

const PLAN_LABELS: Record<PlanColumn, string> = {
  free: 'Gratis',
  basico: 'Básico',
  pro: 'Pro',
};

const PLAN_ORDER: PlanColumn[] = ['free', 'basico', 'pro'];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-4 h-4 text-[#1C1917] mx-auto" strokeWidth={2.5} />
    ) : (
      <Minus className="w-4 h-4 text-[#D6D3D1] mx-auto" strokeWidth={2.5} />
    );
  }
  return (
    <span className="font-sans text-xs md:text-sm text-[#1C1917] tabular-nums">
      {value}
    </span>
  );
}

export function PlanComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Compara todo en detalle
          </h2>
          <p className="font-sans text-base text-[#78716C] mt-4 max-w-xl mx-auto">
            Todas las cuotas y funciones de cada plan, una junto a otra.
            Sin sorpresas.
          </p>
        </div>

        {/* Tabla — fluida, se adapta al ancho sin scroll horizontal */}
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
              <colgroup>
                <col className="w-[40%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
              </colgroup>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left font-sans font-semibold text-sm text-[#78716C] py-4 pr-2 md:px-6"
                  >
                    <span className="sr-only">Concepto</span>
                  </th>
                  {PLAN_ORDER.map((plan) => (
                    <th
                      key={plan}
                      scope="col"
                      className={
                        plan === 'pro'
                          ? 'text-center font-sans font-semibold text-xs md:text-sm text-[#1C1917] py-4 px-1.5 md:px-6 bg-white rounded-t-lg border-x border-t border-[#E7E5E4]'
                          : 'text-center font-sans font-semibold text-xs md:text-sm text-[#1C1917] py-4 px-1.5 md:px-6'
                      }
                    >
                      {PLAN_LABELS[plan]}
                      {plan === 'pro' && (
                        <span className="block mt-0.5 text-[10px] uppercase tracking-wider text-[#C9A96E] font-medium">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {PLAN_COMPARISON.groups.map((group, groupIdx) => {
                  const isLastGroup = groupIdx === PLAN_COMPARISON.groups.length - 1;
                  return (
                    <>
                      {/* Header de grupo */}
                      <tr key={`group-${group.label}`}>
                        <td
                          colSpan={4}
                          className={`text-left font-sans text-[11px] uppercase tracking-[0.12em] font-semibold text-[#A8A29E] ${
                            groupIdx === 0 ? 'pt-8' : 'pt-10'
                          } pb-3 pr-2 md:px-6`}
                        >
                          {group.label}
                        </td>
                      </tr>

                      {/* Filas del grupo */}
                      {group.rows.map((row, rowIdx) => {
                        const isLastRow = rowIdx === group.rows.length - 1;
                        const isLastOverall = isLastGroup && isLastRow;
                        return (
                          <tr
                            key={`${group.label}-${row.label}`}
                            className="border-t border-[#E7E5E4]"
                          >
                            <th
                              scope="row"
                              className="font-sans font-normal text-[13px] md:text-sm text-[#44403C] py-3.5 pr-2 md:px-6 text-left align-top"
                            >
                              {row.label}
                            </th>
                            {PLAN_ORDER.map((plan) => (
                              <td
                                key={plan}
                                className={
                                  plan === 'pro'
                                    ? `text-center align-top py-3.5 px-1.5 md:px-6 bg-white border-x border-[#E7E5E4] ${
                                        isLastOverall
                                          ? 'rounded-b-lg border-b'
                                          : ''
                                      }`
                                    : 'text-center align-top py-3.5 px-1.5 md:px-6'
                                }
                              >
                                <CellValue
                                  value={row[plan] as string | boolean}
                                />
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-sm text-[#A8A29E] mt-10">
          ¿Dudas sobre qué plan elegir?{' '}
          <a
            href="/contacto"
            className="text-[#1C1917] underline underline-offset-2 hover:text-[#44403C]"
          >
            Hablamos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
