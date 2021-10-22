import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { withPrefix } from "gatsby";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import SlaLogo from "../../static/images/logos/sla.svg";

function menuLinks() {
  return (
    <StaticQuery
      query={graphql`
        {
          allSite {
            edges {
              node {
                siteMetadata {
                  menuLinks {
                    link
                    title
                    subMenu {
                      link
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <ul>
          {data.allSite.edges.node.siteMetadata.menuLinks.map((path) => (
            <Nav.Link as="li" key={path.title}>
              <Link to={path.link}>{path.title}</Link>
              {path.subMenu && path.subMenu.length > 0 ? (
                <NavDropdown class="sub-items responsive-navbar-nav">
                  {path.subMenu.map((subpath) => (
                    <NavDropdown.Item a href={subpath.link}>
                      {subpath.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : null}
            </Nav.Link>
          ))}
        </ul>
      )}
    />
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar collapseOnSelect expand="md" className="site-navigation">
          <Navbar.Brand class="logo" href={withPrefix(`/`)}>
            <img
              src={withPrefix(`${SlaLogo}`)}
              className="logos d-inline-block align-top"
              alt="Sacri Lapides Aegypti"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul>{menuLinks}</ul>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .site-navigation {
    background-color: rgb(255, 255, 255, 0.4) !important;
    font-size: 1rem;
    font-weight: bolder;
    color: #777777;
  }
`;

export default Navigation;
