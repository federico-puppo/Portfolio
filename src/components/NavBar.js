import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Whatsapp,Github, Linkedin,FileEarmarkPerson} from "react-bootstrap-icons";
import logo from '../assets/img/frog.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href={process.env.REACT_APP_LINKEDIN} ><Linkedin color="white" size={24}/></a>
                <a href={process.env.REACT_APP_GITHUB}><Github color="white" size={24}/></a>
                <a href={process.env.REACT_APP_WHATSAPP}><Whatsapp color="white" size={24}/></a>
                <a href={process.env.REACT_APP_CV_LINK}><FileEarmarkPerson color="white" size={24} /></a>
              </div>
              <HashLink smooth to='#connect'>
                <button>Let’s Connect</button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

// <span className="navbar-text">
// <div className="social-icon">
//   <a href={process.env.REACT_APP_LINKEDIN} ><img src={iconLinkedin} alt="Linkedin" /></a>
//   <a href={process.env.REACT_APP_GITHUB}><img src={iconGithub} alt="Github" /></a>
//   <a href={process.env.REACT_APP_WHATSAPP}><Whatsapp color="white" size={24} /></a>
//   <a href={process.env.REACT_APP_CV_LINK}><img src={iconResume} alt="Resume" /></a>
// </div>