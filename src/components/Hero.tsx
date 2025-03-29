// import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/100 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto ">
          <div className="animate-fade-in-up space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-100">
              Welcome to {"आरा"} Library
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100/90 font-light max-w-3xl mx-auto">
              Your ideal study space for focused learning and success. Discover
              a world of knowledge at your fingertips.
            </p>
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-md rounded-full text-blue-200 font-medium text-md mb-4">
              Your Premier Learning Destination
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* <button className="group relative overflow-hidden px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Explore
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
