import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "rohitkumarnigam9568@gmail.com",
      link: "mailto:rohitkumarnigam9568@gmail.com",
      id: "conemail",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 956 8228 941",
      link: "tel:+919568228941",
      id: "conphone",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Noida, INDIA",
      id: "conlocation",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      value: "www.rohitnigam.com",
      link: "https://www.rohitnigam.com",
      id: "conwebsite",
    },
  ];

  return (
    <section id="contact" className="pt-15 py-25 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <p className="text-cyan-400 uppercase tracking-[4px] text-center font-semibold">
          Contact
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 text-white">
          Let's <span className="text-cyan-400">Work Together</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6 leading-8">
          I am interested in opportunities related to web development,
          eCommerce platforms, frontend development, and digital product
          solutions. Whether it is a full-time role, freelance project, or
          technical collaboration, I would be glad to connect and discuss
          potential opportunities.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              id={item.id}
              href={item.link || "#"}
              target={item.link?.startsWith("http") ? "_blank" : undefined}
              rel={
                item.link?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h3 className="text-lg font-semibold text-white">
                  {item.value}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="mt-12 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-white">
            🚀 Currently Available
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            Open to full-time opportunities and freelance projects in
            WordPress development, Shopify eCommerce solutions, React.js
            applications, and SEO-focused website optimization.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rohitwebdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/devrohitnigam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaGithub size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919568228941"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Email */}
          <a
            id="social-email"
            href="mailto:rohitkumarnigam9568@gmail.com"
            aria-label="Email"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
          >
            <FaEnvelope size={22} />
          </a>

        </div>

        {/* Email Me Button */}
        <div className="flex justify-center mt-14">
          <a
            href="mailto:rohitkumarnigam9568@gmail.com"
            className="inline-flex items-center gap-3 bg-cyan-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300"
          >
            <HiOutlineMail className="text-xl" />
            Email Me
          </a>
        </div>

      </div>
    </section>
  );
}