import React from "react";

const SectionCard = ({
  title,
  heading,
  description,
  ctaText,
  imageSrc,
  videoSrc,
  backgroundColor,
  className = "md:flex-row flex-col",
  shouldRenderSlider = false,
  renderComponent = null,
}) => {
  return (
    <section
      className={`w-full min-h-[400px] flex flex-col-reverse md:flex-row gap-6 md:gap-10 ${className}`}
    >
      <div
        className="relative w-full lg:w-[65%] min-h-[300px] lg:min-h-[500px]"
        style={{ backgroundColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center lg:p-12">
          {renderComponent
            ? renderComponent
            : imageSrc && (
                <img
                  src={imageSrc}
                  alt="Gift packaging preview"
                  className="object-cover w-full h-full md:w-[80%] lg:w-[90%] xl:w-full"
                />
              )}
          {videoSrc && (
            <video
              src={videoSrc}
              controls
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>

      <div className="w-full lg:w-[35%] flex flex-col px-6 lg:px-12 py-8 lg:py-12">
        <div className="max-w-xl">
          <p className="text-sm tracking-wide text-black font-semibold uppercase">
            {title}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 mb-6 lg:my-10 text-gray-900 leading-tight">
            {heading}
          </h2>

          <p className="text-base leading-relaxed mb-8 text-black">
            {description}
          </p>

          <button className="group flex items-center justify-between md:w-[60%] w-full font-semibold text-sm text-gray-900 hover:bg-black hover:text-white border border-gray-700 p-4 transition-colors duration-200">
            <span>{ctaText}</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
