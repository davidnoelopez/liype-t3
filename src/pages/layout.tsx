import Navbar from "~/components/Navbar";
import Meta from "~/components/Meta";
import { defaultData } from "~/utils/assets/defaultData";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Meta />
      <Navbar defaultData={defaultData} />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
