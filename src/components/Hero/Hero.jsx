import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Icons */}
      <div className="bg-icons">
        <span>&lt;/&gt;</span>
        <span>{`{ }`}</span>
        <span>⚛</span>
        <span>&lt;div&gt;</span>
        <span>JS</span>
        <span>CSS</span>
      </div>

      <div className="container pt-30">
        <div className="hero-content">

          <p className="hero-subtitle">
            👋 Hi, I'm <span>Website Developer</span>
          </p>

          <h1 className="hero-title">
            I Build
            <br />

            <span className="typing">
              <Typewriter
                words={[
                  "WordPress Websites",
                  "Shopify Stores",
                  "React Applications",
                  "Next.js Projects",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1800}
              />
            </span>
          </h1>

          <p className="hero-description">
            I create fast, responsive, SEO-friendly websites and web
            applications that help businesses grow online and deliver an
            exceptional user experience.
          </p>

          <div className="hero-btns justify-center pl-3 pr-3">
            <button className="primary-btn">
              <a
                href="/#journey">
              Hire Me
            </a>
            </button>
        </div>

      </div>
    </div>
    </section >
  );
};

export default Hero;