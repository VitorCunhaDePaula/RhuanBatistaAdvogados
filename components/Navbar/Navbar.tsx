"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-2 px-6 md:px-12 lg:px-16",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img src="/logo.png" className="w-56" />
          </a>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#about"
              className="lora font-semibold hover:text-[#d4bd7b] transition-colors duration-300 capitalize "
            >
              sobre
            </a>
            <a
              href="#areas"
              className="lora font-semibold hover:text-[#d4bd7b] transition-colors duration-300 capitalize"
            >
              áreas de atuação
            </a>
            <a
              href="#me"
              className="lora font-semibold hover:text-[#d4bd7b] transition-colors duration-300 capitalize"
            >
              quem somos
            </a>

            <a href="#contact">
              <Button className="bg-[#121a21] cursor-pointer">Contato</Button>
            </a>
          </div>

          <button
            className="md:hidden text-lawyer-text hover:text-[#d4bd7b] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg animate-scale-in ">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#about"
                className="lora font-semibold hover:text-[#d4bd7b] transition-colors py-2 border-b border-gray-100 capitalize"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                sobre
              </a>
              <a
                href="#areas"
                className="lora font-semibold hover:text-[#d4bd7b] transition-colors py-2 border-b border-gray-100 capitalize"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                áreas de atuação
              </a>
              <a
                href="#me"
                className="lora font-semibold hover:text-[#d4bd7b] transition-colors py-2 border-b border-gray-100 capitalize"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                quem somos
              </a>
              <a href="#contact">
                <Button
                  className="bg-[#121a21] mt-2 lora cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
