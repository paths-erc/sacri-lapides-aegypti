import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SlaLogo from "../images/3-logos/sla.svg";

//styles
const ImgLogo = {
  width: 50,
  height: 50,
  marginLeft: 50,
};

const navLink = {
  marginLeft: 30,
  marginRight: 50,
  fontWeight: 400,
  color: 777777,
};

//markup
const Header = () => {
  return (
    <Navbar fixed="top" bg="transparent" expand="lg">
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
            <NavDropdown.Item href="/1-alexandria">Alexandria</NavDropdown.Item>
            <NavDropdown.Item href="/2-aswan">Aswan</NavDropdown.Item>
            <NavDropdown.Item href="/3-dendera">Dendera</NavDropdown.Item>
            <NavDropdown.Item href="/4-canopus">Canopus East</NavDropdown.Item>
            <NavDropdown.Item href="5-elephantine">
              Elephantine
            </NavDropdown.Item>
            <NavDropdown.Item href="6-taposiris">
              Marina el-Amein
            </NavDropdown.Item>
            <NavDropdown.Item href="7-marea">Marea</NavDropdown.Item>
            <NavDropdown.Item href="/8-taposiris">Taposiris</NavDropdown.Item>
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
  );
};

export default Header;
