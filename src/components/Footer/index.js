import "./style.scss";
import logo from "../../assets/img/frog.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Whatsapp, Github, Linkedin, HouseUp } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#aboutme">
              <img src={logo} alt="Logo" />
            </a>
            <span href="#aboutme">why a frog?</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#aboutme">
                <HouseUp color="white" size={24} />
              </a>
              <a
                href={process.env.REACT_APP_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin color="white" size={24} />
              </a>
              <a
                href={process.env.REACT_APP_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color="white" size={24} />
              </a>
              <a
                href={process.env.REACT_APP_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp color="white" size={24} />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
