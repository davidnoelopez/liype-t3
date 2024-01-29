import { useSession } from "next-auth/react";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
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
        "flex h-screen w-screen text-slate-800 dark:text-slate-200",
        fontSans.variable
      )}
    >
      {/* sidebar */}
      {status === "authenticated" && (
        <div
          id="sideBar"
          className="sticky left-0 flex h-screen min-w-fit max-w-xs flex-col bg-slate-400/70 dark:bg-slate-600/70"
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
              defaultValue="clients"
              className="mt-4 w-full max-w-full items-start"
            >
              <NavigationMenuList className="w-full flex-col space-x-0 space-y-2">
                <NavigationMenuItem
                  value="clients"
                  className={navigationMenuItemStyle()}
                >
                  <Link href="/dashboard/clients" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={window.location.pathname === "/dashboard/clients"}
                    >
                      Clientes
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
      )}
      {/* main */}
      <main className="w-full overflow-scroll">{children}</main>
    </div>
  );
};

export default DashboardLayout;
