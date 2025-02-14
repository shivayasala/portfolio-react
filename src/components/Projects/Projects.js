import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="Calculator that was build using html ,css ,js and it is an responsive calculator can be useful to calculate problems in daily situations "
              ghLink="https://github.com/shivayasala/Calculator-using-html-Css-js"
              demoLink="https://shivayasala.github.io/Calculator-using-html-Css-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quiz"
              description="This is an a quiz application where you can write the javascript quiz question and also can check the score and gain the knowledge which helps you to understand about the language "
              ghLink="https://github.com/shivayasala/javascript-Quiz"
              demoLink="https://shivayasala.github.io/javascript-Quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolo"
              description="This is an a portfolio website build by me using html ,css ,and js and it is  dynamic and build to gain hands on experience on the languages ."
              ghLink="https://github.com/shivayasala/htmlCssJs-portfolio"
              demoLink="https://shivayasala.github.io/htmlCssJs-portfolio/"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
