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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyExplorer;