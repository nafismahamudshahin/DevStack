import { VscThreeBars } from "react-icons/vsc";
import Logo from "../assets/logo-text.png";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
    const [threebarClose, setThreebarClose] = useState<boolean>(false);
    return (
        <nav className="sticky top-0 z-50 w-full  border-slate-200/70 bg-white/60 backdrop-blur-3xl">
            <div className="container mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-0 py-3">
                <div className="container mx-auto px-1 md:px-2 lg:px-0 py-3 flex justify-between items-center">
                    <div className="md:hidden">
                        {
                            threebarClose ?
                                <IoCloseSharp onClick={() => setThreebarClose(false)} className="text-2xl lg:text-3xl xl:text-5xl font-light leading-none" />
                                : <VscThreeBars onClick={() => setThreebarClose(true)} className="text-2xl lg:text-3xl xl:text-5xl font-light leading-none" />
                        }
                    </div>
                    {/* logo */}
                    <div>
                        <img src={Logo} className="w-25 md:w-32" alt="DevStack Logo" />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-1 lg:gap-2 text-[16px] font-medium text-slate-600">
                            <li className="cursor-pointer rounded-lg px-2 lg:px-4 py-2 transition-all duration-200 hover:bg-blue-50 hover:text-[#DB2777]"><a href="#">Home</a></li>
                            <li className="cursor-pointer rounded-lg px-2 lg:px-4 py-2 transition-all duration-200 hover:bg-blue-50 hover:text-[#DB2777]"><a href="#">Technologies</a></li>
                            <li className="cursor-pointer rounded-lg px-2 lg:px-4 py-2 transition-all duration-200 hover:bg-blue-50 hover:text-[#DB2777]"><a href="#">Projects</a></li>
                            <li className="cursor-pointer rounded-lg px-2 lg:px-4 py-2 transition-all duration-200 hover:bg-blue-50 hover:text-[#DB2777]"><a href="#">About</a></li>
                            <li className="cursor-pointer rounded-lg px-2 lg:px-4 py-2 transition-all duration-200 hover:bg-blue-50 hover:text-[#DB2777]"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                        <button className="rounded-lg border border-transparent hover:text-pink-500 hover:border-pink-500 px-2 sm:px-3 md:px-4 py-2 text-sm md:text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100">Sign In</button>
                        <button className="btn rounded-lg bg-pink-500 hover:bg-white hover:border-pink-500 hover:text-pink-500 px-2 sm:px-3 md:px-5 py-2 text-sm md:text-[15px] font-semibold text-white shadow-md  transition-all duration-200 hover:shadow-lg">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;