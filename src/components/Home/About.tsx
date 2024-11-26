import { useRouter } from "next/router";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { ImHammer2 } from "react-icons/im";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import Title from "../Title";

const About = () => {
  const { locale } = useRouter();
  const aboutData = {
    title: [
      {
        locale: "es-MX",
        text: "Acerca de nosotros",
      },
      {
        locale: "en-US",
        text: "About Us",
      },
    ],
    description: [
      {
        locale: "es-MX",
        text: "En nuestros más de 30 años de experiencia hemos gestionado los permisos de inicio a fin de:",
      },
      {
        locale: "en-US",
        text: "In our more than 30 years of experience we have managed the permits from start to finish of:",
      },
    ],
    commerce: {
      title: [
        {
          locale: "es-MX",
          text: "+30 Centros Comerciales",
        },
        {
          locale: "en-US",
          text: "+30 Shopping Centers",
        },
      ],
      description: [
        {
          locale: "es-MX",
          text: "Más de 30 Centros Comerciales a nivel nacional, trabajando junto cadenas como Walmart, HEB, Soriana.",
        },
        {
          locale: "en-US",
          text: "More than 30 Shopping Centers nationwide, working with chains such as Walmart, HEB, Soriana.",
        },
      ],
    },
    restaurants: {
      title: [
        {
          locale: "es-MX",
          text: "+50 Restaurantes",
        },
        {
          locale: "en-US",
          text: "+50 Restaurants",
        },
      ],
      description: [
        {
          locale: "es-MX",
          text: "Más de 50 Restaurantes a nivel nacional, trabajando junto cadenas como Las Alitas, Tacotote, entre otros.",
        },
        {
          locale: "en-US",
          text: "More than 50 Restaurants nationwide, working with chains such as Las Alitas, Tacotote, among others.",
        },
      ],
    },
    people: {
      title: [
        {
          locale: "es-MX",
          text: "Cientos de personas",
        },
        {
          locale: "en-US",
          text: "Hundreds of people",
        },
      ],
      description: [
        {
          locale: "es-MX",
          text: "Cientos de clientes, tanto particulares como instituciones como hospitales, bodegas industriales y residencias, han confiado en nosotros.",
        },
        {
          locale: "en-US",
          text: "Hundreds of clients, both individuals and institutions such as hospitals, industrial warehouses and residences, have trusted us",
        },
      ],
    },
    valuesTitle: [
      {
        locale: "es-MX",
        text: "Nuestros valores",
      },
      {
        locale: "en-US",
        text: "Our values",
      },
    ],
    values: [
      {
        title: [
          {
            locale: "es-MX",
            text: "Resolución",
          },
          {
            locale: "en-US",
            text: "Resolution",
          },
        ],
        description: [
          {
            locale: "es-MX",
            text: "Resolvemos ante cualquier multa o requerimiento de la autoridad municipal, estatal o federal haciendo que nuestro cliente tenga satisfacción total por nuestros servicios.",
          },
          {
            locale: "en-US",
            text: "We resolve any fine or requirement of the municipal, state or federal authority, making our client have total satisfaction for our services.",
          },
        ],
        icon: <ImHammer2 className="h-6 w-6" />,
      },
      {
        title: [
          {
            locale: "es-MX",
            text: "Transparencia",
          },
          {
            locale: "en-US",
            text: "Transparency",
          },
        ],
        description: [
          {
            locale: "es-MX",
            text: "La confianza de nuestros clientes ha sido fundamentada por la contante comunicación entre nuestro equipo y las personas involucradas en la gestoría, ahorrándose tiempo en filas, documentación errónea y multas por malas prácticas.",
          },
          {
            locale: "en-US",
            text: "The trust of our clients has been based on the constant communication between our team and the people involved in the management, saving time in lines, incorrect documentation and fines for bad practices.",
          },
        ],
        icon: <PiFileMagnifyingGlassFill className="h-6 w-6" />,
      },
      {
        title: [
          {
            locale: "es-MX",
            text: "Excelencia",
          },
          {
            locale: "en-US",
            text: "Excellence",
          },
        ],
        description: [
          {
            locale: "es-MX",
            text: "Sabemos de la importancia del tiempo, es por ello por lo que se asigna un Director de Proyectos para que usted pueda trabajar en sus actividades mientras nosotros transmitimos las licencias y los permisos, cuadrando los tiempos con sus demás proveedores para la entrega del proyecto en tiempo y forma.",
          },
          {
            locale: "en-US",
            text: "We know the importance of time, that is why a Project Director is assigned so that you can work on your activities while we transmit the licenses and permits, matching the times with your other suppliers for the delivery of the project on time and form.",
          },
        ],
        icon: <FaMedal className="h-6 w-6" />,
      },
    ],
  };
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-lg px-4 pb-8">
        <div className="mb-12">
          <Title
            title={
              aboutData.title.filter((item) => item.locale === locale)[0]
                ?.text as string
            }
          />
        </div>
        <p className="mx-8 mb-8 text-center text-xl font-medium text-gray-800 dark:text-gray-200 md:text-2xl lg:mb-16">
          {
            aboutData.description.filter((item) => item.locale === locale)[0]
              ?.text
          }
        </p>
        <div className="space-y-8">
          <div className="grid grid-cols-1 items-center gap-4 space-y-4 md:grid-cols-3">
            <DataCard
              title={
                aboutData.commerce.title.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              description={
                aboutData.commerce.description.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              icon={<GiShoppingBag className="h-10 w-10" />}
            />
            <DataCard
              title={
                aboutData.restaurants.title.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              description={
                aboutData.restaurants.description.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              icon={<IoIosRestaurant className="h-10 w-10" />}
            />
            <DataCard
              title={
                aboutData.people.title.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              description={
                aboutData.people.description.filter(
                  (item) => item.locale === locale
                )[0]?.text || ""
              }
              icon={<PiHandshakeFill className="h-10 w-10" />}
            />
          </div>
        </div>
        <div className="mx-20 mt-16 h-0.5 bg-slate-600/50 dark:bg-slate-300/50" />
        <div className="flex flex-col justify-center">
          <div className="mb-12">
            <Title
              title={
                aboutData.valuesTitle.filter(
                  (item) => item.locale === locale
                )[0]?.text as string
              }
            />
          </div>
          <div className="mx-4 flex max-w-lg items-center justify-center sm:mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {aboutData.values.map((value, index) => (
                <div className="grid grid-cols-1 items-center" key={index}>
                  <div className="flex items-center justify-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-200 to-blue-400 p-2 text-blue-800 dark:from-blue-800 dark:to-blue-600 dark:text-white">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                      {value.title.filter((item) => item.locale === locale)[0]
                        ?.text || ""}
                    </h3>
                  </div>
                  <div className="ml-20 flex flex-col items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      {value.description.filter(
                        (item) => item.locale === locale
                      )[0]?.text || ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type DataCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const DataCard = ({ title, description, icon }: DataCardProps) => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-200 to-blue-400 p-2 text-blue-800 dark:from-blue-800 dark:to-blue-600 dark:text-white">
        {icon}
      </div>
      <h3 className="text-center text-2xl font-semibold capitalize text-gray-700 dark:text-white">
        {title}
      </h3>
      <p className="text-center text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default About;
