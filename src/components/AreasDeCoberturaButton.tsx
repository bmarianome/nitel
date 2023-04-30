"use client"
import { slideOverState } from "./content/VerAreasSlide";

const AreasDeCoberturaButton = () => {
  const { open, setOpen } = slideOverState();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="mt-4 lg:hidden w-full text-black text-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold">
      Ver Áreas de Cobertura
    </button>
  );
}

export default AreasDeCoberturaButton;