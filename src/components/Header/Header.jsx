import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  "About",
  "Skills",
  "Journey",
  "Work",
  "Contact",
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b-2 border-cyan-400 ${
        sticky
          ? "backdrop-blur-xl bg-slate-950/80 shadow-xl py-4"
          : "bg-slate-900 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <a
          href="/"
          className="text-3xl font-black tracking-wide text-white"
        >
          Rohit Nigam<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-cyan-400 transition group font-medium"
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        <a
          href="/Web-Portfolio.pdf"
          target="_blank"
          className="hidden lg:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-slate-900 font-semibold px-6 py-3 rounded-full hover:scale-105"
        >
          My Portfolio Websites
          <HiOutlineDownload size={20} />
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white"
        >
          {mobileMenu ? (
            <HiXMark size={32} />
          ) : (
            <HiBars3 size={32} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl px-6 py-6">

          <nav className="flex flex-col gap-5 ">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="text-gray-300 hover:text-cyan-400 transition text-3xl font-small text-center"
              >
                {item}
              </a>
            ))}

            <a
              href="/Web-Portfolio.pdf"
              target="_blank"
              className="mt-4 flex items-center justify-center gap-2 bg-cyan-500 text-slate-900 py-3 rounded-full font-semibold"
            >
              My Portfolio Websites
              <HiOutlineDownload size={18} />
            </a>

          </nav>

        </div>
      </div>
    </header>
  );
}