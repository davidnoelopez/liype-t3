import { type AppType } from "next/app";
import "node_modules/flag-icons/css/flag-icons.min.css";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "./layout";
import { ThemeStateProvider } from "~/components/ThemeStateProvider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeStateProvider>
  );
};

export default api.withTRPC(MyApp);
