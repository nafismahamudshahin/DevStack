import { use, useState } from "react";
import type { ITechnology } from "../types/Types";
import TechnologyCard from "./TechnologyCard";
import StackCard from "./StackCard";
import { toast } from "react-toastify";
interface TechnologyPromise {
    technologiesPromise: Promise<ITechnology[]>
}

const TechnologyExplorer = ({ technologiesPromise }: TechnologyPromise) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnology, setSelectedTechnology] = useState<ITechnology[]>([]);
    const handleRemoveAllTechnologies = (): void => {
        setSelectedTechnology([]);
        toast.success("All technologies removed from stack");
    }
    return (
        <section className="container mx-auto px-1 sm:px-2 md:px-3 xl:px-0">
            <h2 className="text-[#0F172A] mb-2 font-extrabold text-3xl sm:text-4xl lg:text-5xl">Explore the <span className="text-pink-500">Technologies</span></h2>
            <p className="text-[#64748B] text-[16px]">Pick one technology per category to build your ideal stack.</p>
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 xl:gap-10 mt-8">
                {/* Technology Grid */}
                <div className="col-span-12 grid grid-cols-1 md:col-span-6 min-w-0 lg:grid-cols-2 xl:grid-cols-3 lg:col-span-9 gap-3">
                    {
                        technologies.map(technology => <TechnologyCard key={technology.id} technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></TechnologyCard>)
                    }
                </div>
                {/*Stack Section */}
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="bg-base-100 shadow-sm px-5 py-7 rounded-2xl space-y-6">
                        <b className="text-2xl ">Your Stack</b>
                        <p className="text-md xl:text-xl text-[#64748B]">{selectedTechnology.length != 0 ? `${selectedTechnology.length} Technology Selected` : "No technologies selected yet."}</p>
                        <div>
                            {
                                (selectedTechnology.length) === 0 ? <div className="border border-dashed rounded-2xl w-full py-10">
                                    <p className="text-[#64748B] text-center">Your stack is empty.</p>
                                </div > : <div className="grid gap-3">{selectedTechnology.map(technology => <StackCard key={technology.id} technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></StackCard>)}</div>
                            }
                        </div>
                        <button onClick={() => handleRemoveAllTechnologies()} className={`btn ${selectedTechnology.length > 1 ? "block" : "hidden"} rounded-2xl w-full border border-red-500 text-red-500`}>Remove All</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyExplorer;