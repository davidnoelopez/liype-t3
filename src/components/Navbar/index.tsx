import React, { useEffect, useState } from "react";
import { LanguageSelector } from "../LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DefaultData } from "~/types";
import { useThemeState } from "../ThemeStateProvider";

const navigation = [
  { name: "Servicios", href: "#services" },
  { name: "Clientes", href: "#clients" },
  { name: "Contacto", href: "/contact" },
];

interface Props {
  defaultData: DefaultData;
}

const index = ({ defaultData }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname, locale } = useRouter();
  const { theme } = useThemeState();
  const logo =
    theme === "dark"
      ? "/assets/logoLIYPE_light.png"
      : "/assets/logoLIYPE_dark.png";

  useEffect(() => {
    setMobileMenuOpen(false);
    return;
  }, [locale]);

  const generateUrl = (href: string) => {
    return pathname !== "/" && href[0] === "#" ? "/" + href : href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav
        className="flex items-center justify-between bg-slate-100/50 px-6 backdrop-blur-lg dark:bg-slate-900/50 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link
            href={pathname !== "/" ? "/" : "#"}
            className="m-1.5 h-auto w-36 p-1.5"
            scroll={false}
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="sr-only">Licencias y Permisos</span>
            <Image
              src={logo}
              alt="Licencias y Permisos"
              width={132}
              height={40}
              quality={100}
            />
          </Link>
        </div>
        <div className="flex md:hidden">
          <Link
            href="/contact"
            className="mr-4 rounded-md bg-blue-800 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {
              defaultData.contactButtonText.filter(
                (t) => t.locale === locale
              )[0]?.text
            }
          </Link>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={generateUrl(item.href)}
              className="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-10 dark:hover:text-gray-100"
              scroll={false}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <LanguageSelector languages={defaultData.languages} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="relative z-50 md:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 min-h-full w-full bg-white px-6 backdrop-blur-lg dark:bg-gray-900/80 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="m-1.5 h-auto w-36 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
              scroll={false}
            >
              <span className="sr-only">Licencias y Permisos</span>
              <Image
                src={logo}
                alt="Licencias y Permisos"
                width={132}
                height={40}
                quality={100}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col items-end space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={generateUrl(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-10 dark:hover:text-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="py-6">
                  <LanguageSelector languages={defaultData.languages} />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default index;
