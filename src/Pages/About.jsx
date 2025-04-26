import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/Home10.png";
import "./Home.css";
const stats = [
  { number: "21+", label: "Time Size" },
  { number: "6+", label: "Demo Project" },
  { number: "9", label: "Services" },
];
const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0 d-none d-md-block">
          <img
            src={image}
            alt="Illustration"
            className="img-fluids"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Right Column - Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About Us</h2>
          <div
            className="mb-3 gradient-line"
            style={{
              height: "4px",
              width: "120px",
              background: "linear-gradient(to right, #ec4899, #f97316)",
              borderRadius: "2px",
            }}
          ></div>
          <p className="text-muted">
            At Least Action, we’re passionate about delivering professional
            services that go beyond expectations. Specialising in futuristic,
            user-friendly websites, we blend trust, innovation, and a genuine
            commitment to excellence to bring your vision to life.
          </p>
          <p className="text-muted">
            We serve clients of all sizes, from large corporations to solo
            entrepreneurs, working closely with them to fulfill their specific
            requirements.
          </p>

          {/* Stats */}

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center p-4 shadow-sm">
                <h4 className="fw-bold text-primary-dark">{stat.number}</h4>
                <p className="mb-0 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
