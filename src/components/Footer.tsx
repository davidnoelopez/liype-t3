import Link from "next/link";
import { useRouter } from "next/router";
import { LanguageSelector } from "./LanguageSelector";
import { defaultData } from "~/utils/assets/defaultData";

const Footer = () => {
  const { locale } = useRouter();

  const footerData = {
    copyright: [
      {
        text: "All Rights Reserved.",
        locale: "en-US",
      },
      {
        text: "Todos los derechos reservados.",
        locale: "es-MX",
      },
    ],
  };

  return (
    <footer className="bg-transparent">
      <div className=" mx-auto px-6 py-8">
        <hr className="mb-6 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center text-xs text-gray-500 sm:text-start">
            {`© Copyright ${new Date().getFullYear()}. ${
              footerData.copyright.filter((item) => item.locale === locale)[0]
                ?.text
            }`}
            <p>
              {`${locale === "es-MX" ? "Creado por: " : "Created by: "}`}
              <Link
                className="text-sky-600 hover:underline dark:text-sky-400"
                href="https://nogiistudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nogii Studio
              </Link>
            </p>
          </div>

          <div className="-mx-2 mt-3 flex items-center sm:mt-0">
            <Link
              href="/TERMINOS%20Y%20CONDICIONES%20LIYPE.pdf"
              target="_blank"
              className="mx-2 text-xs text-gray-500 transition-colors duration-300 hover:text-gray-500 hover:underline dark:hover:text-gray-300"
              aria-label="Terms and conditions"
            >
              {locale === "es-MX"
                ? "Términos y condiciones"
                : "Terms and conditions"}
            </Link>

            <Link
              href="/AVISO%20DE%20PRIVACIDAD%20LIYPE.pdf"
              target="_blank"
              className="mx-2 text-xs text-gray-500 transition-colors duration-300 hover:text-gray-500 hover:underline dark:hover:text-gray-300 md:mr-4"
              aria-label="Privacy Policy"
            >
              {locale === "es-MX" ? "Aviso de privacidad" : "Privacy Policy"}
            </Link>

            <div className="hidden md:flex md:flex-1 md:justify-end">
              <LanguageSelector languages={defaultData.languages} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
