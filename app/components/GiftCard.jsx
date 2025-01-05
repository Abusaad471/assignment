import React from "react";

const GiftCard = ({
  imageSrc,
  videoSrc,
  title,
  description,
  imagePosition = "left",
  className,
}) => {
  return (
    <div className="w-full">
      <div
        className={`flex flex-col justify-between ${
          imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-col"
        } gap-8 md:mb-16`}
      >
        <div className={`w-full ${className}`}>
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover  w-full h-3/4 "
            />
          ) : (
            <img
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-3/4"
            />
          )}
        </div>
        <div className="w-full  flex flex-col justify-center">
          <h2 className=" text-black mb-4 hover:underline">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
