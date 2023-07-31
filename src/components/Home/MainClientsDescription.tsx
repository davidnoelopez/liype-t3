import { useRouter } from "next/router";
import { ReactElement } from "react";
import { BiUser } from "react-icons/bi";
import { BsFillHospitalFill } from "react-icons/bs";
import { IoRestaurantSharp } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";
import { LocalizedText } from "~/types";
import Title from "../Title";
import Image from "next/image";

interface Client {
  icon?: ReactElement;
  title: LocalizedText[];
  description: LocalizedText[];
}

const TitleText: LocalizedText[] = [
  {
    locale: "es-MX",
    text: "Nuestro Clientes",
  },
  {
    locale: "en-US",
    text: "Our Clients",
  },
];

const ClientsGeneralData: Client[] = [
  {
    icon: <BiUser className="h-6 w-6" />,
    title: [
      {
        locale: "es-MX",
        text: "Particulares",
      },
      {
        locale: "en-US",
        text: "Individuals",
      },
    ],
    description: [
      {
        locale: "es-MX",
        text: "Servicio de auditoria y gestoria ante todas las dependencias correspondientes para regular la construcción y gestiones del Instituto Regional y Catastral.",
      },
      {
        locale: "en-US",
        text: "Audit and management service before all the corresponding dependencies to regulate the construction and management of the Regional and Cadastre Institute.",
      },
    ],
  },
  {
    icon: <IoRestaurantSharp className="h-6 w-6" />,
    title: [
      {
        locale: "es-MX",
        text: "Regularización para Restaurantes",
      },
      {
        locale: "en-US",
        text: "Restaurants Regularization",
      },
    ],
    description: [
      {
        locale: "es-MX",
        text: "Gestionamos y auditamos los trámites ante las dependencias correspondientes para garantizar la completa regularización de su restaurante. Obtenga todos los permisos necesarios para operar legalmente desde el día uno. Nuestro equipo experto se encarga de agilizar los procesos, asegurando que su establecimiento cumpla con todas las normativas y estándares requeridos. ¡No pierda tiempo ni oportunidades, contáctenos y abra las puertas de su restaurante con total confianza y sin complicaciones legales!",
      },
      {
        locale: "en-US",
        text: "We manage and audit the procedures before the corresponding dependencies to guarantee the complete regularization of your restaurant. Obtain all the necessary permits to operate legally from day one. Our expert team is in charge of streamlining the processes, ensuring that your establishment complies with all the required regulations and standards. Don't waste time or opportunities, contact us and open the doors of your restaurant with total confidence and without legal complications!",
      },
    ],
  },
  {
    icon: <BsFillHospitalFill className="h-6 w-6" />,
    title: [
      {
        locale: "es-MX",
        text: "Hospitales y centros de salud",
      },
      {
        locale: "en-US",
        text: "Hospitals and health centers",
      },
    ],
    description: [
      {
        locale: "es-MX",
        text: "Nuestro servicio de auditoría y gestión especializado para hospitales asegura el cumplimiento normativo ante la Secretaría de Salud y la Comisión Federal para la Protección contra Riesgos Sanitarios. Garantizamos eficiencia operativa y altos estándares de calidad, permitiendo que su hospital opere con confianza y mejore la seguridad para sus pacientes. Simplifique procesos y cumpla con las exigencias regulatorias con nuestra solución integral.",
      },
      {
        locale: "en-US",
        text: "Our specialized audit and management service for hospitals ensures regulatory compliance before the Ministry of Health and the Federal Commission for the Protection against Sanitary Risks. We guarantee operational efficiency and high quality standards, allowing your hospital to operate with confidence and improve safety for your patients. Simplify processes and meet regulatory requirements with our comprehensive solution.",
      },
    ],
  },
  {
    icon: <LuConstruction className="h-6 w-6" />,
    title: [
      {
        locale: "es-MX",
        text: "Constructoras y desarrolladoras",
      },
      {
        locale: "en-US",
        text: "Construction and development companies",
      },
    ],
    description: [
      {
        locale: "es-MX",
        text: "Nuestro servicio optimiza la edificación y operación de su proyecto ante dependencias Municipales, Estatales y Federales. Obtenemos factibilidades, realizamos estudios y gestionamos licencias para su constructora. Simplifique trámites y asegure el cumplimiento. ¡Contáctenos ahora para una asesoría profesional a la medida!",
      },
      {
        locale: "en-US",
        text: "Our service optimizes the construction and operation of your project before Municipal, State and Federal dependencies. We obtain feasibility, conduct studies and manage licenses for your construction company. Simplify procedures and ensure compliance. Contact us now for professional advice tailored to your needs!",
      },
    ],
  },
];

const MainClientsDescription = () => {
  const { locale } = useRouter();

  return (
    <div className="container mx-auto pb-10">
      <div className="lg:flex lg:items-center">
        <div className="w-full space-y-12 lg:w-1/2 ">
          <div className="md:pl-8">
            <Title
              title={
                TitleText.filter((t) => t.locale === locale)[0]?.text as string
              }
              align="start"
            />
          </div>
          {ClientsGeneralData.map((client, index) => (
            <div className="md:-mx-4 md:flex md:items-start" key={index}>
              <span className="inline-block rounded-xl bg-blue-200 p-2 text-blue-800 dark:bg-blue-800 dark:text-white md:mx-4">
                {client.icon}
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                  {client.title.filter((t) => t.locale === locale)[0]?.text}
                </h3>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  {
                    client.description.filter((t) => t.locale === locale)[0]
                      ?.text
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <Image
            className="h-[28rem] w-[28rem] rounded-full object-cover xl:h-[34rem] xl:w-[34rem]"
            width={1360}
            height={1360}
            src="/assets/client-image.jpg"
            alt="Client Image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainClientsDescription;
