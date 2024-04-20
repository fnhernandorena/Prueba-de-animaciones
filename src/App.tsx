import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from "./components/Header";

import imp from "./assets/impresora.png";
import ex from "./assets/extrusor.jpg";
import tit from "./assets/fabrica.png";
import amd from "./assets/amd.webp";
import cor from "./assets/corsair.webp";
import nvi from "./assets/nvidia.webp";
import rad from "./assets/radeon.webp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-32 flex-1 flex justify-center items-center flex-col">
      <Header />
      <div className="relative w-96 h-96">
        <img src={imp} alt="" className="absolute top-0 left-0 w-full z-11" />
        <div className="absolute top-36 left-44 z-9 animate-shake animate-thrice animate-duration-500 animate-ease-in-out">
          <img
            src={ex}
            alt=""
            className="w-10 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out"
          />
        </div>
        <img
          src={tit}
          alt=""
          className="w-36 absolute top-44 left-28 z-10 animate-flip-up animate-once animate-duration-[1500ms] animate-ease-in"
        />
      </div>
      <div className="mt-24 grid grid-cols-4">
        <img src={amd} alt="" data-aos="fade-right"
     data-aos-duration="2000"/>
        <img src={cor} alt="" data-aos="fade-up"
     data-aos-duration="2000"/>
        <img src={nvi} alt="" data-aos="fade-down"
     data-aos-duration="2000"/>
        <img src={rad} alt="" data-aos="fade-left"
     data-aos-duration="2000"/>
      </div><p className="p-2">
        La impresión 3D, también conocida como fabricación aditiva, es un
        proceso de fabricación que crea objetos tridimensionales capa por capa a
        partir de datos digitales. A diferencia de los métodos tradicionales de
        fabricación, que suelen ser sustractivos (como la talla o el moldeo), la
        impresión 3D agrega material de forma controlada para construir el
        objeto final. <br />
        El proceso de impresión 3D generalmente comienza con la creación de un modelo
        digital en un software de diseño asistido por computadora (CAD) o mediante
        técnicas de escaneo 3D. Este modelo se divide entonces en capas sucesivas
        mediante software de corte específico para la impresora 3D. Cada capa se
        imprime de manera individual, y las capas se van apilando unas sobre otras
        hasta que se completa el objeto.
      </p>
      <div className="mt-24 grid grid-cols-4">
        <img src={amd} alt="" data-aos="flip-right"
     data-aos-duration="2000"/>
        <img src={cor} alt="" data-aos="flip-up"
     data-aos-duration="2000"/>
        <img src={nvi} alt="" data-aos="flip-down"
     data-aos-duration="2000"/>
        <img src={rad} alt="" data-aos="flip-left"
     data-aos-duration="2000"/>
      </div>
      <div className="mt-24 grid grid-cols-4">
        <img src={amd} alt="" data-aos="zoom-in-right"
     data-aos-duration="2000"/>
        <img src={cor} alt="" data-aos="zoom-in-up"
     data-aos-duration="2000"/>
        <img src={nvi} alt="" data-aos="zoom-in-down"
     data-aos-duration="2000"/>
        <img src={rad} alt="" data-aos="zoom-in-left"
     data-aos-duration="2000"/>
      </div>
    </div>
  );
}

export default App;
