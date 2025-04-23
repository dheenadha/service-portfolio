import React from "react";
import { Card, CardContent } from "../Components/Card";
import "./CEOFounder.css";
import CEOimage from "../assets/founder1.jpg";
import cofounderimage from "../assets/vishnu.jpg";
import logo from "../assets/la.jpg"
const CEOIntroCard = () => {
  return (
    <div className="ceo-intro-container">
      <div className="ceo-intro-header-wrapper">
        <div className="ceo-intro-heading-block">
          <div className="logo-with-name"> 
            <img src={logo} alt="Least Action Logo" className="company-logo" />
            <div className="company-name">Least Action</div>
          </div>
          <h2 className="section-title">
            <span className="highlight-orange">Meet Our Founder</span> 
            <br />and{" "}
            <span className="highlight-blue">Co-Founder</span>
          </h2>
        </div>

        <div className="card-section ceo-image-angle">
          <Card className="ceo-card">
            <CardContent className="angled-card-content">
              <div className="angled-image-wrapper">
                <img src={CEOimage} alt="CEO" className="angled-image" />
              </div>
              <div className="card-text">
                <div className="card-label ceo-label-left">Founder & CEO</div>
                <h2 className="card-name">Gopinath G</h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="card-section director-image-angle">
        <Card className="director-card">
          <CardContent className="card-content">
            <div className="card-image-container">
              <img
                src={cofounderimage}
                alt="Director"
                className="card-image"
              />
              <div className="card-label director-label">Co-Founder</div>
            </div>
            <div className="card-text">
              <h2 className="card-names">Adhivishnu K</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CEOIntroCard;
