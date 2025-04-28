import ScrollToTopButton from "./Components/ScrollToTopButton";
import SampleProjects from "./Pages/SampleProjects";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TeamProfiles from "./Components/TeamProfiles";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import TechStack from "./Components/TechStack";
import ClientCard from "./Components/ClientCard";
import CEOIntroCard from "./Components/CEOFounder";
import Investors from "./Components/Investors";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null)
  const contactRef = useRef(null);
  const clientRef = useRef(null);
  const location = useLocation();
  const ceocardRef = useRef();
  const invRef = useRef();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        scrollToSection(homeRef);
        break;
      case "/about":
        scrollToSection(aboutRef);
        break;
      case "/services":
        scrollToSection(servicesRef);
        break;
      case "/client":
        scrollToSection(clientRef);
        break;
      case "/team":
        scrollToSection(teamRef);
        break;
      case "/contact":
        scrollToSection(contactRef);
        break;
      case "/investor":
        scrollToSection(ceocardRef);
        break;
      case "/techstack":
        scrollToSection(techstackRef);
        break;
      case "/projects":
        scrollToSection(projectsRef);
        break;
      case "/investors":
        scrollToSection(invRef);
        break;
      default:
        scrollToSection(homeRef);
        break;
    }
  }, [location]);

  return (
    <>

      <div>
        <Nav />
        <ScrollToTopButton />

        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={clientRef}>
          <ClientCard />
        </div>
        <div ref={teamRef}>
          <TeamProfiles />
        </div>
        <div ref={techstackRef}>
          <TechStack />
        </div>
        <div ref={projectsRef}>
        <SampleProjects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
         <div ref={invRef}>
          <Investors />
        </div>
          <CEOIntroCard />
        
        <Footer />
      </div>
    </>
  );
}

export default App;
