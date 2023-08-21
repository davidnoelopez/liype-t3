import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Language } from "~/types";

interface FlagIconProps {
  countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
  return (
    <span
      className={`fi fis botext-2xl mr-2 inline-block h-6 w-6 rounded-full bg-white text-2xl fi-${countryCode}`}
    />
  );
}

const LANGUAGE_SELECTOR_ID = "language-selector";

interface Props {
  languages: Language[];
}

export const LanguageSelector = ({ languages }: Props) => {
  const { locale, asPath } = useRouter();
  const defaultLanguage = {
    key: "mx",
    name: "Español",
    locale: "es-MX",
  };
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.filter((l) => l.locale === locale)[0] || defaultLanguage
  );

  useEffect(() => {
    setSelectedLanguage(
      languages.filter((l) => l.locale === locale)[0] || defaultLanguage
    );
    return;
  }, [locale, languages]);

  if (!selectedLanguage) {
    return null;
  }

  return (
    <>
      <div className="z-40 flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="inline-flex w-36 justify-center gap-x-1.5 rounded-md bg-slate-200/60 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-gray-50/80 dark:bg-slate-700/80 dark:text-white dark:hover:bg-gray-700"
              id={LANGUAGE_SELECTOR_ID}
            >
              <FlagIcon countryCode={selectedLanguage.key} />
              {selectedLanguage.name}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            aria-labelledby="language-selector"
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-auto origin-top-right rounded-md bg-slate-100/50 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm focus:outline-none dark:bg-slate-700/50 md:-top-24">
              <div className="">
                {languages.map((language) => {
                  return (
                    <Menu.Item key={language.key}>
                      <Link
                        href={asPath}
                        locale={language.locale}
                        className={`${
                          selectedLanguage.key === language.key
                            ? "bg-blue-100 font-semibold text-gray-900 dark:bg-blue-800 dark:text-white"
                            : "text-gray-700"
                        } inline-flex w-full items-center rounded-md px-4 py-2 text-left text-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600/80`}
                        role="menuitem"
                      >
                        <FlagIcon countryCode={language.key} />
                        <span className="items-center truncate text-sm">
                          {language.name}
                        </span>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
