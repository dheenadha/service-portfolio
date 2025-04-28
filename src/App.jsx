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
import Topbar from "./Topbar";
import ScrollToTop from "./ScrollToTop";
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
      {/* <Nav /> */}

      {/* <BrowserRouter>
    <Topbar/>
    <ScrollToTop />
    <ScrollToTopButton/>
        <Routes>
    */}
      {/* <Route path="/" element={<Topbar/>} > */}
      {/* <Route index element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/team" element={<TeamProfiles/>} />
    <Route path="/projects" element={<SampleProjects/>} />
    <Route path="/contact" element={<Contact/>} />
    {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="services"><Services /></div>
    <div id="team"><TeamProfiles /></div>
    <div id="projects"><SampleProjects/></div>
    <div id="contact"><Contact /></div> */}

      {/* <Footer /> */}

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
          <investors />
        </div>
        <div ref={ceocardRef}>
          <CEOIntroCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
