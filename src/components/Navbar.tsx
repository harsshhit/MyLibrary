import React, { useState, useEffect } from "react";
import { Library, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
}

function NavItem({ label, href, items }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, itemHref: string) => {
    e.preventDefault();

    // Check if it's an anchor link (starts with #)
    if (itemHref.startsWith("#")) {
      const element = document.getElementById(itemHref.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(itemHref);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <a
        href={href}
        onClick={(e) => handleClick(e, href)}
        className="flex items-center px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        {items && (
          <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
        )}
      </a>
      {items && isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl py-2 z-50 transform opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white/20"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block px-4 py-2 text-sm text-white hover:text-white hover:bg-gray-800/80 transition-all duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItemProps[] = [
    { label: "Membership", href: "#membership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-lg shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              <Library className="w-10 h-10 text-white relative transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              {"आरा"} Library
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/90 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "h-[calc(100vh-5rem)] opacity-100"
            : "h-0 opacity-0"
        } bg-gray-900/95 backdrop-blur-lg overflow-hidden border-t border-white/10`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();

                  // Check if it's an anchor link (starts with #)
                  if (item.href.startsWith("#")) {
                    const element = document.getElementById(
                      item.href.substring(1)
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      setIsMobileMenuOpen(false);
                    }
                  } else {
                    navigate(item.href);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
              >
                {item.label}
              </a>
              {item.items && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block text-white/80 hover:text-white transition-all duration-300 font-medium hover:translate-x-2"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
