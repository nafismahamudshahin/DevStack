import type { ITechnology } from "../types/Types";


const StackCard = ({ technology }: { technology: ITechnology }) => {
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
            <button className="flex h-12 w-12 items-center justify-center text-slate-400 transition hover:text-slate-600">
                <span className="text-5xl font-light leading-none">
                    ×
                </span>
            </button>
        </div>
    );
};

export default StackCard;