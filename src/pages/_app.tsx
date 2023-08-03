import { type Session } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "node_modules/flag-icons/css/flag-icons.min.css";
import { ThemeStateProvider } from "~/components/ThemeStateProvider";
import "~/styles/globals.css";
import { api } from "~/utils/api";
import Layout from "./layout";
import { Toaster } from "react-hot-toast";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeStateProvider>
          <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeStateProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
