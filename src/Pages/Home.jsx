import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./Type";
import animationData from "./home.json";
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link} from "react-router-dom";
const Home = () => {
 
  return (
    <>
      <div className="curved-border">
        <section>
          <Container fluid className="home-section" id="home">
            <Particle />

            <Container className="home-content">
              <Row>
                <Col md={7} className="home-header">
                  <h2 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h2>

                  <h2 className="heading-name">
                    <strong className="main-name">
                      {" "}
                      We Are Developers From INDIA
                    </strong>
                  </h2>

                  <div style={{ padding: 50, textAlign: "left" }}>
                    <h1 className="diagonal-text text-uppercase p-2" style={{ fontSize: "28px" }}>
                      We Develop,{" "}
                    </h1>
                    <div className="fs-4 p-2">
                      <Type />
                    </div>
                    <p className=" fs-5 p-2">
                      We are a team of passionate individuals dedicated to
                      providing the best solutions for your needs. Our mission
                      is to simplify your life with our innovative
                      products and services.
                    </p>
                    <div className="text-center p-4 "><Link to="contact">
                      <button className="contact-us-btn text-start ">
                        Contact Us
                      </button></Link>
                    </div>
                  </div>
                </Col>

                <Col
                  md={5}
                  className="text-center d-none d-md-block"
                  style={{ paddingBottom: 30 }}
                >
                  <div style={{ width: 300, height: 300, margin: "auto" }}>
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </div>
    </>
  );
};
export default Home;
