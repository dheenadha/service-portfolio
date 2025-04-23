import React from "react";
import image from "../assets/la.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/yourpage",
    instagram: "https://www.instagram.com/yourprofile",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    youtube: "https://www.youtube.com/@yourchannel",
  };

  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#003a84" }}
    >
      {/* Custom styles */}
      <style>{`
        .hover-white {   
          transition: opacity 0.3s;
          text-decoration: none !important; 
          
        }
        .hover-white:hover {
          text-decoration: underline !important;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
          background-color: transparent;
        }

        .social-icon:hover {
          background-color: white;
          color: #003a84 !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
        .text-uppercase{
          font-weight: 0;
          font-size: 17px;
        }
        
      `}</style>

      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 pt-2 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {Object.entries(socialLinks).map(([icon, url], idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 fs-4 text-white social-icon text-decoration-none"
            >
              <i className={`bi bi-${icon}`}></i>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h4 className="text-uppercase fw-bold mb-4">
                <img
                  src={image}
                  alt="logo"
                  width="65"
                  height="65"
                  className="rounded-circle"
                />
                <span> Least Action</span>
              </h4>
              <p>
                At Least Action, we deliver professional, user-friendly websites
                with a focus on innovation, trust, and quality — Turning your
                vision into reality.
              </p>
            </div>

            {/* Links */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">Links</h6>
              {/* {["Dashboard", "About us", "Services", "Projects"].map(
                (item, idx) => (
                  <p key={idx}>
                    <a
                      href="#!"
                      className="text-white hover-white text-decoration-none"
                    >
                      {item}
                    </a>
                  </p>
                )
              )} */}
              <p>
    <Link to="/dashboard" className="text-white hover-white text-decoration-none">
      Dashboard
    </Link>
  </p>
  <p>
    <Link to="/about" className="text-white hover-white text-decoration-none">
      About
    </Link>
  </p>
  <p>
    <Link to="/services" className="text-white hover-white text-decoration-none">
      Services
    </Link>
  </p>
  <p>
    <Link to="/projects" className="text-white hover-white text-decoration-none">
      Projects
    </Link>
  </p>
            </div>

            {/* Guides */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Guides</h6>
              <p>
    <Link to="/dashboard" className="text-white hover-white text-decoration-none">
    Get start
    </Link>
  </p>
  <p>
    <Link to="/contact" className="text-white hover-white text-decoration-none">
    Contact us
    </Link>
  </p>
  <p>
    <Link to="/contact" className="text-white hover-white text-decoration-none">
    FAQ
    </Link>
  </p>
  <p>
    <Link to="/contact" className="text-white hover-white text-decoration-none">
    Help
    </Link>
  </p>
              {/* {["Get start", "Contact us", "FAQ", "Help"].map((item, idx) => (
                <p key={idx}>
                  <a
                    href="#!"
                    className="text-white hover-white text-decoration-none"git 
                  >
                    {item}
                  </a>
                </p>
              ))} */}
            </div>

            {/* Contact Info */}
            <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-geo-fill me-2"></i>
                No. 9, Thendral Nagar, <br />
                <span className="p-4"> Sathuvachari, Vellore - 632009</span>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=leastactioncompany@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover-white text-decoration-none"
                >
                  leastactioncompany@gmail.com
                </a>
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a
                  href="tel:+918825965775"
                  className="text-white hover-white text-decoration-none"
                >
                  +91 88259 65775
                </a>
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a
                  href="tel:+919597366741"
                  className="text-white hover-white text-decoration-none"
                >
                  +91 95973 66741
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a
          className="text-white hover-white fw-bold ms-1 text-decoration-none"
          href="https://leastaction.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leastaction.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
