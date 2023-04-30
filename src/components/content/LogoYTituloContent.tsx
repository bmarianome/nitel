"use client"
import { slideOverState } from "./VerAreasSlide";
import { m, LazyMotion, domAnimation } from "framer-motion"
import Image from "next/image";
import logoNitelN from "public/logo-nitel.png"

const LogoYTituloContent = () => {

  const { open } = slideOverState()

  return (
    // IF ISOPEN OPACITY 0, ALSO LG: OPACITY 100 ALWAYS
    <div className={`${open ? "opacity-0" : "opacity-100"} duration-200 lg:opacity-100`}>
      <LazyMotion features={domAnimation}>
        <m.div
          transition={{ duration: .25, ease: 'linear' }}
          initial={{
            opacity: 0, scale: .5 }}
          viewport={{ once: true, margin: "500px 0px 0px 0px" }}
          whileInView={{ opacity: 1, scale: [.5, 1] }}
          className="flex justify-center w-full"
        >
          <Image
            priority
            src={logoNitelN}
            className="w-2/3 lg:w-1/3"
            alt=""
          />
        </m.div>
      </LazyMotion>

      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-6 lg:mt-8">
        Contáctate y nosotros te asesoramos para que tengas el plan que necesitas
      </h2>
    </div>

  );
}

export default LogoYTituloContent;