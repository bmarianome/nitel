"use client"
import { create } from "zustand";
import { m, LazyMotion, domAnimation } from "framer-motion"

export const slideOverState = create<SlideState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

interface SlideState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const VerAreasSlide = () => {

  const { open, setOpen } = slideOverState()

  return (
    <LazyMotion features={domAnimation}>
      <div className={`w-screen px-6 pb-16 pt-12 sm:pb-32 
      ${open ? "translate-y-0" : "-translate-y-full"} duration-200 absolute left-0 top-0 w-full z-[100]
        lg:w-full lg:translate-y-0 lg:static lg:py-16 lg:px-8
      `}>

        <div className="lg:inline-block lg:px-8 lg:w-full" id="AreasDeCobertura">

          {/* TÍTULO */}
          <m.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: .5, ease: 'linear' }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white flex justify-between w-full items-center">Áreas de cobertura
              <svg
                onClick={() => setOpen(!open)}
                className="inline-block ml-2 w-6 h-6 text-white cursor-pointer lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </h2>
          </m.div>

          {/* ÁREAS */}
          <div className="mx-auto mt-8 sm:mt-16 grid max-w-2xl grid-cols-2 gap-8 text-base leading-7 sm:gap-y-16 lg:mx-0 lg:max-w-none">
            <div>
              <h3 className="pl-6 font-semibold text-white relative">
                Zona Sur
                <span className="inline-block absolute top-0 left-0 h-full w-[1px] gradient"></span>
              </h3>
              <address className="pt-2 pl-6 not-italic text-gray-500 relative">

                <m.div
                  className="inline-block absolute top-0 left-0 w-[1px] bg-white"
                  initial={{ height: "0%" }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                </m.div>

                <p>Los Cedros</p>
                <p>Villa Rivadavia</p>
                <p>Ruta N°5</p>
                <p>Ferreyra</p>
                <p>Manantiales</p>
                <p>Ruta N°19</p>
                <p>Distrito Sur</p>
              </address>
            </div>
            <div>
              <h3 className="pl-6 font-semibold text-white relative">
                Zona Norte
                <span className="inline-block absolute top-0 left-0 h-full w-[1px] gradient"></span>
              </h3>
              <address className="pt-2 pl-6 not-italic text-gray-500 relative">

                <m.div
                  className="inline-block absolute top-0 left-0 w-[1px] bg-white"
                  initial={{ height: "0%" }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                </m.div>

                <p>Salsipuedes</p>
                <p>Rio Ceballos</p>
                <p>Villa Silvina</p>
                <p>Unquillo</p>
                <p>Mendiolaza</p>
                <p>Villa Allende</p>
              </address>
            </div>
          </div>

        </div>
      </div>
    </LazyMotion>
  );
}

export default VerAreasSlide;