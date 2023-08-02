import { useRouter } from "next/router";
import { LocalizedText } from "~/types";

// const contactData: {
//   address: string;
//   phone: string;
//   email: string;
//   social: {
//     name: string;
//     url: string;
//   }[];
// } = {
//   address:
//     "Torre Avalanz\nAv. Batallón de San Patricio No. 109\nCol. Zona Valle Oriente, San Pedro Garza García,\nNuevo León, México\nC.P: 66278",
//   phone: "+52 81 2107 7484",
//   email: "contacto@liype.com",
// };

const ContactInfo: {
  title: LocalizedText[];
  description: LocalizedText[];
  formEmail: LocalizedText[];
  formSubject: LocalizedText[];
  formSubjectPlaceholder: LocalizedText[];
  formMessage: LocalizedText[];
  formMessagePlaceholder: LocalizedText[];
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
  formEmail: [
    {
      locale: "es-MX",
      text: "Tu correo",
    },
    {
      locale: "en-US",
      text: "Your email",
    },
  ],
  formSubject: [
    {
      locale: "es-MX",
      text: "Asunto",
    },
    {
      locale: "en-US",
      text: "Subject",
    },
  ],
  formSubjectPlaceholder: [
    {
      locale: "es-MX",
      text: "Déjanos saber como podemos ayudarte",
    },
    {
      locale: "en-US",
      text: "Let us know how we can help you",
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
};

const Contact = () => {
  const { locale } = useRouter();

  return (
    <section className="h-max pt-20 md:px-8">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {ContactInfo.title.filter((item) => item.locale === locale)[0]?.text}
        </h2>
        <p className="mb-8 text-center font-normal text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          {
            ContactInfo.description.filter((item) => item.locale === locale)[0]
              ?.text
          }
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {
                ContactInfo.formEmail.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="daniel@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {
                ContactInfo.formSubject.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder={
                ContactInfo.formSubjectPlaceholder.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder={
                ContactInfo.formMessagePlaceholder.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
