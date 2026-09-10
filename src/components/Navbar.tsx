import { VscThreeBars } from "react-icons/vsc";
import Logo from "../assets/logo-text.png";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200">
            <div className="container mx-auto py-6 flex justify-between items-center">
                {/* logo */}
                <div>
                    <img src={Logo} alt="DevStack Logo" />
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
                <div className="flex items-center gap-3">
                    <button className="hidden md:block rounded-lg px-4 py-2 text-[15px] font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100">Sign In</button>
                    <button className="hidden md:block btn rounded-lg bg-[#DB2777] px-5 py-2.5 text-[15px] font-semibold text-white shadow-md  transition-all duration-200 hover:bg-[#eb0c71] hover:shadow-lg">Sign Up</button>
                    <VscThreeBars className="md:hidden text-3xl" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;