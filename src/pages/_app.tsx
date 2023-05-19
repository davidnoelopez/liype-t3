import { type AppType } from "next/app";
import "node_modules/flag-icons/css/flag-icons.min.css";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
