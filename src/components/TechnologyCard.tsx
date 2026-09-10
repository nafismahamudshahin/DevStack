import { useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../types/Types";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

interface ITechnologyCard {
    stack: ITechnology,
    selectedTechnology: ITechnology[],
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>
}
const TechnologyCard = ({ stack, selectedTechnology, setSelectedTechnology }: ITechnologyCard) => {
    const [select, setSelect] = useState<boolean>(false)
    const handleSelectedTechnology = (stack: ITechnology): void => {
        setSelectedTechnology([...selectedTechnology, stack])
        setSelect(true)
    }
    return (
        <div>
            <div className={` bg-base-100 shadow-md px-5 py-7 rounded-2xl space-y-6 ${select ? "border-2 border-pink-500" : "border-2 border-transparent"}`}>
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
                <button disabled={select} onClick={() => handleSelectedTechnology(stack)} className={`btn rounded-2xl w-full ${select ? "bg-white text-pink-500 shadow" : "bg-[#0A0F1D] text-white"} flex gap-0`} >{select ? <IoIosCheckmark className="text-pink-500 text-4xl" /> : ""}Add to Stack</button>

            </div>
        </div>
    );
};

export default TechnologyCard;