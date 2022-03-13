//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { withPrefix } from "gatsby";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//Images
import SlaLogo from "../../static/images/logos/sla.svg";
import SapienzaLogo from "../../static/images/logos/sapienza_logo.png";
import CattedraLogo from "../../static/images/logos/logo_cattedra.png";

//styles
const ImgLogoSLA = {
  width: "100px",
  marginLeft: 50,
};
const ImgLogoSapienza = {
  width: "200px",
  marginLeft: 50,
};
const ImgLogoCattedra = {
  width: "66px",
  marginLeft: 50,
};

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
          <img
            style={ImgLogoSLA}
            src={SlaLogo}
            className="d-md-inline-block align-top d-none"
            alt="Sacri lapides Aegypti"
          />
          <a href="https://www.uniroma1.it/it/pagina-strutturale/home">
            <img
              style={ImgLogoSapienza}
              src={SapienzaLogo}
              className="d-md-inline-block align-top d-none"
              alt="Sapienza Università di Roma"
            />
          </a>
          <a href="https://sites.google.com/uniroma1.it/cattedra-egittologia-sapienza">
            <img
              style={ImgLogoCattedra}
              src={CattedraLogo}
              className="d-md-inline-block align-top d-none"
              alt="Cattedra di Egittologia e Civiltà Copta Sapienza"
            />
          </a>
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
            <Nav.Link style={navLink} href={withPrefix(`/info/`)}>
              Info
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
