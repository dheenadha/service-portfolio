import "./investors.css"
import React from "react";
import investor1 from "../assets/Saranya.jpg";
import investor2 from "../assets/Kathi.jpg";
import { PiBuildings } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Investors = () => {
  return (
    <div className="investors-container">
      <h1 className="investors-title">Investors</h1>
      <div className="investor-cards-container">
        {/* Card 1 */}
        <div className="investor-card">
          <div className="investor-img-container">
            <img
              src={investor1}
              alt="Person 1"
              className="investor-img"
            />
          </div>

          <h2 className="investor-name  ">G.Saranya</h2>
          <div className="investor-contact fs-5">
           
            <p><MdOutlineEmail className="fs-4" />Sagoinvest@gmail.com</p>
          </div>

          <div className="investor-company fs-4">
           
            <p><PiBuildings className="fs-4" />SG Groups</p>
          </div>

          <div className="investor-location fs-2">
           
            <p ><FaLocationDot className="fs-5"/>Vellore</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="investor-card">
          <div className="investor-img-container">
            <img
              src={investor2}
              alt="Person 2"
              className="investor-img"
            />
          </div>
          <h2 className="investor-name">A.Kathiravan</h2>

          <div className="investor-contact fs-5">
            
            <p><MdOutlineEmail className="fs-4" />asaikathir@gmail.com</p>
          </div>

          <div className="investor-company fs-5">
          
            <p><PiBuildings className="fs-4" />Sri Durgaiamman Constructions</p>
          </div>

          <div className="investor-location fs-5">
          
            <p><FaLocationDot className="fs-5"/>Kallakurichi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
