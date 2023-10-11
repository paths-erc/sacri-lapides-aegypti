import React from "react";

import styled from "styled-components";
import { withPrefix } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { StaticImage } from "gatsby-plugin-image";

const navLink = {
  marginLeft: "1rem",
  marginRight: "1rem",
  fontWeight: 400,
};

//markup
const Header = () => {
  return (
    <Wrapper>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href={withPrefix(`/`)}>
          <StaticImage
              src="../../static/images/logos/sla.svg"
              width={100}
              title="Sacri Lapides Aegypti"
              alt="Sacri Lapides Aegypti"
              className="ms-3"
            />
        </Navbar.Brand>
        <Navbar.Brand href="https://www.uniroma1.it/">
          <StaticImage
              src="../../static/images/logos/sapienza_logo.png"
              width={200}
              title="Sacri Lapides Aegypti"
              alt="Sacri Lapides Aegypti"
              className="ms-3"
            />
        </Navbar.Brand>
        <Navbar.Brand href="https://sites.google.com/uniroma1.it/cattedra-egittologia-sapienza">
          <StaticImage
              src="../../static/images/logos/logo_cattedra.png"
              width={66}
              title="Sacri Lapides Aegypti"
              alt="Sacri Lapides Aegypti"
              className="ms-3"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={navLink} href={withPrefix(`/`)}>
              Home
            </Nav.Link>
            <NavDropdown style={navLink} title="Places" id="basic-nav-dropdown">
              <NavDropdown.Item href={withPrefix(`/alexandria/`)}>
                Alexandria
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/aswan/`)}>
                Aswan
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/dendera/`)}>
                Dendera
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/east-canopus/`)}>
                Canopus East
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/elephantine/`)}>
                Elephantine
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/marea/`)}>
                Marea
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/marina-el-alamein/`)}>
                Marina el-Alamein
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/taposiris/`)}>
                Taposiris
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/thebes/`)}>
                Thebes
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={navLink} href={withPrefix(`/team/`)}>
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .navbar {
    font-family: "Roboto Condensed", sans-serif;
    background-color: rgb(255, 255, 255, 0.4) !important;
    font-size: 1.2rem;
    font-weight: bolder;
    color: #777777;
  }
  .navbar-toggler-icon {
    width: 1em;
    height: 1em;
  }
`;
export default Header;
