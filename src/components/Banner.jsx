import banner from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="relative container mx-auto flex items-center overflow-hidden mt-22.5">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-zinc-500/30 text-blue-400 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
           Supercharge Your <br /> Digital Workflow
    
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Explore Products
            </button>

            <button className="bg-transparent hover:bg-cyan-900 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-blue-600 ">
            <span className="group-hover:translate-x-1 transition">→</span>
             Watch Demo 
  
            </button>
          </div>

       
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-xl"
              src={banner}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;