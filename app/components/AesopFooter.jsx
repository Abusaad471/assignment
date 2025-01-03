import React from "react";
import { certifications } from "../utils";
const AesopFooter = () => {
  return (
    <div className="w-full bg-[#252525] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-16 bg-[#f6f5e8] text-black">
        {certifications.map((cert) => (
          <div key={cert.title} className="text-center px-4">
            <h3 className="font-medium mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AesopFooter;
