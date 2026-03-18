const META_API_VERSION = 'v21.0';
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CONVERSIONS_API_TOKEN;

interface MetaUserData {
  client_ip_address?: string;
  client_user_agent?: string;
  email?: string;
  phone?: string;
  fbc?: string;
  fbp?: string;
}

interface MetaCustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
}

interface MetaEvent {
  event_name: string;
  event_time: number;
  action_source:
    | 'website'
    | 'app'
    | 'email'
    | 'phone_call'
    | 'chat'
    | 'physical_store'
    | 'system_generated'
    | 'other';
  event_source_url?: string;
  user_data?: MetaUserData;
  custom_data?: MetaCustomData;
}

export async function sendMetaEvent(event: MetaEvent): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn(
      '[Meta CAPI] PIXEL_ID o ACCESS_TOKEN no configurados. Evento omitido.'
    );
    return;
  }

  const url = `https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/events`;

  const payload = {
    data: [event],
    access_token: ACCESS_TOKEN,
    // test_event_code: process.env.META_TEST_EVENT_CODE, // descomentar durante pruebas
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(
        '[Meta CAPI] Error enviando evento:',
        event.event_name,
        body
      );
    } else {
      console.log('[Meta CAPI] Evento enviado:', event.event_name);
    }
  } catch (err) {
    console.error('[Meta CAPI] Error de red enviando evento:', err);
  }
}

export function metaLeadEvent(params: {
  clientIp?: string;
  userAgent?: string;
}): MetaEvent {
  return {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: 'https://cakely.es/contacto',
    user_data: {
      client_ip_address: params.clientIp,
      client_user_agent: params.userAgent,
    },
  };
}
