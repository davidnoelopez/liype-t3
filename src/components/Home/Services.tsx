"use client";
import { Carousel } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { set } from "zod";

interface Service {
  id: number;
  title: string;
  desription?: string;
}

const ServicesData: Service[] = [
  {
    id: 1,
    title:
      "Levantamientos Topográficos, Factibilidad para Fraccionar y Urbanizar el Suelo",
  },
  {
    id: 2,
    title:
      "Permiso para Desmonte y Movimiento de Tierras, Tala, Poda y Transplante de Árboles",
  },
  {
    id: 3,
    title:
      "Subdivisiones, Parcelaciones, Relotificaciónes, Fusiones y Régimen en Condominio",
  },
  {
    id: 4,
    title:
      "Factibilidad y Autorización de proyectos de Agua, Drenaje, Pluvial, Gas, Telefonia y CFE",
  },
  {
    id: 5,
    title:
      "Factibilidad y Licencia de Uso de Suelo, Construcción, Edificación y Terminación de Obra",
  },
  {
    id: 6,
    title: "Licencias de Alcoholes",
  },
  {
    id: 7,
    title: "Permiso y Refrendo de Anuncios",
  },
  {
    id: 8,
    title: "Licencia de Funcionamiento Secretaria de Salud",
  },
  {
    id: 9,
    title: "Gestiones Instituto Registral y Catastral",
  },
  {
    id: 10,
    title:
      "Vo. Bo. INAH, INBA, S.C.T Bomberos y Protección Civil, Municipal y Estatal",
  },
  {
    id: 11,
    title:
      "CONAGUA Permiso de Construcción, Delimitación y Aprovechamiento de Zona Federal",
  },
];

type Props = {};

const Services = (props: Props) => {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        const element = scrollRef.current as HTMLDivElement;
        const maxScrollLeft = element.scrollWidth - element.clientWidth - 1;

        if (scrollDirection === 1 && element.scrollLeft >= maxScrollLeft) {
          setScrollDirection(-1);
        } else if (scrollDirection === -1 && element.scrollLeft === 0) {
          setScrollDirection(1);
        }

        element.scrollBy({
          top: 0,
          left: scrollDirection,
        });
      }
    };

    const interval = setInterval(() => {
      autoScroll();
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="services">
      <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Contamos con amplio catalogo de servicios
      </h1>

      <div className="p-auto m-auto flex flex-col">
        <div
          className="hide-scroll-bar flex overflow-x-scroll pb-10"
          ref={scrollRef}
        >
          <div className="flex flex-nowrap ">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="mr-4 inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-center align-middle shadow-md transition-shadow duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Permiso
            </h5> */}
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
