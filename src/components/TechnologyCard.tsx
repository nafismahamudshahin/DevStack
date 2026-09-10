import type { ITechnology } from "../types/Types";
import { FaRegStarHalfStroke } from "react-icons/fa6";

interface ITechnologyCard {
    stack: ITechnology,
}
const TechnologyCard = ({ stack }: ITechnologyCard) => {
    return (
        <div className="bg-base-100 shadow-md px-5 py-7 rounded-2xl space-y-6">
            <div className="flex justify-between">
                <div>
                    <img className="w-15" src={stack.icon} alt={stack.name} />
                </div>
                <div>
                    <span className="shadow rounded-sm font-semibold p-2">{stack.badge}</span>
                </div>
            </div>
            <div className="h-38 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#0A0F1D]">{stack.name}</h3>
                    <p className="text-[#64748B]">{stack.description}</p>
                </div>
                <div className="flex justify-between text-[#64748B]">
                    <span className="shadow-sm px-3 py-1">{stack.category}</span>
                    <span className="shadow-sm px-3 py-1">{stack.difficulty}</span>
                    <div className="flex gap-1 items-center">
                        <FaRegStarHalfStroke className="text-yellow-400" />
                        <span>{stack.rating}</span>
                    </div>
                </div>
            </div>
            <button className="btn rounded-2xl w-full bg-[#0A0F1D] text-white">Add to Stack</button>
        </div>
    );
};

export default TechnologyCard;