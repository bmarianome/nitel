import Link from "next/link";
import AreasDeCoberturaButton from "../AreasDeCoberturaButton";
import LogoYTituloContent from "./LogoYTituloContent";
import VerAreasSlide from "./VerAreasSlide";

export default function Content() {
  return (
    <div
      id="AreasDeCobertura"
      className="relative mx-auto flex w-full max-w-7xl flex-col lg:grid lg:grid-cols-2 pt-16 pb-8 lg:pb-16"
    >
      {/*  LOGO, DESCRIPCIÓN Y BOTÓN */}
      <div className="mt-auto h-max px-6 lg:mt-0 lg:h-full lg:w-full lg:px-8">
        <div className="mx-auto max-w-lg lg:mx-0">
          {/*  LOGO Y TÍTULO JUNTOS PARA OP-0 SI SLIDEOVER SE ABRE */}
          <LogoYTituloContent />

          <Link
            href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
            target="_blank"
            rel="noreferrer"
            className="bg-white mt-8 inline-block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-[#35068c] lg:mt-12 lg:text-lg"
          >
            Contratar ahora
          </Link>

          {/*  VER ÁREAS BUTTON MOBILE, REACT PARA ABRIR SLIDEOVER */}
          <AreasDeCoberturaButton />
        </div>
      </div>

      {/*  ÁREAS DESKTOP */}
      <VerAreasSlide />
    </div>
  );
}
