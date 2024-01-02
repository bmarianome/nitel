import Link from "next/link";

export default function FixedButtons() {
  return (
    <div className="fixed right-6 top-10 z-50 lg:right-10 lg:top-10">
      <div className="flex flex-col gap-6 items-end">
        <Link
          aria-label="Contactarme por Whatsapp"
          id="WhatsappButtonFixed"
          href="https://bills11.ispcube.com/"
          target="_blank"
          className="gradient block rounded-full px-3.5 py-2.5 text-xs text-white shadow-lg lg:text-lg lg:font-medium"
        >
          Portal de clientes
        </Link>
        <Link
          aria-label="Contactarme por Whatsapp"
          id="WhatsappButtonFixed"
          href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
          target="_blank"
          className=" rounded-full bg-[#25D366] p-3"
        >
          <svg
            className="h-6 w-6 fill-white lg:h-8 lg:w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.512 32.483"
          >
            <path
              className="cls-1"
              d="M0,32.483c.9-2.7,1.681-5.118,2.524-7.511a2.1,2.1,0,0,0-.13-1.82A15.891,15.891,0,0,1,17.229.013,16.066,16.066,0,0,1,32.469,14.7a15.861,15.861,0,0,1-12.98,16.867A16.094,16.094,0,0,1,9.74,30.323a3.055,3.055,0,0,0-1.914-.118c-2.21.6-4.386,1.329-6.578,2C.927,32.3.59,32.353,0,32.483Zm4.472-4.294C5.9,27.749,7.1,27.406,8.276,27a1.945,1.945,0,0,1,1.814.17,12.558,12.558,0,0,0,8.383,1.63A13,13,0,1,0,5.514,22.725,1.928,1.928,0,0,1,5.7,24.62C5.272,25.717,4.928,26.846,4.472,28.189Z"
            />
            <path
              className="cls-1"
              d="M20.184,24.006A29.232,29.232,0,0,1,16.69,22.65a15.493,15.493,0,0,1-8.052-9.714A4.143,4.143,0,0,1,9.884,8.805,1.912,1.912,0,0,1,13.3,9.49a10.466,10.466,0,0,0,.483,1.308,2.384,2.384,0,0,1-.523,3.264,1.287,1.287,0,0,0-.045,1.188,10.663,10.663,0,0,0,4.4,4.287,1.249,1.249,0,0,0,1.774-.318c1.363-1.52,1.389-1.5,3.233-.5.315.17.632.337.946.509,1.485.813,1.684,2.064.539,3.367A5.121,5.121,0,0,1,20.184,24.006Z"
            />
          </svg>
        </Link>
        <Link
          aria-label="Información sobre la empresa"
          id="TwitterButtonFixed"
          href="https://twitter.com/NitelArgentina"
          target="_blank"
          className="rounded-full bg-black p-3"
        >
          <svg
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-white lg:h-8 lg:w-8"
          >
            <path
              d="M74.352 55.424L114.856 8H105.256L70.096 49.176L42 8H9.59998L52.08 70.272L9.59998 120H19.2L56.336 76.512L86.008 120H118.408L74.352 55.424ZM61.208 70.816L56.904 64.616L22.656 15.28H37.4L65.032 55.096L69.336 61.296L105.264 113.056H90.52L61.208 70.816Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
    // <div className="fixed right-6 top-64 z-50 lg:right-10 lg:top-[45%]">
    //   <div className="flex flex-col gap-6">

    // <Link
    //   aria-label="Contactarme por Whatsapp"
    //   id="WhatsappButtonFixed"
    //   href="https://wa.me/+543516472777/?text=Hola, quiero realizar una consulta"
    //   target="_blank"
    //   className=" rounded-full bg-[#25D366] p-3"
    // >
    //   <svg
    //     className="h-6 w-6 fill-white lg:h-8 lg:w-8"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 32.512 32.483"
    //   >
    //     <path
    //       className="cls-1"
    //       d="M0,32.483c.9-2.7,1.681-5.118,2.524-7.511a2.1,2.1,0,0,0-.13-1.82A15.891,15.891,0,0,1,17.229.013,16.066,16.066,0,0,1,32.469,14.7a15.861,15.861,0,0,1-12.98,16.867A16.094,16.094,0,0,1,9.74,30.323a3.055,3.055,0,0,0-1.914-.118c-2.21.6-4.386,1.329-6.578,2C.927,32.3.59,32.353,0,32.483Zm4.472-4.294C5.9,27.749,7.1,27.406,8.276,27a1.945,1.945,0,0,1,1.814.17,12.558,12.558,0,0,0,8.383,1.63A13,13,0,1,0,5.514,22.725,1.928,1.928,0,0,1,5.7,24.62C5.272,25.717,4.928,26.846,4.472,28.189Z"
    //     />
    //     <path
    //       className="cls-1"
    //       d="M20.184,24.006A29.232,29.232,0,0,1,16.69,22.65a15.493,15.493,0,0,1-8.052-9.714A4.143,4.143,0,0,1,9.884,8.805,1.912,1.912,0,0,1,13.3,9.49a10.466,10.466,0,0,0,.483,1.308,2.384,2.384,0,0,1-.523,3.264,1.287,1.287,0,0,0-.045,1.188,10.663,10.663,0,0,0,4.4,4.287,1.249,1.249,0,0,0,1.774-.318c1.363-1.52,1.389-1.5,3.233-.5.315.17.632.337.946.509,1.485.813,1.684,2.064.539,3.367A5.121,5.121,0,0,1,20.184,24.006Z"
    //     />
    //   </svg>
    // </Link>
    // <Link
    //   aria-label="Información sobre la empresa"
    //   id="TwitterButtonFixed"
    //   href="https://twitter.com/NitelArgentina"
    //   target="_blank"
    //   className="rounded-full bg-black p-3"
    // >
    //   <svg
    //     viewBox="0 0 128 128"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="h-6 w-6 fill-white lg:h-8 lg:w-8"
    //   >
    //     <path
    //       d="M74.352 55.424L114.856 8H105.256L70.096 49.176L42 8H9.59998L52.08 70.272L9.59998 120H19.2L56.336 76.512L86.008 120H118.408L74.352 55.424ZM61.208 70.816L56.904 64.616L22.656 15.28H37.4L65.032 55.096L69.336 61.296L105.264 113.056H90.52L61.208 70.816Z"
    //       fill="white"
    //     />
    //   </svg>
    // </Link>
    //   </div>
    // </div>
  );
}
