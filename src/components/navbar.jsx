import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import githubIcon from '../assets/gitt.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import { BrowserRouter as Router } from "react-router-dom";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import { HashLink } from 'react-router-hash-link';



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container className="containerr">
          <NavbarBrand href="#home">
            Portfolio
          </NavbarBrand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => updateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yash-sharma-b378771ba/">  
                  <img src={linkedin} alt="linkedin"  />
                </a>
                <a href="https://github.com/">
                <img src={githubIcon} alt="githubLink" />
                </a>
                <a href="https://twitter.com/Yash_2862">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>

              <HashLink to='#connect'>

              <button className="vvd" >
                <span>Let's Connect</span>
              </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;
