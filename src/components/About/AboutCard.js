import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shiva kumar Yasala</span>
            from <span className="purple"> Hyderabad India.</span>
            <br />
            I am currently pursuing my btech second year.
            <br />
            I have completed my intermediate in tsrjc sarvail and pursuing btech in chaitanya university
            hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtube channel 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shiva Kumar Yasala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
