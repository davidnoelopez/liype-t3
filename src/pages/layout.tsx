import { useRouter } from "next/router";
import WebLayout from "~/components/Layouts/WebLayout";
import DashboardLayout from "~/components/Layouts/DashboardLayout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  if (router.pathname.split("/")[1] === "dashboard") {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <WebLayout>{children}</WebLayout>;
};

export default Layout;
