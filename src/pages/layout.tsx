import Navbar from "~/components/Navbar";
import Meta from "~/components/Meta";
import { defaultData } from "~/utils/assets/defaultData";
import { useRouter } from "next/router";
import WebLayout from "~/components/Layouts/WebLayout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  if (router.pathname.split("/")[1] === "dashboard") {
    return <>{children}</>;
  }

  return <WebLayout>{children}</WebLayout>;
};

export default Layout;
