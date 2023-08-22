import Hero from "../components/Hero";
import { defaultData } from "~/utils/assets/defaultData";
import { DefaultData } from "~/types";
import Services from "~/components/Home/Services";
import Clients from "~/components/Home/Clients";
import About from "~/components/Home/About";

function Home() {
  return (
    <div className="h-full">
      <Hero defaultData={defaultData as DefaultData} />
      <Services />
      <Clients />
      <About />
    </div>
  );
}
export default Home;
