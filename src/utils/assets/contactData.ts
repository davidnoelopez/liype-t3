import { LocalizedText } from "~/types";

export const contactData: {
  address: string;
  phone: string;
  email: string;
} = {
  address:
    "Torre Avalanz\nAv. Batallón de San Patricio No. 109\nCol. Zona Valle Oriente, San Pedro Garza García,\nNuevo León, México\nC.P: 66278",
  phone: "+52 81 2107 7484",
  email: "contacto@liype.com",
};

export const ContactInfo: {
  title: LocalizedText[];
  description: LocalizedText[];
  formName: LocalizedText[];
  formNamePlaceholder: LocalizedText[];
  formEmail: LocalizedText[];
  formPhone: LocalizedText[];
  formCompany: LocalizedText[];
  formCompanyPlaceholder: LocalizedText[];
  formRole: LocalizedText[];
  formRolePlaceholder: LocalizedText[];
  formCity: LocalizedText[];
  formState: LocalizedText[];
  formMessage: LocalizedText[];
  formMessagePlaceholder: LocalizedText[];
  sendMessageButton: LocalizedText[];
} = {
  title: [
    {
      locale: "es-MX",
      text: "Contactanos",
    },
    {
      locale: "en-US",
      text: "Contact Us",
    },
  ],
  description: [
    {
      locale: "es-MX",
      text: "Contáctanos para recibir sin costo una auditoria del estatus real de tu negocio y asi poder regularizarlo. Nosotros lo tramitamos por ti.",
    },
    {
      locale: "en-US",
      text: "Contact us to receive a free audit of the real status of your business and thus be able to regularize it. We process it for you.",
    },
  ],
  formName: [
    {
      locale: "es-MX",
      text: "Nombre",
    },
    {
      locale: "en-US",
      text: "Name",
    },
  ],
  formNamePlaceholder: [
    {
      locale: "es-MX",
      text: "Tu nombre",
    },
    {
      locale: "en-US",
      text: "Your name",
    },
  ],
  formEmail: [
    {
      locale: "es-MX",
      text: "Correo",
    },
    {
      locale: "en-US",
      text: "Email",
    },
  ],
  formPhone: [
    {
      locale: "es-MX",
      text: "Teléfono",
    },
    {
      locale: "en-US",
      text: "Phone",
    },
  ],
  formCompany: [
    {
      locale: "es-MX",
      text: "Compañia",
    },
    {
      locale: "en-US",
      text: "Company",
    },
  ],
  formCompanyPlaceholder: [
    {
      locale: "es-MX",
      text: "Nombre de la compañia",
    },
    {
      locale: "en-US",
      text: "Company name",
    },
  ],
  formRole: [
    {
      locale: "es-MX",
      text: "Puesto",
    },
    {
      locale: "en-US",
      text: "Role",
    },
  ],
  formRolePlaceholder: [
    {
      locale: "es-MX",
      text: "Puesto en la compañia",
    },
    {
      locale: "en-US",
      text: "Role in the company",
    },
  ],
  formCity: [
    {
      locale: "es-MX",
      text: "Ciudad",
    },
    {
      locale: "en-US",
      text: "City",
    },
  ],
  formState: [
    {
      locale: "es-MX",
      text: "Estado",
    },
    {
      locale: "en-US",
      text: "State",
    },
  ],
  formMessage: [
    {
      locale: "es-MX",
      text: "Tu mensaje",
    },
    {
      locale: "en-US",
      text: "Your message",
    },
  ],
  formMessagePlaceholder: [
    {
      locale: "es-MX",
      text: "Describe brevemente como podemos ayudar a tu negocio.",
    },
    {
      locale: "en-US",
      text: "Briefly describe how we can help your business.",
    },
  ],
  sendMessageButton: [
    {
      locale: "es-MX",
      text: "Enviar mensaje",
    },
    {
      locale: "en-US",
      text: "Send message",
    },
  ],
};
