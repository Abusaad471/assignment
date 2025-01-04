"use client";
import { Heart, Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navigationLinks } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="py-4 bg-[#f6f5e8]">
      <div className="bg-[#d6d1c4] text-center py-2 px-4 text-sm">
        Kindly note, due to the Christmas public holidays, the processing of
        orders may be delayed.
        <Link href="#" className="ml-2 text-gray-700">
          Conditions apply.
        </Link>
      </div>
      <div className="bg-[#252525] text-white text-center py-3 px-4 flex justify-center items-center">
        <p className="text-sm">
          Enjoy complimentary shipping on orders over $400. Click and Collect is
          now available in Hong Kong.
        </p>
        <button className="ml-4 text-xl">+</button>
      </div>

      <nav className="bg-slate-100 border-b">
        <div className="container mx-auto px-4 md:py-8 py-4 flex justify-between items-center">
          <div className="flex items-center justify-between w-full md:ml-12">
            <div className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm font-semibold hover:underline"
                >
                  {link}
                </Link>
              ))}
              <button>
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-6">
              <button className="hidden md:block text-sm font-semibold hover:underline">
                Login
              </button>
              <button className="hidden md:block text-sm font-semibold hover:underline">
                Cabinet
              </button>
              <button className="md:hidden">
                <Heart className="w-5 h-5" />
              </button>
              <button className="md:hidden">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-100 py-4">
            <div className="flex flex-col items-start pl-4 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-black"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
