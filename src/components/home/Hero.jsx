import { LogIn } from "lucide-react";
import track from "./track.jpeg";

function Hero() {
  return (
    <>
      <div className="w-full h-screen flex  bg-[url(https://eschosys.com/wp-content/uploads/2024/08/slide_image.jpg)] bg-no-repeat bg-cover bg-center ">
        <div className="w-full h-screen bg-black/50 flex-col justify-center flex px-8">
          <h1 className="text-5xl font-bold  text-white md:w-3/4 lg:w-1/2 ">
            Eschosys BIFMET Score Tracker App
          </h1>
          <p className="text-white mt-4 font-semibold text-lg md:w-3/4 lg:w-1/2">
            Track your scores for all courses at ESCHOSYS BIFMET in order to
            know how you are doing in class
          </p>

          <button className="bg-yellow-600 text-white rounded-lg px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out shadow-lg border flex items-center gap-2 hover:bg-gray-800 hover:text-white xsm:w-1/2 md:w-1/3 lg:w-1/6! mt-8">
            <LogIn size={17} />
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
