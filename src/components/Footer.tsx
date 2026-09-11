import Logo from '../assets/logo-text.png';
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className=" bg-base-200 pt-3 mt-15">
            <div className="container mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-12 justify-between border-y pt-15 mt-15 border-slate-200 text-base-content py-10">
                <div className='col-span-6 space-y-3'>
                    <div className='flex justify-center md:justify-start'>
                        <img src={Logo} alt="DevStack Logo" />
                    </div>
                    <p className='text-[#64748B] text-center md:text-start mx-auto md:mx-0 w-[70%]'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className=''>
                        <ul className='flex justify-center md:justify-start gap-5 font-semibold text-[#475569]'>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
                <nav className='hidden md:flex flex-col col-span-2 space-y-2'>
                    <h6 className="font-semibold text-[#0F172A]">{"Services".toUpperCase()}</h6>
                    <a className="link link-hover text-[#64748B]">Branding</a>
                    <a className="link link-hover text-[#64748B]">Design</a>
                    <a className="link link-hover text-[#64748B]">Marketing</a>
                    <a className="link link-hover text-[#64748B]">Advertisement</a>
                </nav>
                <nav className='hidden md:flex flex-col col-span-2 space-y-2'>
                    <h6 className="font-semibold text-[#0F172A]">{"Company".toUpperCase()}</h6>
                    <a className="link link-hover text-[#64748B]">About us</a>
                    <a className="link link-hover text-[#64748B]">Contact</a>
                    <a className="link link-hover text-[#64748B]">Jobs</a>
                    <a className="link link-hover text-[#64748B]">Press kit</a>
                </nav>
                <nav className='hidden md:flex flex-col col-span-2 space-y-2'>
                    <h6 className="font-semibold text-[#0F172A]">{"Legal".toUpperCase()}</h6>
                    <a className="link link-hover text-[#64748B]">Terms of use</a>
                    <a className="link link-hover text-[#64748B]">Privacy policy</a>
                    <a className="link link-hover text-[#64748B]">Cookie policy</a>
                </nav>
            </div>
            <div className='container mx-auto px-1 sm:px-2 md:px-3 lg:px-4 xl:px-0 pb-10 pt-4 flex flex-col justify-center md:flex-row  md:justify-between text-[#64748B]'>
                <p className='text-center md:text-start'>© {date} Dev Stack. All rights reserved.</p>
                <div>
                    <ul className='flex gap-3 justify-center md:justify-start'>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;