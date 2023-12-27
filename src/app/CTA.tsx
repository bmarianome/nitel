import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="mx-auto max-w-lg px-6 pb-16 pt-8 sm:px-0 lg:max-w-7xl lg:px-8 lg:pb-32 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="lg:my-auto">
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:mt-8 lg:text-6xl">
            Enterate de las <br />
            <span className="uppercase text-[#01dcfd]">
              últimas actualizaciones
            </span>
          </h2>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
            className="mt-4 lg:mt-8 w-full block relative z-10 text-center max-w-xs animate-[opacity01_.5s] rounded-md bg-[#01dcfd] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Ver las novedades →
          </Link>
        </div>
        
        <div className="flex w-full justify-center lg:aspect-[1/1]">
          <Image
            src="/phone.png"
            alt="Phone"
            width={550}
            height={825}
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}
