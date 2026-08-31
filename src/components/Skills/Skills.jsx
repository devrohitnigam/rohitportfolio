import {
  FaReact,
  FaWordpress,
  FaShopify,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaDocker,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiElementor,
  SiWoocommerce,
  SiWebflow,
  SiWix,
  SiPhp,
  SiMysql,
  SiPostman,
  SiGoogleanalytics,
} from "react-icons/si";

const skills = [
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Shopify", icon: <FaShopify /> },
  { name: "Wix", icon: <SiWix /> },
  { name: "Webflow", icon: <SiWebflow /> },

  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },

  { name: "Core PHP", icon: <SiPhp /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "REST API", icon: <SiPostman /> },

  { name: "WooCommerce", icon: <SiWoocommerce /> },
  { name: "Elementor", icon: <SiElementor /> },

  { name: "Docker", icon: <FaDocker /> },
  { name: "CI/CD Pipeline", icon: <FaGithub /> },
  { name: "GitHub", icon: <FaGithub /> },
  
  { name: "SEO", icon: <SiGoogleanalytics /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-cyan-400 uppercase tracking-[4px] text-center font-semibold">
          MY SKILLS
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Technologies I <span className="text-cyan-400">Work With</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-center mt-6">
          I build modern websites, eCommerce stores and web applications using
          the latest technologies and industry best practices.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="text-5xl text-cyan-400 group-hover:scale-125 group-hover:rotate-6 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="mt-4 text-center text-white font-medium text-sm">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">4+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">30+</h3>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">20+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}