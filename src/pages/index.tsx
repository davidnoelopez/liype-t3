import Hero from "../components/Hero";
import { defaultData } from "~/utils/assets/defaultData";
import { DefaultData } from "~/types";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="h-full">
      <Navbar defaultData={defaultData as DefaultData} />
      <Hero defaultData={defaultData as DefaultData} />
    </main>
  );
}
export default Home;
