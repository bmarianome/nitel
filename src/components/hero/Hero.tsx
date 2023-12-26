import Image from "next/image";
import VerAreasButton from "./VerAreasButton";
import nitelFullWordLogo from "public/logo-nitel-full-word.png";
import MapaCordobaMobile from "../MapaCordobaMobile";
import MapaCordobaDesktop from "../MapaCordobaDesktop";
import Link from "next/link";

const Hero = () => (
  <div className="relative isolate h-[100svh] min-h-max overflow-hidden">
    <div className="left-0 top-0 flex h-full w-full items-start lg:absolute lg:items-center">
      <div className="mx-auto w-full max-w-lg px-6 py-10 sm:pb-32 lg:flex lg:w-full lg:max-w-7xl lg:gap-8 lg:px-8 lg:py-0">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:h-max lg:w-1/2 lg:max-w-xl lg:items-stretch">
          {/* LOGO */}
          <Image
            priority
            className="scale-on-height w-[188px] animate-[animation_.5s_.25s_forwards] opacity-0 sm:w-80"
            src={nitelFullWordLogo}
            sizes="(max-width: 620px) 188px, 320px"
            alt=""
          />

          {/* TITULO */}
          <div
            className="scale-on-height relative h-max w-max animate-[animation_.5s_.5s_forwards] opacity-0"
            id="TituloHero"
          >
            <h1 className="reduce-margin-top-on-height mt-6 h-max w-max overflow-hidden pr-[0.08em] text-4xl font-bold uppercase italic tracking-tight text-white sm:text-5xl lg:mt-8">
              Internet / Calidad
            </h1>
          </div>

          <p className="slot-machine-animation reduce-margin-top-on-height mt-6 hidden text-lg leading-8 text-gray-300 lg:mt-8 lg:inline-block">
            <Link
              className="underline"
              href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
            >
              {" "}
              Unite ahora.
            </Link>
          </p>

          {/* CONTACTO */}
          <div className="flex flex-col gap-6 lg:gap-10">
            <dl className="reduce-margin-top-on-height mt-6 space-y-4 text-base leading-7 text-gray-300 sm:mt-8">
              <div className="flex gap-x-4 lg:gap-x-6">
                <dt className="flex-none">
                  <span className="sr-only">Dirección</span>
                  <svg
                    className="h-7 w-7 text-gray-400 lg:h-8 lg:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                </dt>
                <dd className="lg:text-lg">
                  <span>Bv. Mitre 517 - Córdoba Capital</span>
                </dd>
              </div>

              <div className="mt-4 flex gap-x-4 lg:gap-x-6">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    className="h-7 w-7 text-gray-400 lg:h-8 lg:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </dt>
                <dd className="lg:text-lg">
                  <Link
                    className="hover:text-white"
                    href="mailto:comercial@nitel.com.ar"
                  >
                    comercial@nitel.com.ar
                  </Link>
                </dd>
              </div>

              <div className="mt-4 flex gap-x-4 lg:gap-x-6">
                <dt className="flex-none">
                  <span className="sr-only">Teléfono</span>
                  <svg
                    className="h-7 w-7 text-gray-400 lg:h-8 lg:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    ></path>
                  </svg>
                </dt>
                <dd className="lg:text-lg">
                  <Link className="hover:text-white" href="tel:+543516472777">
                    +54 351 647 2777
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          {/* BOTÓN, ÁREAS Y REDES. MOBILE: MAP */}
          <div className="reduce-margin-top-on-height flex items-end justify-between lg:mt-8">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
              <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center">
                <Link
                  id="ContactanosButton"
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
                  className="bg-white relative z-10 w-max animate-[opacity01_.5s] rounded-md px-3.5 py-2.5 text-sm font-semibold text-[#35068c] shadow-sm"
                >
                  Quiero asesoramiento
                </Link>

                <VerAreasButton />
              </div>

              {/* REDES SOCIALES EN HERO */}
              <div className="hidden-on-height flex">
                <div className=" mr-6 text-gray-400 hover:text-gray-500">
                  <Link
                    href="https://www.facebook.com/nitelinternet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>

                <div className=" mr-6 text-gray-400 hover:text-gray-500">
                  <Link
                    href="https://www.instagram.com/nitelinternet/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>

                <div className=" text-gray-400 hover:text-gray-500">
                  <Link
                    href="https://www.tiktok.com/@nitel_internet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h6 w-6"
                      viewBox="0 0 113 113"
                      fill="currentColor"
                    >
                      <path d="M85 17.625C85 17.625 88.1875 20.75 85 17.625C80.7277 12.7476 78.3732 6.48395 78.375 0H59.0625V77.5C58.9135 81.6939 57.1429 85.6664 54.1235 88.5809C51.1041 91.4953 47.0716 93.1244 42.875 93.125C34 93.125 26.625 85.875 26.625 76.875C26.625 66.125 37 58.0625 47.6875 61.375V41.625C26.125 38.75 7.25 55.5 7.25 76.875C7.25 97.6875 24.5 112.5 42.8125 112.5C62.4375 112.5 78.375 96.5625 78.375 76.875V37.5625C86.2062 43.1866 95.6085 46.204 105.25 46.1875V26.875C105.25 26.875 93.5 27.4375 85 17.625Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[45%] translate-y-3 lg:hidden">
              <MapaCordobaMobile />
            </div>
          </div>
        </div>

        {/* MAP DESKTOP */}
        <div className="relative hidden w-full lg:inline-block">
          <div className="absolute left-0 top-0 flex h-full w-full justify-center">
            <MapaCordobaDesktop />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
