import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>Rohit Nigam</strong>. All Rights
          Reserved.
        </p>

        <p>
          Designed & Developed with ❤️ using React • Thanks for visiting my
          portfolio.
        </p>
      </div>

    </footer>
  );
};

export default Footer;