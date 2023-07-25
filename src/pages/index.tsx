import Hero from "../components/Hero";
import { defaultData } from "~/utils/assets/defaultData";
import { DefaultData } from "~/types";

function Home() {
  return (
    <div className="h-full">
      <Hero defaultData={defaultData as DefaultData} />
    </div>
  );
}
export default Home;
