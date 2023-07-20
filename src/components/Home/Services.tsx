import { useEffect, useRef, useState } from "react";
import { LocalizedText } from "~/types";
import { useRouter } from "next/router";

interface Service {
  id: number;
  title: LocalizedText[];
  desription?: LocalizedText[];
}
const mainServices: Service[] = [
  {
    id: 1,
    title: [
      {
        locale: "es-MX",
        text: "Licencia de Alcoholes",
      },
      {
        locale: "en-US",
        text: "Alcohol Licenses",
      },
    ],
    desription: [
      {
        locale: "es-MX",
        text: "Obtención y gestoria de licencia de venta de alcohol.",
      },
      {
        locale: "en-US",
        text: "Obtaining and management of alcohol sales license.",
      },
    ],
  },
  {
    id: 2,
    title: [
      {
        locale: "es-MX",
        text: "Licencia de uso comercial",
      },
      {
        locale: "en-US",
        text: "Commercial use license",
      },
    ],
    desription: [
      {
        locale: "es-MX",
        text: "Obtención y gestoria de licencia de uso comercial.",
      },
      {
        locale: "en-US",
        text: "Obtaining and management of commercial use license.",
      },
    ],
  },
  {
    id: 3,
    title: [
      {
        locale: "es-MX",
        text: "Licencias sanitarias",
      },
      {
        locale: "en-US",
        text: "Health licenses",
      },
    ],
    desription: [
      {
        locale: "es-MX",
        text: "Obtención y gestoria de licencia sanitaria.",
      },
      {
        locale: "en-US",
        text: "Obtaining and management of health license.",
      },
    ],
  },
  {
    id: 4,
    title: [
      {
        locale: "es-MX",
        text: "Gestoría gubernamental general",
      },
      {
        locale: "en-US",
        text: "General government management",
      },
    ],
    desription: [
      {
        locale: "es-MX",
        text: "Gestoria de trámites gubernamentales.",
      },
      {
        locale: "en-US",
        text: "Government procedures management.",
      },
    ],
  },
];

const ServicesData: Service[] = [
  {
    id: 1,
    title: [
      {
        locale: "es-MX",
        text: "Levantamientos Topográficos, Factibilidad para Fraccionar y Urbanizar el Suelo",
      },
      {
        locale: "en-US",
        text: "Topographic Surveys, Feasibility for Subdivision and Urbanization of Land",
      },
    ],
  },
  {
    id: 2,
    title: [
      {
        locale: "es-MX",
        text: "Permiso para Desmonte y Movimiento de Tierras, Tala, Poda y Transplante de Árboles",
      },
      {
        locale: "en-US",
        text: "Permit for Clearing and Earthmoving, Logging, Pruning, and Tree Transplantation",
      },
    ],
  },
  {
    id: 3,
    title: [
      {
        locale: "es-MX",
        text: "Subdivisiones, Parcelaciones, Relotificaciónes, Fusiones y Régimen en Condominio",
      },
      {
        locale: "en-US",
        text: "Subdivisions, Parcellations, Relocations, Mergers, and Condominium Regime",
      },
    ],
  },
  {
    id: 4,
    title: [
      {
        locale: "es-MX",
        text: "Factibilidad y Autorización de proyectos de Agua, Drenaje, Pluvial, Gas, Telefonia y CFE",
      },
      {
        locale: "en-US",
        text: "Feasibility and Authorization of Water, Drainage, Sewer, Gas, Telephone, and CFE Projects",
      },
    ],
  },
  {
    id: 5,
    title: [
      {
        locale: "es-MX",
        text: "Factibilidad y Licencia de Uso de Suelo, Construcción, Edificación y Terminación de Obra",
      },
      {
        locale: "en-US",
        text: "Feasibility and Land Use, Construction, Building, and Completion Permit",
      },
    ],
  },
  {
    id: 6,
    title: [
      {
        locale: "es-MX",
        text: "Licencias de Alcoholes",
      },
      {
        locale: "en-US",
        text: "Alcohol Licenses",
      },
    ],
  },
  {
    id: 7,
    title: [
      {
        locale: "es-MX",
        text: "Permiso y Refrendo de Anuncios",
      },
      {
        locale: "en-US",
        text: "Permit and Renewal of Advertisements",
      },
    ],
  },
  {
    id: 8,
    title: [
      {
        locale: "es-MX",
        text: "Licencia de Funcionamiento Secretaria de Salud",
      },
      {
        locale: "en-US",
        text: "Health Department Operating License",
      },
    ],
  },
  {
    id: 9,
    title: [
      {
        locale: "es-MX",
        text: "Gestiones Instituto Registral y Catastral",
      },
      {
        locale: "en-US",
        text: "Institute of Land and Cadastral Registry Procedures",
      },
    ],
  },
  {
    id: 10,
    title: [
      {
        locale: "es-MX",
        text: "Vo. Bo. INAH, INBA, S.C.T Bomberos y Protección Civil, Municipal y Estatal",
      },
      {
        locale: "en-US",
        text: "Approval from INAH, INBA, SCT, Firefighters, Civil Protection, Municipal and State Authorities",
      },
    ],
  },
  {
    id: 11,
    title: [
      {
        locale: "es-MX",
        text: "CONAGUA Permiso de Construcción, Delimitación y Aprovechamiento de Zona Federal",
      },
      {
        locale: "en-US",
        text: "CONAGUA Permit for Construction, Delimitation, and Utilization of Federal Zone",
      },
    ],
  },
];

type Props = {};

const Services = (props: Props) => {
  const { locale } = useRouter();

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
  }, [scrollDirection]);

  return (
    <div id="services">
      <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Contamos con amplio catalogo de servicios
      </h1>

      <div className="grid grid-cols-3 gap-4"></div>

      <div className="relative flex gap-4 overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4">
          {ServicesData.map(
            (service) =>
              service.id % 2 === 0 && (
                <div
                  key={service.id}
                  className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-center align-middle shadow-md transition-shadow duration-300 ease-in-out  hover:bg-gray-100 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
                    {service.title.filter((t) => t.locale === locale)[0]?.text}
                  </p>
                </div>
              )
          )}
        </div>
        <div
          aria-hidden="true"
          className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4"
        >
          {ServicesData.map(
            (service) =>
              service.id % 2 === 0 && (
                <div
                  key={service.id}
                  className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-center align-middle shadow-md transition-shadow duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
                    {service.title.filter((t) => t.locale === locale)[0]?.text}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="relative mt-6 flex gap-4 overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 [animation-direction:reverse]">
          {ServicesData.map(
            (service) =>
              service.id % 2 !== 0 && (
                <div
                  key={service.id}
                  className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-center align-middle shadow-md transition-shadow duration-300 ease-in-out  hover:bg-gray-100 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
                    {service.title.filter((t) => t.locale === locale)[0]?.text}
                  </p>
                </div>
              )
          )}
        </div>
        <div
          aria-hidden="true"
          className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 [animation-direction:reverse]"
        >
          {ServicesData.map(
            (service) =>
              service.id % 2 !== 0 && (
                <div
                  key={service.id}
                  className="inline-block h-48 w-48 max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-center align-middle shadow-md transition-shadow duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
                    {service.title.filter((t) => t.locale === locale)[0]?.text}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
