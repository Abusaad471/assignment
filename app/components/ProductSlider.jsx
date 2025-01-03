import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../utils";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto ">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6 items-center"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product, index) => (
            <div key={index} className="w-full md:w-[40%] flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium mt-2">{product.title}</h3>
                <p className="text-base text-center">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
