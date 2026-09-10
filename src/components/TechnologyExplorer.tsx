import { use } from "react";
import type { ITechnology } from "../types/Types";
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
                <div>
                    {
                        stacks.map(stack => <li key={stack.id}>{stack.name}</li>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TechnologyExplorer;