import { useEffect, useState } from "react";
import { slides } from "../utils";
import { ChevronLeft, ChevronRight, MessageCircle, Pause } from "lucide-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((current) => (current === totalSlides ? 1 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 1 ? totalSlides : current - 1));
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = slides[currentSlide - 1];

  return (
    <main className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[600px] mb-20">
        <div className="p-6 md:p-20 flex flex-col justify-center">
          <span className="text-sm font-semibold md:text-base mb-2 text-gray-600">
            {current.subtitle}
          </span>
          <h2 className="text-2xl font-semibold md:text-4xl mb-4">
            {current.title}
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            {current.description}
          </p>
          <button
            className="flex items-center space-x-2 border border-black px-6 md:px-8 py-2 md:py-3 w-fit 
            hover:bg-black hover:text-white transition-colors text-sm md:text-base"
          >
            <span>{current.cta}</span>
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div
          className={`${current.bgColor} relative min-h-[300px] md:min-h-full flex justify-center items-center`}
          style={{ height: "400px" }}
        >
          {current.imageSrc ? (
            <img
              src={current.imageSrc}
              alt={current.title}
              className="w-full h-full object-cover"
              style={{ maxHeight: "100%" }}
            />
          ) : (
            <video
              src={current.videoSrc}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              style={{ maxHeight: "100%" }}
            />
          )}
          <div className="absolute bottom-4 right-4 z-10">
            <MessageCircle
              className="w-8 h-8 md:w-10 md:h-10 text-white cursor-pointer 
      hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 md:space-x-4 
        bg-transparent backdrop-blur-sm rounded-full px-4 py-2"
      >
        <button
          onClick={prevSlide}
          className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <span className="text-xs md:text-sm font-medium">
          {currentSlide} / {totalSlides}
        </span>
        <button
          onClick={nextSlide}
          className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={toggleAutoplay}
          className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Pause
            className={`w-5 h-5 md:w-6 md:h-6 ${
              isPlaying ? "text-blue-500" : ""
            }`}
          />
        </button>
      </div>
    </main>
  );
};

export default Slider;
