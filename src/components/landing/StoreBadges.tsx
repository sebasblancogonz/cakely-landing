import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/es/app/cakely/id6756487354";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cakely.cakely_app&pcampaignid=web_share";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar Cakely en el App Store"
      >
        <Image
          src="/img/app-store-badge.svg"
          alt="Descárgalo en el App Store"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar Cakely en Google Play"
      >
        {/* ponytail: el badge oficial de Play trae padding interno, h-14 iguala su altura visual con el de Apple */}
        <Image
          src="/img/google-play-badge.png"
          alt="Disponible en Google Play"
          width={646}
          height={250}
          className="h-14 w-auto"
        />
      </a>
    </div>
  );
}
