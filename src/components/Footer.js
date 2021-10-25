//Gatsby
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//markup
const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="d-flex justify-content-center" md={3} sm={6} xs={6}>
              <Link to="https://paths-erc.eu/sacri-lapides-aegypti/">
                <StaticImage
                  src="../../static/images/logos/sla.svg"
                  width={500}
                  objectFit="scale-down"
                  title="Sacri Lapides Aegypti"
                  alt="Sacri Lapides Aegypti"
                />
              </Link>
            </Col>
            <Col md={3} sm={6} xs={6}>
              <p>
                <em>Sacri Lapides Aegypti</em>: from the scribes of temples to
                the copyists of scriptoria. The transformation of spaces of
                cult, identity and memory from pharaonic and Graeco-Roman Egypt
                to Christian Egypt
              </p>
            </Col>
            <Col md={3} sm={6} xs={6}>
              <p>
                FARE MIUR Project hosted at<br></br>
                Sapienza University of Rome<br></br>
                Chair of Egyptology and Coptic civilization<br></br>©{" "}
                {new Date().getFullYear()} Sacri Lapides Aegypti Team
                <br></br>
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY-NC-SA 4.0
                </a>
                <br></br>
              </p>
              <div className="icon">
                <a href="https://www.facebook.com/cattedraegittologiasapienza">
                  <FontAwesomeIcon icon={faFacebookSquare} fixedWidth />
                </a>
                <a href="https://www.instagram.com/egittologiasapienza/">
                  <FontAwesomeIcon icon={faInstagramSquare} fixedWidth />
                </a>
                <a href="https://twitter.com/SapientiAegypti">
                  <FontAwesomeIcon icon={faTwitterSquare} fixedWidth />
                </a>
                <a href="https://sites.google.com/uniroma1.it/cattedra-egittologia-sapienza">
                  <FontAwesomeIcon icon={faGoogle} fixedWidth />
                </a>
                <a href="https://github.com/paths-erc">
                  <FontAwesomeIcon icon={faGithub} fixedWidth />
                </a>
              </div>
            </Col>
            <Col md={3} sm={6} xs={6}>
              <p>
                Sapienza University of Rome<br></br>
                Piazzale Aldo Moro 5 - 00185 Rome. Italy<br></br>
              </p>
              <p>
                <strong>Contact:</strong>
                <br></br>
                <a href="mailto:paola.buzi@uniroma1.it">Paola Buzi (PI)</a>
                <br></br>
                <a href="mailto:julian.bogdani@uniroma1.it">Julian Bogdani</a>
                <br></br>
                <a href="mailto:domizia.derasmo@uniroma1.it">
                  Domizia D'Erasmo
                </a>
                <br></br>
              </p>
            </Col>
          </Row>
          <Row className="partners"></Row>
          <Row className="logos">
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <Link to="https://fare.miur.it/app.php">
                <StaticImage
                  src="../../static/images/logos/fare.jpeg"
                  width={400}
                  objectFit="scale-down"
                  alt="FARE Miur"
                  title="FARE MIUR"
                />
              </Link>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <Link to="https://www.uniroma1.it/it/pagina-strutturale/home">
                <StaticImage
                  src="../../static/images/logos/sapienza.jpg"
                  width={400}
                  objectFit="scale-down"
                  alt="Sapienza Università di Roma"
                  title="Sapienza Università di Roma"
                />
              </Link>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <Link to="https://sites.google.com/uniroma1.it/lad/">
                <StaticImage
                  src="../../static/images/logos/lad-blue.png"
                  width={400}
                  objectFit="scale-down"
                  alt="Laboratorio di Archeologia Digitale"
                  title="Laboratorio di Archeologia Digitale (LAD)"
                />
              </Link>
            </Col>
            <Col md={3} sm={6} xs={6} className="d-flex justify-content-center">
              <Link to="https://atlas.paths-erc.eu/">
                <StaticImage
                  src="../../static/images/logos/paths.png"
                  width={400}
                  objectFit="scale-down"
                  alt="ERC PAThs project"
                  title="ERC PAThs project"
                />
              </Link>
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
  img {
    width: 75%;
    height: 75%;
  }
  .logos img {
    padding-top: 3%;
    width: 75%;
    height: 75%;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
  .row {
    margin-top: 1rem;
  }
`;
export default Footer;
