import { DefaultData } from "~/types";

export const defaultData: DefaultData = {
  languages: [
    {
      key: "mx",
      name: "Español",
      locale: "es-MX",
    },
    {
      key: "us",
      name: "English",
      locale: "en-US",
    },
  ],
  brandName: [
    {
      locale: "es-MX",
      text: "Licencias y Permisos",
    },
    {
      locale: "en-US",
      text: "Licencias y Permisos",
    },
  ],
  titles: [
    {
      locale: "es-MX",
      text: "El mejor gestor de permisos en México.",
    },
    {
      locale: "en-US",
      text: "The Best Permits Manager in Mexico.",
    },
  ],
  serviceDescription: [
    {
      locale: "es-MX",
      text: "Somos el grupo de gestores de trámites y permisos más confiable y veloz en México. Contamos con más de 30 años de experiencia. Obtén tus permisos de manera ágil, segura y sin complicaciones.",
    },
    {
      locale: "en-US",
      text: "We are the most reliable and fast group of administrative managers for procedures and permits in Mexico. We have over 30 years of experience. Obtain your permits quickly, securely, and hassle-free.",
    },
  ],
  callToAction: [
    {
      locale: "es-MX",
      text: "Contáctanos para recibir sin costo una auditoría del estatus real de tu negocio.",
    },
    {
      locale: "en-US",
      text: "Contact us to receive a free audit of the actual status of your business.",
    },
  ],
  contactButtonText: [
    {
      locale: "es-MX",
      text: "Contáctanos",
    },
    {
      locale: "en-US",
      text: "Contact us",
    },
  ],
};

export const metaTagsMX = {
  siteName: "Licencias y Permisos",
  title: "Licencias y Permisos - Gestores de trámites",
  description:
    "Grupo de gestores de trámites y permisos más confiable y veloz en México. Obtén tus permisos y licencias de manera ágil, segura y sin complicaciones.",
  image: "https://licenciasypermisos.mx/meta-image.png",
  url: "https://licenciasypermisos.mx",
};

export const metaTagsUS = {
  siteName: "Licencias y Permisos",
  title: "Licencias y Permisos - Permits Manager",
  description:
    "We are the most reliable and fast group of administrative managers for procedures and permits in Mexico. Obtain your permits quickly, securely, and hassle-free.",
  image: "https://licenciasypermisos.mx/meta-image.png",
  url: "https://licenciasypermisos.mx/en-US",
};
