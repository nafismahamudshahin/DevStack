import { IoCloseSharp } from "react-icons/io5";
import type { ITechnology } from "../types/Types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface IStackCardType {
    technology: ITechnology,
    selectedTechnology: ITechnology[],
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>
}

const StackCard = ({ technology, selectedTechnology, setSelectedTechnology }: IStackCardType) => {
    const handleRemoveTechnology = (technology: ITechnology): void => {
        const exits = selectedTechnology.find(t => t.id === technology.id);
        if (exits) {
            setSelectedTechnology([...selectedTechnology.filter(t => t.id !== exits.id)]);
            toast.success(`${technology.name} Remove Successfully.`);
        }
    }
    return (
        <div className="flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center">
                    <img src={technology.icon} alt={technology.name} className="h-14 w-14 object-contain" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900">{technology.name}</h3>

                    <p className="text-sm font-medium text-slate-400">{technology.category}</p>
                </div>
            </div>
            <button onClick={() => handleRemoveTechnology(technology)} className="flex h-12 w-12 items-center justify-center text-slate-400 transition hover:text-slate-600">
                <IoCloseSharp className="text-5xl font-light leading-none" />
            </button>
        </div>
    );
};

export default StackCard;