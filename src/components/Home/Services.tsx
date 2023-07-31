import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { type ReactElement } from "react";
import { BiStore } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiBeerBottleFill } from "react-icons/pi";
import { RiGovernmentLine } from "react-icons/ri";
import { LocalizedText } from "~/types";
import Title from "../Title";

interface Service {
  id: number;
  title: LocalizedText[];
  desription?: LocalizedText[];
  icon?: ReactElement;
}

const titles: {
  name: string;
  text: LocalizedText[];
}[] = [
  {
    name: "services",
    text: [
      {
        locale: "es-MX",
        text: "Contamos con amplio catalogo de servicios",
      },
      {
        locale: "en-US",
        text: "We have a wide catalog of services",
      },
    ],
  },
  {
    name: "otherServices",
    text: [
      {
        locale: "es-MX",
        text: "Otros servicios",
      },
      {
        locale: "en-US",
        text: "Other services",
      },
    ],
  },
];

const MainServices: Service[] = [
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
        text:
          "Obtén tu licencia de alcoholes " +
          new Date().getFullYear() +
          " para tu restaurante, bar o expendio.",
      },
      {
        locale: "en-US",
        text:
          "Obtain your alcohol license in " +
          new Date().getFullYear() +
          " for your restaurant, bar, or liquor store.",
      },
    ],
    icon: <PiBeerBottleFill className="h-6 w-6" />,
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
        text:
          "Obtén tu licencia de uso comercial " +
          new Date().getFullYear() +
          " ópera en la regularidad elevando el valor de tu propiedad.",
      },
      {
        locale: "en-US",
        text:
          "Get your commercial usage license in " +
          new Date().getFullYear() +
          " and operate with compliance, increasing the value of your property.",
      },
    ],
    icon: <BiStore className="h-6 w-6" />,
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
        text: "Obtén tu licencia sanitaria y ópera tu consultorio médico, clínica y hospital con todos los lineamientos de COFEPRIS.",
      },
      {
        locale: "en-US",
        text: "Get your health license and operate your medical office, clinic, and hospital with all COFEPRIS guidelines.",
      },
    ],
    icon: <MdHealthAndSafety className="h-6 w-6" />,
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
        text: "Gestionamos todos tus trámites gubernamentales municipales, estatales y federales.",
      },
      {
        locale: "en-US",
        text: "We handle all your municipal, state, and federal government procedures.",
      },
    ],
    icon: <RiGovernmentLine className="h-6 w-6" />,
  },
];

const OtherServices: Service[] = [
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
        text: "Permiso y Refrendo de Anuncios",
      },
      {
        locale: "en-US",
        text: "Permit and Renewal of Advertisements",
      },
    ],
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

const Services = () => {
  const { locale } = useRouter();
  const enterLeft: Variants = {
    hide: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0,
        type: "spring",
        duration: 1,
        damping: 20,
      },
    },
  };

  const enterRight: Variants = {
    hide: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0,
        type: "spring",
        duration: 1,
        damping: 20,
      },
    },
  };

  const enterTop: Variants = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        type: "spring",
        duration: 1,
        damping: 20,
      },
    },
  };

  return (
    <section id="services" className="pb-10 pt-8 md:pt-12">
      <Title
        title={
          titles
            .filter((t) => t.name === "services")[0]
            ?.text.filter((t) => t.locale === locale)[0]?.text as string
        }
      />
      <div className="mx-auto mt-10 max-w-2xl overflow-hidden sm:mt-14 lg:mt-16 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 px-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {MainServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative pl-16"
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={index % 2 === 0 ? enterLeft : enterRight}
            >
              <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-100 sm:text-2xl">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-white">
                  {service.icon}
                </div>
                {service.title.filter((t) => t.locale === locale)[0]?.text}
              </dt>
              <dd className="mt-2 text-lg leading-7 text-gray-600 dark:text-gray-300">
                {
                  service.desription?.filter((t) => t.locale === locale)[0]
                    ?.text
                }
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
      <Title
        title={
          titles
            .filter((t) => t.name === "otherServices")[0]
            ?.text.filter((t) => t.locale === locale)[0]?.text as string
        }
      />
      <div className="mx-auto mt-6 flex max-w-2xl justify-center overflow-hidden pb-10 sm:mt-8 lg:mt-10 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 px-10 align-middle sm:grid-cols-2 sm:px-4 lg:max-w-none lg:grid-cols-3">
          {OtherServices.map((service, index) => (
            <>
              <motion.div
                key={index}
                className="relative lg:hidden"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={index % 2 === 0 ? enterLeft : enterRight}
              >
                <dt className="flex h-full w-full cursor-default items-center rounded-lg border border-slate-400/30 bg-slate-200/50 p-4 text-center text-lg font-medium leading-6 text-gray-600 dark:border-slate-400/20 dark:bg-slate-900/20 dark:text-gray-300">
                  {service.title.filter((t) => t.locale === locale)[0]?.text}
                </dt>
              </motion.div>
              <motion.div
                key={index}
                className="relative hidden lg:block"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={enterTop}
              >
                <dt className="flex h-full w-full cursor-default items-center rounded-lg border border-slate-400/30 bg-slate-200/50 p-4 text-center text-lg font-medium leading-6 text-gray-600 dark:border-slate-400/20 dark:bg-slate-900/20 dark:text-gray-300">
                  {service.title.filter((t) => t.locale === locale)[0]?.text}
                </dt>
              </motion.div>
            </>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Services;
