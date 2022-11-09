import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/frog.svg";
import { Whatsapp, Github, Linkedin } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <a href="#aboutme"><img src={logo} alt="Logo" /></a>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href={process.env.REACT_APP_LINKEDIN} ><Linkedin color="white" size={24} /></a>
                <a href={process.env.REACT_APP_GITHUB}><Github color="white" size={24} /></a>
                <a href={process.env.REACT_APP_WHATSAPP}><Whatsapp color="white" size={24} /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}
