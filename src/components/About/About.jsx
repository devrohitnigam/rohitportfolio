import aboutImg from "../../assets/dp.jpeg";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Rohit Nigam" />
        </div>

        <div className="about-content">

          <span className="section-tag">About Me</span>

          <h2>
            <strong>Passionate Web Developer Dedicated to Building Modern Websites</strong>
          </h2>

          <p>
            Hello! I'm <strong>Rohit Nigam</strong>, a passionate Web Developer
            specializing in WordPress, Shopify, React, and Next.js. I enjoy
            transforming ideas into fast, responsive, and user-friendly websites
            that help businesses establish a strong online presence.
          </p>

          <p>
            With experience in website development, frontend technologies, SEO,
            and performance optimization, I focus on creating websites that not
            only look great but also deliver real business results.
          </p>

          <div className="about-info">

            <div>
              <h3><strong>Experience</strong></h3>
              <p>4+ Years</p>
            </div>

            <div>
              <h3><strong>Projects</strong></h3>
              <p>100+ Completed</p>
            </div>

            <div>
              <h3><strong>Location</strong></h3>
              <p>Noida, UP, INDIA</p>
            </div>

          </div>

          <a href="#contact" className="about-btn">
            Let's Talk
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;