import { Suspense } from "react";
import HeroBanner from "./components/HeroBanner"
import Navbar from "./components/Navbar"
import TechnologyExplorer from "./components/TechnologyExplorer"
import type { ITechnology } from "./types/Types";



const technologiesPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
        <TechnologyExplorer technologiesPromise={technologiesPromise()}></TechnologyExplorer>
      </Suspense>
    </>
  )
}

export default App
