import { useRouter } from "next/router";
import { ReactElement } from "react";
import { LocalizedText } from "~/types";
import Title from "~/components/Title";
import Contact from "./contact";
import Link from "next/link";
import { defaultData } from "~/utils/assets/defaultData";
import { NextSeo } from "next-seo";

interface Step {
  icon?: ReactElement;
  number?: string;
  description: LocalizedText[];
}

const TitleText: LocalizedText[] = [
  {
    locale: "es-MX",
    text: "Licencia de alcoholes",
  },
  {
    locale: "en-US",
    text: "Alcohol license",
  },
];

const StepsData: Step[] = [
  {
    number: "1",
    description: [
      {
        locale: "es-MX",
        text: "Asegúrate de tener la licencia de uso de suelo, construcción y edificación. (Podemos ayudarte a tramitarla)",
      },
      {
        locale: "en-US",
        text: "Make sure you have the land use, construction and building license. (We can help you process it)",
      },
    ],
  },
  {
    number: "2",
    description: [
      {
        locale: "es-MX",
        text: "Tener la última escritura de la propiedad y pago predial al corriente.",
      },
      {
        locale: "en-US",
        text: "Have the last deed of the property and current property tax payment.",
      },
    ],
  },
  {
    number: "3",
    description: [
      {
        locale: "es-MX",
        text: "Revisita la factibilidad de giro para tu negocio.",
      },
      {
        locale: "en-US",
        text: "Review the feasibility of your business.",
      },
    ],
  },
];

const Meta = () => {
  const metaTagsMX = {
    siteName: "Licencias y Permisos - Alcoholes",
    title: "Licencia de Alcoholes en Monterrey | Tramite Rápido y Seguro",
    description:
      "Obtén tu licencia de alcohol en Monterrey de forma rápida y sin complicaciones. Nos encargamos de todo el proceso, garantizando un trámite seguro y eficiente.",
    image: "https://licenciasypermisos.mx/meta-image.png",
    url: "https://licenciasypermisos.mx/licencias-alcohol-monterrey",
  };
  const { siteName, title, description, url, image } = metaTagsMX;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      themeColor="#16274E"
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            width: 500,
            height: 150,
            alt: title,
          },
        ],
        locale: "es_MX",
        site_name: siteName,
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.jpg",
          sizes: "180x180",
        },
        {
          rel: "icon",
          href: "/icon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          href: "/icon-16x16.png",
          sizes: "16x16",
        },
      ]}
    />
  );
};

const AlcholesPage = () => {
  const { locale } = useRouter();

  return (
    <>
      <Meta />
      <div className="container mx-auto pb-10">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-8 px-8 lg:w-1/2">
            <div className="pt-16 sm:pt-10">
              <Title
                title={
                  TitleText.filter((t) => t.locale === locale)[0]
                    ?.text as string
                }
                align="start"
              />
              <div className="mx-6 mt-2 text-center text-lg font-normal text-gray-900 dark:text-gray-100">
                <p className="">
                  Tramita tu licencia de alcoholes en el estado de Nuevo León
                  con nosotros y ahórrate tiempo en largas filas y evita
                  reiniciar el trámite por inexperiencia.
                </p>
                <p className="pt-4">
                  En licencias y permisos contamos con más de 30 años de
                  experiencia tramitando licencia de alcoholes para todo giro
                  desde restaurantes hasta centros de convenciones.
                </p>
                <div className="pt-8">
                  <Link
                    href="#contact"
                    scroll={false}
                    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-md w-fit rounded-md bg-blue-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {
                      defaultData.contactButtonText.filter(
                        (t) => t.locale === locale
                      )[0]?.text
                    }
                  </Link>
                </div>
              </div>
            </div>
            <Title
              title={
                "3 pasos indispensables antes de obtener tu licencia de alcoholes:"
              }
              align="start"
            />
            {StepsData.map((client, index) => (
              <div
                className="mx-8 flex place-items-center content-center justify-start space-x-4"
                key={index}
              >
                <div>
                  <span className="flex aspect-square h-14 w-auto place-content-center place-items-center rounded-full bg-blue-200 p-2 text-blue-800 dark:bg-blue-800 dark:text-white">
                    <p className="text-2xl font-bold">{client.number}</p>
                  </span>
                </div>
                <div className="md:mx-4">
                  <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                    {
                      client.description.filter((t) => t.locale === locale)[0]
                        ?.text
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            id="contact"
            className="flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center"
          >
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlcholesPage;
