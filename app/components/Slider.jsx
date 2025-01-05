import { useEffect, useState } from "react";
import { slides } from "../utils";
import { ChevronLeft, ChevronRight, MessageCircle, Pause } from "lucide-react";

const Slider = ({ className = "" }) => {
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
    <main className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex flex-col-reverse md:flex-row min-h-[400px] md:min-h-[600px] mb-20">
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
        <div className="relative flex flex-col">
          <div className="relative w-full flex justify-center items-center">
            {current.imageSrc ? (
              <img
                src={current.imageSrc}
                alt={current.title}
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
            ) : (
              <video
                src={current.videoSrc}
                autoPlay
                loop
                muted
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
            )}
            <div className="absolute bottom-4 right-4 z-10">
              <MessageCircle
                className="w-8 h-8 md:w-10 md:h-10 text-white cursor-pointer 
                hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div
            className="md:hidden flex items-center justify-center space-x-4 py-4 
            bg-white shadow-sm"
          >
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-sm font-medium">
              {currentSlide} / {totalSlides}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={toggleAutoplay}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Pause
                className={`w-6 h-6 ${isPlaying ? "text-blue-500" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center space-x-4
        bg-transparent backdrop-blur-sm rounded-full py-2"
      >
        <button
          onClick={prevSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-sm font-medium">
          {currentSlide} / {totalSlides}
        </span>
        <button
          onClick={nextSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={toggleAutoplay}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Pause className={`w-6 h-6 ${isPlaying ? "text-blue-500" : ""}`} />
        </button>
      </div>
    </main>
  );
};

export default Slider;
