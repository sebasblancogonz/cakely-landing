export {};
// Ejecutar con: npx tsx scripts/test-attribution.ts
interface TestResult {
  name: string;
  ok: boolean;
  detail?: string;
}

async function main() {
  const { NextRequest, NextResponse } = await import('next/server');
  const { withAttributionCookie, ATTRIBUTION_COOKIE } =
    await import('@/lib/attribution');

  const results: TestResult[] = [];
  const check = (name: string, ok: boolean, detail?: string) =>
    results.push({ name, ok, detail });

  const make = (url: string, cookie?: string) => {
    const req = new NextRequest(url, {
      headers: cookie ? { cookie } : undefined,
    });
    const res = NextResponse.next();
    withAttributionCookie(req, res);
    return res.cookies.get(ATTRIBUTION_COOKIE);
  };

  {
    const c = make(
      'https://cakely.es/?utm_source=facebook&utm_medium=paid&utm_campaign=sep&fbclid=IwAR1',
    );
    const parsed = c ? JSON.parse(c.value) : null;
    check(
      'escribe cookie JSON compartida en .cakely.es con utm y fbclid',
      parsed?.utm_source === 'facebook' &&
        parsed?.utm_medium === 'paid' &&
        parsed?.utm_campaign === 'sep' &&
        parsed?.fbclid === 'IwAR1' &&
        c?.domain === '.cakely.es' &&
        c?.path === '/' &&
        c?.maxAge === 60 * 60 * 24 * 30 &&
        c?.sameSite === 'lax',
      JSON.stringify(c),
    );
  }
  check(
    'nombre de cookie igual que en la app',
    ATTRIBUTION_COOKIE === 'cakely_utm',
  );
  {
    const c = make('http://localhost:3001/?utm_source=x');
    check(
      'sin dominio en localhost',
      c !== undefined && c.domain === undefined,
    );
  }
  check(
    'sin parámetros no escribe cookie',
    make('https://cakely.es/blog') === undefined,
  );
  check(
    'first-touch: no sobreescribe una cookie existente',
    make(
      'https://cakely.es/?utm_source=second',
      `cakely_utm=${encodeURIComponent(JSON.stringify({ utm_source: 'first' }))}`,
    ) === undefined,
  );
  {
    const c = make(
      `https://cakely.es/?utm_source=${'a'.repeat(300)}&utm_term=%20%20&utm_content=%0Ax`,
    );
    const parsed = c ? JSON.parse(c.value) : null;
    check(
      'sanea: recorta a 100, ignora vacíos y quita caracteres de control',
      parsed?.utm_source?.length === 100 &&
        parsed?.utm_term === undefined &&
        parsed?.utm_content === 'x',
      JSON.stringify(parsed),
    );
  }

  let failed = 0;
  for (const r of results) {
    console.log(
      `${r.ok ? '✅' : '❌'} ${r.name}${r.detail && !r.ok ? ` — ${r.detail}` : ''}`,
    );
    if (!r.ok) failed++;
  }
  console.log(`\n${results.length - failed}/${results.length} pasaron`);
  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
