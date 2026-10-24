import {
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

const experience = [
  {
    year: "April 2026 - Present",
    title: "Senior Web Developer",
    company: "SNA Web Technologies",
    description:
      "Developing WordPress, Shopify, React, Next.js and custom web applications while delivering SEO-friendly and high-performance websites.",
  },
  {
    year: "February 2023 - February 2026",
    title: "Web Developer",
    company: "Web DigiTech IT Solutions",
    description:
      "Developed and maintained responsive websites and online stores using WordPress, Shopify, and Wix, with a focus on speed optimization, usability, and SEO best practices.",
  },
];

const education = [
  {
    year: "2020 - 2023",
    title: "Bachelor's Degree",
    company: "Your University",
    description:
      "Completed graduation while building strong knowledge in web technologies and programming.",
  },
  {
    year: "2018 - 2020",
    title: "Higher Secondary",
    company: "Your School",
    description:
      "Focused on computer science fundamentals and mathematics.",
  },
  {
    year: "2017 - 2018",
    title: "Secondary Education",
    company: "Your School",
    description:
      "Completed foundational education with excellent academic performance.",
  },
];

function Card({ item, icon }) {
  return (
    <div className="relative pl-10 pb-10">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-cyan-500/30"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black shadow-lg shadow-cyan-500/40">
        {icon}
      </div>

      {/* Card */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]">
        <div className="flex items-center gap-2 text-cyan-400 text-sm">
          <FaCalendarAlt />
          {item.year}
        </div>

        <h3 className="text-2xl font-bold mt-3">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 mt-2">
          <FaBuilding />
          {item.company}
        </div>

        <p className="text-gray-400 mt-4 leading-7">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <p className="text-cyan-400 uppercase tracking-[4px] text-center font-semibold">
          My Journey
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Experience & <span className="text-cyan-400">Education</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6 leading-8">
          My professional journey includes hands-on experience in web
          development, eCommerce solutions, and continuous learning to build
          modern digital experiences.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Experience */}

          <div>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaBriefcase />
              </div>

              <h3 className="text-3xl font-bold">
                Work Experience
              </h3>
            </div>

            {experience.map((item, index) => (
              <Card
                key={index}
                item={item}
                icon={<FaBriefcase size={13} />}
              />
            ))}

          </div>

          {/* Education */}

          <div>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaGraduationCap />
              </div>

              <h3 className="text-3xl font-bold">
                Education
              </h3>
            </div>

            {education.map((item, index) => (
              <Card
                key={index}
                item={item}
                icon={<FaGraduationCap size={13} />}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
