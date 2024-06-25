import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuItemStyle,
  navigationMenuTriggerStyle,
} from "~/components/navigation-menu";
import { cn } from "~/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated" && window.location.pathname !== "/") {
      if (window.location.pathname !== "/dashboard/signin") {
        window.location.href = "/dashboard/signin";
      }
    }
  }, [status]);

  return (
    <div
      className={cn(
        "flex h-screen w-screen flex-col text-slate-800 dark:text-slate-200 sm:flex-row",
        fontSans.variable
      )}
    >
      {/* sidebar */}
      {status === "authenticated" && (
        <>
          <div
            id="sideBar"
            className="sticky left-0 hidden h-screen min-w-fit max-w-xs flex-col bg-slate-400/70 dark:bg-slate-600/70 sm:flex "
          >
            <div className="flex flex-grow flex-col overflow-y-auto pb-4 pt-5">
              <div className="flex flex-shrink-0 items-center px-4">
                <Image
                  className="h-8 w-auto"
                  src="/assets/logoLIYPE_light.png"
                  alt="Logo"
                  width={132}
                  height={40}
                  quality={100}
                />
              </div>
              <NavigationMenu
                orientation="vertical"
                defaultValue="leads"
                className="mt-4 w-full max-w-full items-start"
              >
                <NavigationMenuList className="w-full flex-col space-x-0 space-y-2">
                  <NavigationMenuItem
                    value="leads"
                    className={navigationMenuItemStyle()}
                  >
                    <Link href="/dashboard/leads" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        active={window.location.pathname === "/dashboard/leads"}
                      >
                        Leads
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={navigationMenuItemStyle()}>
                    <Link href="/dashboard/quotes" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Cotizaciones
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex flex-shrink-0 p-2">
              <a
                href="#"
                className="group block w-full flex-shrink-0 rounded-md px-2 py-1 transition-all hover:backdrop-brightness-90"
              >
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user.image as string} />
                    <AvatarFallback className="bg-slate-500/50 dark:bg-slate-500/50">
                      {session?.user.name
                        ?.split(" ")
                        .map((name) => name[0]?.toUpperCase())
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium group-hover:text-gray-900">
                      {session?.user.name}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="sticky flex w-full items-center justify-between bg-slate-400/70 p-4 dark:bg-slate-600/70 sm:hidden">
            <Image
              className="h-8 w-auto"
              src="/assets/logoLIYPE_light.png"
              alt="Logo"
              width={132}
              height={40}
              quality={100}
            />
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session?.user.image as string} />
                  <AvatarFallback className="bg-slate-500/50 dark:bg-slate-500/50">
                    {session?.user.name
                      ?.split(" ")
                      .map((name) => name[0]?.toUpperCase())
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
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
                    className="h-8 w-auto"
                    src="/assets/logoLIYPE_light.png"
                    alt="Logo"
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
                    <Link
                      href="/dashboard/leads"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-10 dark:hover:text-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                      scroll={false}
                    >
                      Clientes
                    </Link>
                    <Link
                      href="/dashboard/quotes"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:bg-opacity-10 dark:hover:text-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                      scroll={false}
                    >
                      Cotizaciones
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </>
      )}
      {/* main */}
      <main className="w-full overflow-scroll">{children}</main>
    </div>
  );
};

export default DashboardLayout;
