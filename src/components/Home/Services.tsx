"use client";
import { Carousel } from "flowbite-react";

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
  return (
    <div id="services">
      <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Contamos con amplio catalogo de servicios
      </h1>
      <div className="grid grid-cols-2 gap-4 pb-20 md:grid-cols-4 lg:grid-cols-6">
        {ServicesData.map((service) => (
          <a
            key={service.id}
            className="block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Permiso
            </h5> */}
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {service.title}
            </p>
          </a>
        ))}
      </div>
      <div className="h-52 w-56">
        <Carousel>
          {ServicesData.map((service) => (
            <div key={service.id} className="w-full">
              <a className="block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Permiso
            </h5> */}
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {service.title}
                </p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
