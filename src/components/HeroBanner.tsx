import HeroImg from "../assets/banner-stack.png"
const HeroBanner = () => {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                {/* left */}
                <div className="flex flex-col justify-center space-y-5 text-center md:text-left">
                    <h1 className="font-extrabold text-5xl md:6xl lg:text-7xl text-[#0F172A]">Build Your Ideal <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className="text-[#475569] text-[18px]">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <button className="btn rounded-2xl font-semibold text-white bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">Technologies</button>
                        <button className="btn shadow-2xl rounded-2xl">Learn More</button>
                    </div>
                </div>
                {/* Right */}
                <div className="flex justify-center items-center">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;