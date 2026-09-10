import { use, useState } from "react";
import type { ITechnology } from "../types/Types";
import TechnologyCard from "./TechnologyCard";
import StackCard from "./StackCard";
interface TechnologyPromise {
    technologiesPromise: Promise<ITechnology[]>
}

const TechnologyExplorer = ({ technologiesPromise }: TechnologyPromise) => {
    const stacks = use(technologiesPromise);
    const [selectedTechnology, setSelectedTechnology] = useState<ITechnology[]>([]);
    return (
        <section className="container mx-auto">
            <div>
                <h2 className="text-[#0F172A] mb-2 font-extrabold text-4xl">Explore the <span className="text-pink-500">Technologies</span></h2>
                <p className="text-[#64748B] text-[16px]">Pick one technology per category to build your ideal stack.</p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
                    <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            stacks.map(stack => <TechnologyCard key={stack.id} stack={stack} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></TechnologyCard>)
                        }
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div className="bg-base-100 shadow-sm px-5 py-7 rounded-2xl space-y-6">
                            <b className="text-2xl ">Your Stack</b>
                            <p className="text-[20px] text-[#64748B]">{selectedTechnology.length != 0 ? `${selectedTechnology.length} Technology Selected` : "No technologies selected yet."}</p>
                            <div>
                                {
                                    (selectedTechnology.length) === 0 ? <div className="border border-dashed rounded-2xl w-full py-10">
                                        <p className="text-[#64748B] text-center">Your stack is empty.</p>
                                    </div > : <div className="grid gap-3">{selectedTechnology.map(technology => <StackCard key={technology.id} technology={technology}></StackCard>)}</div>
                                }
                            </div>
                            <button className={`btn ${selectedTechnology.length > 1 ? "block" : "hidden"} rounded-2xl w-full border border-red-500 text-red-500`}>Remove All</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyExplorer;