import React from "react";
import "./TechStack.css";
import image from "../assets/techstack.jpg";
const techStack = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    { name: "REST API", icon: "https://img.icons8.com/ios-filled/50/api.png" },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Python",
      icon: "https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png",
    },
  ],
  Design: [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Premiere Pro",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "pycharm",
      icon: "https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png",
    },
    {
      name: "Cardano",
      icon: "https://www.cryptologos.cc/logos/cardano-ada-logo.png?v=040",
    },
    {
      name: "pytorch",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw8U_gkEmwPun7UlQDuqrQEoExdlVLhBXzRto5FMGhOjQqRcXT-x1Gj7zVS2HVJim-U4&usqp=CAU",
    },
  ],
};

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="container-fluid py-5 scroll-item">
        <div className="row w-100 align-items-center justify-content-center px-5">
          {/* Left: Info */}
          <div className="col-md-5 px-60">
            <h2 className="display-5 fw-bold mb-4">Our Tech Stack</h2>
            <p>
            Our tech stack is built for performance, creativity, and scalability. On the frontend, we use HTML5, CSS3, and JavaScript to craft responsive and engaging user interfaces tailored to modern web standards. The backend is powered by Java and PostgreSQL, delivering secure, high-performance server-side logic and reliable data management. For design, we utilize industry-leading tools like Figma, Adobe XD, and Photoshop to create intuitive, user-friendly interfaces and polished visuals. This combination ensures a smooth workflow from concept to deployment, enabling us to build visually striking and functionally strong digital products that deliver real value to users.
            </p>
            <img
                       src={image}
                       alt="Illustration"
                       className="img-tech"
                      
                     />
               
            
          </div>

          {/* Right: Tech Cards */}
          <div className="col-md-6 offset-md-1 px-3">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h5 className={`text-capitalize ${category}-title`}>
                  {category}
                </h5>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  {items.map((tech, index) => (
                    <div key={index} className="glass-card">
                      <img src={tech.icon} alt={tech.name} />
                      <small>{tech.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
