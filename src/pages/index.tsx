import Link from "next/link";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import defaultData from "./assets/defaultData.json";
import { DefaultData } from "~/types";

function Home() {
  return (
    <div>
      <main>
        <Hero defaultData={defaultData as DefaultData} />
      </main>
    </div>
  );
}
export default Home;
