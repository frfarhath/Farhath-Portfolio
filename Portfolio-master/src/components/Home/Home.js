import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h6 className="heading-name">
                I'M
                <strong className="main-name"> Rahman Farhath</strong>
              </h6>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Add social buttons */}
              <div style={{ paddingTop:0, paddingLeft: 45 }}>
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
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
