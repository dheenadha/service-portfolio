import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Modern, responsive, and SEO-optimized websites that represent your brand and engage your audience.",
    img: "./wd.png",
    moreInfo:
      "From static landing pages to full-stack dynamic platforms, we create web experiences that captivate users and boost conversions.",
  },
  {
    title: "Mobile App Development",
    description:
      "Innovative and user-friendly mobile apps for Android and iOS that boost business growth.",
    img: "./mad.png",
    moreInfo:
      "We build performance-optimized native and cross-platform mobile applications tailored to your business needs.",
  },
  {
    title: "UI/UX Designing",
    description:
      "Designing user-friendly, secure experiences for a safer digital world.",
    img: "./ui.png",
    moreInfo:
      "Blending aesthetic design with cutting-edge security, our UI/UX approach ensures seamless, safe, user-centric digital experiences.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to streamline your business operations and enhance productivity.",
    img: "./csd.png",
    moreInfo:
      "We analyze your workflow and develop software solutions that improve performance and scalability across departments.",
  },
  {
    title: "Cloud Services",
    description:
      "Secure and scalable cloud solutions for data storage, backup, and infrastructure management.",
    img: "./cloud.png",
    moreInfo:
      "We assist in migrating to the cloud, managing cloud infrastructure, and integrating cloud-native tools for optimized performance.",
  },
  {
    title: "IT Support & Maintenance",
    description:
      "24/7 technical support and maintenance services to keep your systems running smoothly and efficiently.",
    img: "./itm.png",
    moreInfo:
      "Get proactive monitoring, instant issue resolution, and long-term IT infrastructure support.",
  },
  {
    title: "AI & ML",
    description:
      "AI and ML transform industries through automation, prediction, and innovation.",
    img: "./AIML.png",
    moreInfo:
      "We build intelligent systems that learn and adapt to your business needs.Unlock data-driven automation with cutting-edge AI & machine learning models.",
  },
  {
    title: "Blockchain",
    description:
      "Blockchain secures digital transactions through decentralized and transparent data systems.",
    img: "./blockchain.png",
    moreInfo:
      "Empower your business with decentralized apps and smart contracts.We ensure trust, transparency, and tamper-proof transactions using blockchain tech.",
  },
  {
    title: "Deep Learning",
    description:
      "Deep learning transforms data into intelligent, predictive decision systems.",
    img: "./deep Larning.png",
    moreInfo:
      "We develop neural network-based systems for complex tasks like vision and language.Achieve higher accuracy and automation with deep learning algorithms.",
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="py-3"
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#003A84" }}>
          Our Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <div
                className="glass-cards tilt-card h-100"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="border-line"></div>
                <Card className="h-100 bg-transparent text-white d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={service.img}
                    alt={service.title}
                    className="card-img-top"
                    style={{
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body
                    className="d-flex flex-column"
                    style={{ color: "#003a84" }}
                  >
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <div className="mt-auto">
                      <Button
                        className="rounded-pill fw-semibold custom-btn w-100"
                        onClick={() => handleShowModal(service)}
                      >
                        Know More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      {showModal && (
        <div className="custom-backdrop" onClick={handleCloseModal}>
          <div className="glass-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="glass-modal-content">
              <button className="modal-close-btn" onClick={handleCloseModal}>
                ×
              </button>
              <h4 className="text-white">{selectedService?.title}</h4>
              <img
                src={selectedService?.img}
                alt={selectedService?.title}
                className="img-fluids mb-3"
                style={{ borderRadius: "10px", width: "100%", height: "auto" }}
              />
              <p className="text-white">{selectedService?.description}</p>
              <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
              <p className="text-white">
                <strong>More Info:</strong> {selectedService?.moreInfo}
              </p>
              <div className="text-end mt-3">
                <Button
                  variant="light"
                  onClick={handleCloseModal}
                  className="fw-semibold"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style>{`
        .glass-cards {
          position: relative;
          padding: 2px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          WebkitBackdropFilter: blur(12px);
          box-shadow: 0 4px 12px rgba(0, 191, 255, 0.25);
          overflow: hidden;
          border-radius: 0;
        }

        .border-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .border-line::before,
        .border-line::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background-color: white;
          transition: all 1s ease;
        }

        .border-line::before {
          top: 0;
          left: 0;
          transform-origin: left;
        }

        .border-line::after {
          bottom: 0;
          right: 0;
          transform-origin: right;
        }

        .glass-cards:hover .border-line::before {
          width: 100%;
        }

        .glass-cards:hover .border-line::after {
          width: 100%;
        }

        .glass-cards:hover::before,
        .glass-cards:hover::after {
          content: '';
          position: absolute;
          height: 100%;
          width: 2px;
          background-color: white;
          transition: all 1s ease;
        }

        .glass-cards:hover::before {
          top: 0;
          left: 0;
        }

        .glass-cards:hover::after {
          top: 0;
          right: 0;
        }

        .custom-btn {
          background-color: #003A84 !important;
          border: none;
          color: white !important;
          transition: all 0.3s ease-in-out;
        }

        .custom-btn:hover {
          background-color: #0056b3 !important;
          transform: scale(1.05);
        }

        .custom-backdrop {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        .glass-modal-box {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
          border-radius: 16px;
          max-width: 500px;
          width: 90%;
          padding: 2rem;
          position: relative;
          color: white;
        }

        .modal-close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 1.5rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 576px) {
          .card-img-top {
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
