import "./style.scss";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  Whatsapp,
  Github,
  Linkedin,
  FileEarmarkPerson,
  Translate,
  Envelope,
  Briefcase,
  Sliders,
  ChatSquareHeart,
} from "react-bootstrap-icons";
import logo from "../../assets/img/frog.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavBar = (props) => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar
        id="navbar"
        expand="md"
        className={scrolled ? "scrolled" : ""}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#aboutme">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link
                href="#aboutme"
                className={
                  activeLink === "aboutme"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutme")}
              >
                <span>
                  <ChatSquareHeart size={20} /> {t("common.about")}
                </span>
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                <span>
                  <Sliders size={20} /> {t("common.skill")}
                </span>
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                <span>
                  <Briefcase size={20} /> {t("common.project")}
                </span>
              </Nav.Link>
              <Nav.Link
                className="navbar-link"
                onClick={() => props.changeLanguage()}
              >
                <span>
                  <Translate size={20} /> {t("common.language")}
                </span>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href={process.env.REACT_APP_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={process.env.REACT_APP_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href={process.env.REACT_APP_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp size={24} />
                </a>
                <a
                  href={process.env.REACT_APP_CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileEarmarkPerson size={24} />
                </a>
              </div>
              <HashLink smooth to="#connect">
                <button onClick={() => onUpdateActiveLink("home")}>
                  {t("common.connect")} <Envelope size={24} />
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
