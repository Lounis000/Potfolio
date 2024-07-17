// src/components/Footer.js
import { Container, Row, Col } from "react-bootstrap";
import { FeedbackForm } from "./FeedbackForm";  // Mettre à jour cette ligne
import logo from "../assets/img/logo-Lounis.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer" id="feedbackForm">
      <Container>
        <Row className="align-items-center">
          <FeedbackForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lounis-bourouina-431a2b204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgx33F1wwQTWJgX%2BXvfx8NA%3D%3D"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/lounis.bourouina.9"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/lounis_bourouina/"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://github.com/Lounis000"><img src={navIcon4} alt="GitHub" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
