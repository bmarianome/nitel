import Link from "next/link";

export default function FixedClientsButton() {
  return (
    <div className="fixed right-6 top-10 z-50 lg:right-10 lg:top-10">
      <Link
        aria-label="Contactarme por Whatsapp"
        id="WhatsappButtonFixed"
        href="https://bills11.ispcube.com/"
        target="_blank"
        className="gradient block rounded-full px-3.5 py-2.5 text-xs text-white shadow-lg lg:text-lg lg:font-medium"
      >
        Portal de clientes
      </Link>
    </div>
  );
}
