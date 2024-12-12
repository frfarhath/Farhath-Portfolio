import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/mock1.png";
import emotion from "../../Assets/Projects/mock2.png";
import editor from "../../Assets/Projects/mock3.png";
import chatify from "../../Assets/Projects/mock4.png";
import suicide from "../../Assets/Projects/mock5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Henna Ventures"
              description="Henna Ventures is a web-based platform built with the MERN stack that offers a range of mehendi designs, 
              online appointment scheduling, and henna product sales. Users can easily explore various henna designs, book appointments, 
              and purchase products through a seamless, responsive interface. 
              The platform is designed to enhance the customer experience with a user-friendly and efficient layout."
              ghLink="https://github.com/frfarhath/henna_ventures.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HealerZ"
              description="HealerZ is a web-based healthcare management system designed for university medical centers, 
              offering features like medical report maintenance, drug inventory management, report generation, and electronic prescriptions. 
              The platform streamlines healthcare processes, 
              making it easier for medical staff to manage patient data and prescriptions efficiently."
              ghLink="https://github.com/Pradishan/HealerZ.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LockIT"
              description="A mobile app integrates seamlessly with the LockIT Automatic Cycle Lock System, 
              allowing users to remotely control and monitor their bicycle lock. The app provides an 
              intuitive interface for users to manage their lock system with ease, enhancing bicycle security through automation. 
              The app works in conjunction with the system's Proteus 
              simulation and Arduino setup for a smooth, user-friendly experience."
                     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ChefConnect"
              description=" A recipe-sharing platform where users can CRUD (Create, Read, Update, Delete) recipes,
 manage followings and followers, create and manage user profiles, and save favorite recipes. The frontend is
 completed, and the backend is currently being developed."
  ghLink="https://github.com/frfarhath/ChefConnect.git"
 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MediCare"
              description="Medicare is a web-based healthcare platform where I developed the frontend using HTML, CSS, Bootstrap, and JavaScript. 
              It offers features like doctor consultations, 
              appointment booking, and a contact us section, providing users with a seamless and responsive experience across devices."
              
            />
          </Col>

          

       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
