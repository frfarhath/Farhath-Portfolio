import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahman Farhath </span>
            from <span className="purple">Sri Lanka.</span>
            <br />
            I am a final-year <span className="purple">Computer Science and Technology </span>undergraduate at <span className="purple">Uva Wellassa University.</span>
            <br />
            I also hold an Advanced Diploma in <span className="purple">Robotics Technology and Telecommunication</span> from <span className="purple">Ceylon Robotics Industries.</span>
            <br />
            I did my G. C. E. Advanved Level at <span className="purple">Dhammissara National College</span>, where I studied <span className="purple">ICT, Combined Maths, and Physics</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My love for my work fuels my curiosity, driving me to improve and grow every single day!"{" "}
          </p>
          <footer className="blockquote-footer">Rahman Farhath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
