import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SlaLogo from "../../static/images/logos/sla.svg";

//markup
const Header = () => {
  return (
    <Wrapper>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href={withPrefix(`/`)}>
          <img
            className="logo"
            src={withPrefix(`${SlaLogo}`)}
            className="d-inline-block align-top"
            alt="Sacri Lapides Aegypti"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="nav-link" href={withPrefix(`/`)}>
              HOME
            </Nav.Link>
            <NavDropdown
              className="nav-link"
              title="PLACES"
              id="basic-nav-dropdown"
            >
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
              <NavDropdown.Item href={withPrefix(`/marina/`)}>
                Marina el-Amein
              </NavDropdown.Item>
              <NavDropdown.Item href={withPrefix(`/taposiris/`)}>
                Taposiris
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-link" href={withPrefix(`/team/`)}>
              TEAM
            </Nav.Link>
            <Nav.Link className="nav-link" href={withPrefix(`/news/`)}>
              NEWS
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
    background-color: rgb(255, 255, 255, 0.4) !important;
    font-size: 1rem;
    font-weight: bolder;
    color: #777777;
  }
  .logo {
    width: "100px";
    margin-left: 50;
  }
  .nav-link {
    margin-left: 1rem;
    margin-right: 1rem;
    font-weight: 400;
  }
`;
export default Header;
