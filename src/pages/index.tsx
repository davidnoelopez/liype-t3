import Hero from "../components/Hero";
import { defaultData } from "~/utils/assets/defaultData";
import { DefaultData } from "~/types";
import Services from "~/components/Home/Services";
import Clients from "~/components/Home/Clients";

function Home() {
  return (
    <div className="h-full">
      <Hero defaultData={defaultData as DefaultData} />
      <Services />
      <Clients />
    </div>
  );
}
export default Home;
