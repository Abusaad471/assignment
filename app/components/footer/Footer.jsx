import React from "react";
import { ArrowUpRight } from "lucide-react";
import { about, services, socialMedia, support } from "../../utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white px-4 sm:px-6 md:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg mb-2 md:mb-6">
            Subscribe to Aesop communications
          </h3>
          <hr className="w-[80%]" />
          <div className="border-b border-white">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent p-2 border border-white rounded text-4xl font-bold text-white md:text-base"
            />
          </div>
          <label className="flex items-start gap-2 text-xs md:text-sm mt-4">
            <input type="checkbox" className="mt-1" />
            <span>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our
              <Link href="#" className="underline ml-1 hover:text-gray-300">
                privacy policy
              </Link>
              .
            </span>
          </label>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg mb-2 md:mb-6">Orders and support</h3>
          <hr className="w-[80%]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {support.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href="#"
                  className="flex items-center hover:underline text-sm md:text-base"
                >
                  {item.label}
                  {item.hasArrow && <ArrowUpRight className="w-4 h-4 ml-1" />}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg mb-2 md:mb-6">Services</h3>
          <hr className="w-[80%]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {services.map((service) => (
              <div key={service} className="py-1">
                <Link href="#" className="hover:underline text-sm md:text-base">
                  {service}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg mb-2 md:mb-6">Location preferences</h3>
          <hr className="w-[80%]" />
          <div className="space-y-6">
            <div>
              <p className="text-sm mb-2">Shipping:</p>
              <Link href="#" className="hover:underline text-sm md:text-base">
                Hong Kong, SAR
              </Link>
            </div>
            <div>
              <p className="text-sm mb-2">Language:</p>
              <div className="space-y-1">
                <Link
                  href="#"
                  className="block hover:underline text-sm md:text-base"
                >
                  English
                </Link>
                <Link
                  href="#"
                  className="block hover:underline text-sm md:text-base"
                >
                  繁體中文
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16 pt-8 md:pt-16 border-t border-white">
        <div>
          <h3 className="text-lg mb-2 md:mb-6">Sustainability</h3>
          <hr className="w-[80%] " />
          <p className="text-xs md:text-sm mt-3">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation.
            <Link href="#" className="underline ml-1 hover:text-gray-300">
              Learn more
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-2 md:mb-6">About</h3>
          <hr className="w-[80%]" />
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 mt-3">
            {about.map((item) => (
              <div key={item} className="py-1">
                <Link href="#" className="hover:underline text-sm md:text-base">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-2 md:mb-6">Social media</h3>
          <hr className="w-[80%]" />
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 mt-3">
            {socialMedia.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href="#"
                  className="flex items-center hover:underline text-sm md:text-base"
                >
                  {item.label}
                  {item.hasArrow && <ArrowUpRight className="w-4 h-4 ml-1" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16  md:pt-6 border-t border-white">
        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <p className="text-xl font-semibold text-white">© Aesop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
