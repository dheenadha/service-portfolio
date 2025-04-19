import React, { useState } from 'react';
import './ClientCard.css';
import logoimage from "../assets/servy.png"
import img1 from "../assets/one.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/thre.jpg";
import img4 from "../assets/four.jpg";

const images = [img1, img2, img3, img4];

const ClientCard = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleButtonClick = () => {
        setSelectedIndex(0); 
    };

    const handleNext = () => {
        if (selectedIndex < images.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    return (
        <div className="topics-section">
            <h2 className="topics-heading">Client</h2>

            <div className="client-card">
                <div className="icon-wrapper">
                    <img src={logoimage} alt="client icon" className="icon" />
                </div>
                <h3 className="card-title">Servy</h3>
                <p className="card-description">
                    Servy is a leading service-based company based in Vellore, offering a variety of professional services to customers in multiple industries.
                </p>
                <div className="card-underline"></div>

                {/* <h6 className="features-heading">Key Features</h6> */}
                <h6 className="features-title">Key Features</h6>
                <div className="features-grid">
                <div className="feature-item">
                    <span className="feature-icon">🛠</span>
                    <span className="feature-text">Wide Range of Services</span>
                </div>
                <div className="feature-item">
                    <span className="feature-icon">🧩</span>
                    <span className="feature-text">Diverse Offerings</span>
                </div>
                <div className="feature-item">
                    <span className="feature-icon">🧭</span>
                    <span className="feature-text">Easy Navigation</span>
                </div>
                <div className="feature-item">
                    <span className="feature-icon">📝</span>
                    <span className="feature-text">Simple Selection Process</span>
                </div>
                </div>

                {/* <h5 className="card-clientname">Gopinath G</h5> */}
            </div>
        </div>
    );
};

export default ClientCard;
