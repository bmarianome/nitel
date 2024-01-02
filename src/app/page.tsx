import FixedButtons from "~/components/FixedButtons";
import Content from "~/components/content/Content";
import Hero from "~/components/hero/Hero";
import CTA from "./CTA";
import Link from "next/link";
import FixedClientsButton from "~/components/FixedClientsButton";

export default function Home() {
  return (
    <div className="relative bg-gray-900">
      {/* GRID QUE CUBRE TODO EL SITIO */}
      <svg
        className="absolute inset-0  h-full w-full stroke-white/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="150"
            height="150"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>

      <div className="relative overflow-hidden">
        {/* COLOR CLARO DE FONDO */}
        <div
          className=" absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className=" aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>

        <FixedButtons />
        {/* <FixedClientsButton /> */}
        <Hero />

        <div className="relative isolate overflow-hidden">
          {/*  COLOR CLARO DE FONDO */}
          <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-1/2">
            <svg
              className=" absolute -left-56 top-[calc(100%-13rem)] w-[72.1875rem] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              viewBox="0 0 1155 678"
              aria-hidden="true"
            >
              <path
                fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                fillOpacity=".2"
                d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
              />
              <defs>
                <linearGradient
                  id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                  x1="1155.49"
                  x2="-78.208"
                  y1="677.823"
                  y2="203.355"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#80CAFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <Content />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto w-full lg:col-span-2">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-8 md:flex md:items-center md:justify-between lg:px-8">
        {/*  LINKS */}
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://www.facebook.com/nitelinternet"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
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

          <Link
            href="https://www.instagram.com/nitelinternet/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
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

          <Link
            href="https://www.tiktok.com/@nitel_internet"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h6 w-6" viewBox="0 0 113 113" fill="currentColor">
              <path d="M85 17.625C85 17.625 88.1875 20.75 85 17.625C80.7277 12.7476 78.3732 6.48395 78.375 0H59.0625V77.5C58.9135 81.6939 57.1429 85.6664 54.1235 88.5809C51.1041 91.4953 47.0716 93.1244 42.875 93.125C34 93.125 26.625 85.875 26.625 76.875C26.625 66.125 37 58.0625 47.6875 61.375V41.625C26.125 38.75 7.25 55.5 7.25 76.875C7.25 97.6875 24.5 112.5 42.8125 112.5C62.4375 112.5 78.375 96.5625 78.375 76.875V37.5625C86.2062 43.1866 95.6085 46.204 105.25 46.1875V26.875C105.25 26.875 93.5 27.4375 85 17.625Z"></path>
            </svg>
          </Link>
        </div>

        {/*  DERECHOS */}
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Desarrollado por{" "}
            <Link className="underline" href="https://bmariano.me">
              bmariano
            </Link>{" "}
            & X Company. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
