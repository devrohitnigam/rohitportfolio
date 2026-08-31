import { FaExternalLinkAlt } from "react-icons/fa";

export default function Work() {
  return (
    <section id="work" className="py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
          My Portfolio
        </p>

        <h2 className="text-5xl font-bold mt-4 text-white">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
          Explore my portfolio of professional websites, eCommerce stores,
          landing pages and web applications developed for companies and
          clients across different industries.
        </p>

        {/* Portfolio Button */}
        <div className="flex justify-center mt-14">
          <a
            href="/Web-Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300"
          >
            View My Portfolio Websites
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

      </div>
    </section>
  );
}