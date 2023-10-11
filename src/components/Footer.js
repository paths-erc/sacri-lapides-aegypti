import React from "react";

import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";

//markup
const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <Container>
          <Row className="d-flex justify-content-center">

            <Col className="d-flex justify-content-center" md={3} sm={6} xs={6}>
              <Link to="/">
                <StaticImage
                  src="../../static/images/logos/sla.svg"
                  width={300}
                  objectFit="cover"
                  title="Sacri Lapides Aegypti"
                  alt="Sacri Lapides Aegypti"
                />
              </Link>
            </Col>

            <Col md={3} sm={6} xs={6}>
              <p className="project-name">
                “<em>Sacri lapides Aegypti</em>”: from the scribes of temples to
                the copyists of scriptoria. The transformation of spaces of
                cult, identity and memory from pharaonic and Graeco-Roman Egypt
                to Christian Egypt
              </p>
            </Col>

            <Col md={3} sm={6} xs={6}>
              <p>
                FARE MIUR Project hosted at
                Sapienza University of Rome
                Chair of Egyptology and Coptic civilization                
              </p>
              <p>
                <a
                  href="https://saras.uniroma1.it/"
                  alt="saras-uniroma1"
                  title="saras-uniroma1"
                >
                  Dept. of History, Anthropology, Religions, Arts and
                  Perfoming Arts
                </a>
              </p>

              <p>
                &copy; {new Date().getFullYear()}{" "}
                <em>Sacri lapides Aegypti</em> Team
                <br />
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  alt="by-nc-sa-4.0"
                  title="by-nc-sa-4.0"
                >
                  CC BY-NC-SA 4.0
                </a>
              </p>
              <div className="icon">
                <a
                  href="https://www.facebook.com/cattedraegittologiasapienza"
                  alt="fb-egittologia-sapienza"
                  title="fb-egittologia-sapienza"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/egittologiasapienza/"
                  alt="ig-egittologia-sapienza"
                  title="ig-egittologia-sapienza"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/SapientiAegypti"
                  alt="tw-egittologia-sapienza"
                  title="tw-egittologia-sapienza"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://sites.google.com/uniroma1.it/cattedra-egittologia-sapienza"
                  alt="google-egittologia-sapienza"
                  title="google-egittologia-sapienza"
                >
                  <FaGoogle />
                </a>
                <a
                  href="https://github.com/paths-erc"
                  alt="github-egittologia-sapienza"
                  title="github-egittologia-sapienza"
                >
                  <FaGithub />
                </a>
              </div>
            </Col>
            <Col md={3} sm={6} xs={6}>
              <p>
                Sapienza University of Rome
                <br />
                Piazzale Aldo Moro 5 - 00185 Rome Italy
                <br />
              </p>
              <p>
                <strong>Contact:</strong>
                <br />
                <a href="mailto:paola.buzi@uniroma1.it">Paola Buzi (PI)</a>
                <br />
                <a href="mailto:julian.bogdani@uniroma1.it">Julian Bogdani</a>
                <br />
                <a href="mailto:domizia.derasmo@uniroma1.it">
                  Domizia D'Erasmo
                </a>
              </p>
            </Col>
          </Row>
          <Row className="my-5 logos">
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <a
                href="https://fare.miur.it/app.php"
                title="Progetto FARE -  MIUR"
              >
                <StaticImage
                  src="../../static/images/logos/fare.jpeg"
                  width={200}
                  objectFit="scale-down"
                  alt="FARE Miur"
                  title="FARE MIUR"
                />
              </a>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <a
                href="https://www.uniroma1.it/"
                title="Sapienza Università di Roma"
              >
                <StaticImage
                  src="../../static/images/logos/sapienza.jpg"
                  width={200}
                  objectFit="scale-down"
                  alt="Sapienza Università di Roma"
                  title="Sapienza Università di Roma"
                />
              </a>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <a
                href="https://lad.saras.uniroma1.it"
                title="LAD: Laboratorio di Archeologia Digitale alla Sapienza"
                alt="lad-sapienza"
              >
                <StaticImage
                  src="../../static/images/logos/lad-blue.png"
                  width={200}
                  objectFit="scale-down"
                  alt="Laboratorio di Archeologia Digitale"
                  title="Laboratorio di Archeologia Digitale (LAD)"
                />
              </a>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <a
                href="https://atlas.paths-erc.eu/"
                alt="paths-erc"
                title="PAThs: Archaeological Atlas of Coptic Literature"
              >
                <StaticImage
                  src="../../static/images/logos/paths.png"
                  width={200}
                  objectFit="scale-down"
                  alt="ERC PAThs project"
                  title="ERC PAThs project"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  footer {
    position: relative;
    z-index: 5;
    padding: 5em 0;
  }
  .footer:before {
    content: "";
    width: 100%;
    height: 240px;
    z-index: -1;
    top: 0px;
    background-color: #fff;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
  }
  a {
    color: #777777;
    font-weight: 300;
  }
  a:hover {
    color: #822433;
    font-weight: bold;
    margin: 0;
  }
  .icon a {
    display: inline-grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 5px;
  }
  p {
    font-family: "Roboto Condensed", sans-serif;
    color: #777777;
    font-size: 1rem;
    font-weight: 300;
  }
  .project-name {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #822433;
  }
`;
export default Footer;
