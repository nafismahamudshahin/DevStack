import { use } from "react";
import type { ITechnology } from "../types/Types";
import TechnologyCard from "./TechnologyCard";
interface TechnologyPromise {
    technologiesPromise: Promise<ITechnology[]>
}

const TechnologyExplorer = ({ technologiesPromise }: TechnologyPromise) => {
    const stacks = use(technologiesPromise);
    console.log(stacks)
    return (
        <section className="container mx-auto">
            <div>
                <h2 className="text-[#0F172A] mb-2 font-extrabold text-4xl">Explore the <span className="text-pink-500">Technologies</span></h2>
                <p className="text-[#64748B] text-[16px]">Pick one technology per category to build your ideal stack.</p>
                <div className="grid grid-cols-12 gap-10 mt-8">
                    <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            stacks.map(stack => <TechnologyCard key={stack.id} stack={stack}></TechnologyCard>)
                        }
                    </div>
                    <div className="col-span-3">
                        <div className="bg-base-100 shadow-sm px-5 py-7 rounded-2xl space-y-6">
                            <b className="text-3xl ">Your Stack</b>
                            <p className="text-[24px] text-[#64748B]">2 Technology Selected</p>
                            <div>

                            </div>
                            <div className="border border-dashed rounded-2xl w-full py-10">
                                <p className="text-[#64748B] text-center">Your stack is empty.</p>
                            </div>
                            <button className="btn rounded-2xl w-full border border-red-500 text-red-500">Remove All</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyExplorer;