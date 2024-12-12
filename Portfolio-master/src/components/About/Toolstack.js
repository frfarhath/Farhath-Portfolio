import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiCanva,
  SiApachenetbeanside,
  SiOverleaf,
} from "react-icons/si";
import { DiGit, DiGithub } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Version Control Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>

      {/* Code Editors and Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Design and Documentation Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

      {/* IDE and UML Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOverleaf />
      </Col>
    </Row>
  );
}

export default Toolstack;
