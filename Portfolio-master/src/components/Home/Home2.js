import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Img.jpg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple">INTRODUCE</span> MYSELF
  </h1>
  <p className="home-about-body">
    I am a final year undergraduate at <b className="purple">Uva Wellassa University of Sri Lanka</b>, pursuing a degree in <b className="purple">Computer Science and Technology</b>. I am passionate about learning new technologies and tools to expand my skill set. 🤓
    <br />
    <br />I am fluent in the <i>
      <b className="purple">MERN Stack</b>
    </i>, including <b className="purple">MongoDB</b>, <b className="purple">Express.js</b>, <b className="purple">React.js</b>, and <b className="purple">Node.js</b>.
    <br />
    <br />My field of interests includes Web Technologies, Mobile Application Development, and AI/ML.
    <br />
    <br />Whenever possible, I enjoy applying my knowledge to create innovative solutions and explore new tools and technologies.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
            <img 
  src={myImg} 
  className="img-fluid" 
  alt="avatar" 
  style={{ height: '400px', width: '250px' }} 
/>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/frfarhath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahman-farhath-a3062a29b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/frfarha_21/profilecard/?igsh=a2xnYndiZ3NncmJu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
