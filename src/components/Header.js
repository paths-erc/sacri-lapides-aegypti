import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SlaLogo from "../images/3-logos/sla.svg";

//styles
const ImgLogo = {
  width: "100px",
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
        <Navbar.Brand href="/">
          <img
            style={ImgLogo}
            src={SlaLogo}
            className="d-inline-block align-top"
            alt="Sacri Lapides Aegypti"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={navLink} href="/">
              HOME
            </Nav.Link>
            <NavDropdown style={navLink} title="PLACES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/alexandria/">
                Alexandria
              </NavDropdown.Item>
              <NavDropdown.Item href="/aswan/">Aswan</NavDropdown.Item>
              <NavDropdown.Item href="/dendera/">Dendera</NavDropdown.Item>
              <NavDropdown.Item href="/east-canopus/">
                Canopus East
              </NavDropdown.Item>
              <NavDropdown.Item href="/elephantine/">
                Elephantine
              </NavDropdown.Item>
              <NavDropdown.Item href="/marea/">Marea</NavDropdown.Item>
              <NavDropdown.Item href="/marina/">
                Marina el-Amein
              </NavDropdown.Item>
              <NavDropdown.Item href="/taposiris/">Taposiris</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={navLink} href="/team">
              TEAM
            </Nav.Link>
            <Nav.Link style={navLink} href="/news">
              NEWS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .navbar {
    background-color: rgb(255, 255, 255, 0.4) !important;
    font-size: 1rem;
    font-weight: bolder;
    color: #777777;
  }
`;
export default Header;
