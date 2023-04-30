import { ReactNode } from "react";

const IconoAnimado = ({ delay, children, parentClass }:
  { delay: number, children: ReactNode, parentClass: string }
) => {
  return (
    <div className={parentClass} id='Icono'>
      {children}
    </div>
  );
}

export default IconoAnimado;

