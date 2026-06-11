'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Link de CTA que registra un evento Lead en Meta Pixel con la página
 * de origen, para poder medir conversión por página de entrada.
 */
export function TrackedCtaLink({
  href,
  contentName,
  className,
  children,
}: {
  href: string;
  contentName: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        window.fbq?.('track', 'Lead', { content_name: contentName });
      }}
    >
      {children}
    </Link>
  );
}
