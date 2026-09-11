import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../types/Types";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

interface ITechnologyCard {
    technology: ITechnology,
    selectedTechnology: ITechnology[],
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>
}
const TechnologyCard = ({ technology, selectedTechnology, setSelectedTechnology }: ITechnologyCard) => {
    const select = selectedTechnology.some((item) => item.id === technology.id);
    const handleSelectedTechnology = (technology: ITechnology): void => {
        const exits = selectedTechnology.find(s => s.id === technology.id);
        if (!exits) {
            setSelectedTechnology([...selectedTechnology, technology]);
            toast.success(`${technology.name} add in Stacks.`);
        }
    }
    return (
        <div className="w-full min-w-0">
            <div className={`w-full min-w-0 overflow-hidden bg-base-100 shadow-md px-4 py-5 sm:px-5 sm:py-7 rounded-2xl space-y-6 ${select
                ? "border-2 border-pink-500 shadow-xl"
                : "border-2 border-slate-200"
                }`}>
                {/* card head */}
                <div className="flex justify-between">
                    <div>
                        <img className="w-15" src={technology.icon} alt={technology.name} />
                    </div>
                    <div>
                        <span className="shadow rounded-sm text-pink-500 text-sm font-semibold p-2">{technology.badge}</span>
                    </div>
                </div>
                {/* card body */}
                <div className="min-h-45 my-auto max-h-40 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xl xl:text-2xl font-semibold text-[#0A0F1D]">{technology.name}</h3>
                        <p className="text-[#64748B] text-sm">{technology.description}</p>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-[#64748B]">
                        <span className="shadow-sm text-sm md:text-[16px] px-2 py-1">{technology.category}</span>
                        <span className="shadow-sm text-sm md:text-[16px] px-2 py-1">{technology.difficulty}</span>
                        <div className="flex gap-1 text-sm md:text-[16px] items-center">
                            <FaRegStarHalfStroke className="text-yellow-400" />
                            <span>{technology.rating}</span>
                        </div>
                    </div>
                </div>
                {/* cart footer */}
                <button
                    disabled={select}
                    onClick={() => handleSelectedTechnology(technology)}
                    className={
                        `btn rounded-2xl w-full 
                         hover:bg-base-200 hover:border-pink-500  hover:text-pink-500 
                        ${select ? "border-slate-200  text-pink-500 shadow"
                            : "bg-[#0A0F1D] text-white"} flex gap-0`} >
                    {select ? <IoIosCheckmark className="text-pink-500 text-4xl" />
                        : ""}{select ? "Added to Stack" : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default TechnologyCard;