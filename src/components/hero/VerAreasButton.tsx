"use client"
import { slideOverState } from "../content/VerAreasSlide";

const VerAreasButton = () => {

  const { setOpen } = slideOverState()

  function OpenAreasDeCobertura() {
    setTimeout(() => {
      setOpen(true);
    }, 250);
    const element = document.getElementById('AreasDeCobertura');
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <button
      id='VerAreasButton'
      className="text-sm font-semibold leading-6 text-white hover:underline translate-x-[-100px] opacity-0
      animate-[animationVerAreasButton_.25s_.75s_forwards]
      "
      onClick={() => OpenAreasDeCobertura()}
    >
      Ver áreas de cobertura
      <span aria-hidden="true"> →</span>
    </button>
  );
}

export default VerAreasButton;