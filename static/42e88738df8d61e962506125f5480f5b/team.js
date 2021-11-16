//React
import React from "react";

//Gatsby
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Helmet from "react-helmet";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Component
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";
import Title from "../components/Title";

//markup
const Team = () => {
  return (
    <Layout>
      <Helmet>
        <title>Team</title>
        <meta
          name="keywords"
          content="sla, sacri lapides aegypti, team, sapienza università di roma, egyptology, archaeology, late antique egypt, egyptian topography"
        ></meta>
        <meta name="robots" description="index" />
      </Helmet>
      <HeaderImage title="Team" />
      <Wrapper>
        <section className="section bottom-slant-gray">
          <Container className="container-one">
            <Row>
              <Col sm={4}>
                <StaticImage
                  src="../../static/images/other/paola-buzi.png"
                  width={300}
                  objectFit="scale-down"
                  alt="Paola Buzi"
                  title="Paola Buzi"
                />
              </Col>
              <Col sm={8}>
                <Title title="Paola Buzi" />
                <p>
                  Paola Buzi is Full Professor of Egyptology and Coptic Studies
                  and Honorary Professor of the same disciplines at Hamburg
                  University (since 2017). She has studied at Sapienza under the
                  supervision of Alessandro Roccati and Tito Orlandi. In 2002
                  she obtained a PhD in Egyptology from the same university,
                  with a dissertation entitled “
                  <em>Titles and Authors in the Coptic Literature</em>”. She has
                  worked as a fixed term lecturer (“assegnista di ricerca”) in
                  the Department of Archaeology of Bologna for five years and
                  from January 2010 she works on behalf of the Akademie der
                  Wissenschfaten zu Göttingen at Hamburg University cataloguing
                  the Coptic manuscripts preserved in the German collections.
                  She sits on the Board of the International Association of
                  Coptic Studies (IACS) and is a member of both International
                  Associations of Egyptologists and the Academia Ambrosiana. She
                  combines historical, literary and codicological interests with
                  archaeological activities. Among her recent publications:
                  <em>
                    La letteratura egiziana antica. Opere, generi, contesti,
                  </em>
                  Roma 2020 (Carocci) and (with Enrico Giorgi)
                  <em>
                    The Urban Landscape of Bakchias. A Town of the Fayyūm from
                    the Ptolemaic-Roman Period to Late Antiquity,{" "}
                  </em>
                  Oxford 2020 (Archaeopress).
                  <ul>
                    <li>
                      She is the Principal Investigator of the ERC Advanced
                      Grant
                      <a href="https://atlas.paths-erc.eu/">
                        “PAThs - Tracking Papyrus and Parchment “PAThs”: an
                        Archaeological Atlas of Coptic Literature”
                      </a>
                      project
                    </li>
                    <li>
                      She is the Principal Investigator of the FARE MIUR
                      <a href="https://paths-erc.eu/sacri-lapides-aegypti/">
                        “<em>Sacri lapides Aegypti</em>: from the scribes of
                        temples to the copyists of scriptoria. The
                        transformation of spaces of cult, identity and memory
                        from pharaonic and Graeco-Roman Egypt to Christian
                        Egypt”
                      </a>
                      project
                    </li>
                    <li>
                      She is the Director of the joint archaeological mission
                      (Sapienza University of Rome - Sudanese Ministry of
                      Antiquities ) at the temple of Hugair Gubli, Sudan
                    </li>
                    <li>
                      She is the Director of the{" "}
                      <a href="https://digilab.uniroma1.it/">
                        DigiLab research centre
                      </a>
                    </li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section methods">
          <Container className="container-two">
            <Row>
              <Col sm={8}>
                <Title title="Julian Bogdani" align="right" />
                <p className="text-container">
                  Julian Bogdani is a researcher of Metodologie della Ricerca
                  Archeologica (L-ANT/10) at Sapienza University of Rome where
                  he also founded the{" "}
                  <a
                    href="http://purl.org/lad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Laboratory of Digital Archaeology (LAD)
                  </a>
                  . He teaches in Sapienza Digital Humanities and Digital
                  Archaeology. Since 2021, he has been director of the
                  archaeological mission at Çuka e Ajtoit, Albania.
                </p>
              </Col>
              <Col sm={4}>
                <StaticImage
                  src="../../static/images/other/julian-bogdani.png"
                  width={300}
                  objectFit="scale-down"
                  alt="Julian Bogdani"
                  title="Julian Bogdani"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bottom-slant-gray">
          <Container className="container-three">
            <Row>
              <Col sm={4}>
                <StaticImage
                  src="../../static/images/other/domizia-derasmo.png"
                  width={300}
                  objectFit="scale-down"
                  alt="Domizia D'Erasmo"
                  title="Domizia D'Erasmo"
                />
              </Col>
              <Col sm={8}>
                <Title title="Domizia D'Erasmo" />
                <p>
                  Domizia D'Erasmo is a research fellow in Metodologie della
                  Ricerca Archeologica (L-ANT/10) at Sapienza University of
                  Rome. She is a member of the archaeological mission at the
                  temple of Hugair Gubli, Sudan (PI: Paola Buzi) and of the one
                  at the site of Çuka e Ajtoit, Albania (PI: Julian Bogdani).
                  She is tutor of the{" "}
                  <a
                    href="http://purl.org/lad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Laboratory of Digital Archaeology (LAD)
                  </a>
                  directed by Julian Bogdani
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section methods">
          <Container className="container-two">
            <Row>
              <Col sm={8}>
                <Title title="Serena Guidone" align="right" />
                <p></p>
              </Col>
              <Col sm={4}></Col>
            </Row>
          </Container>
          <section className="section bottom-slant-gray">
            <Container className="container-three">
              <Row>
                <Col sm={4}>
                  <StaticImage
                    src="../../static/images/other/valeria-parisi.png"
                    width={300}
                    objectFit="scale-down"
                    alt="Valeria Parisi"
                    title="Valeria Parisi"
                  />
                </Col>
                <Col sm={8}>
                  <Title title="Valeria Parisi" />
                  <p>
                    Valeria Parisi is a Research Fellow (Tipo A) - Classical
                    Archaeology (SSD L-ANT/07) - at the University of Campania
                    "Luigi Vanvitelli"
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section methods">
            <Container className="container-two">
              <Row>
                <Col sm={8}>
                  <Title title="Marta Addessi" align="right" />
                  <p>
                    Marta Addessi is a research fellow in Egyptology and Coptic
                    Civilization (L-OR/02) at Sapienza University of Rome. Her
                    research interests mainly concern the study of Coptic
                    philology and literature
                  </p>
                </Col>
                <Col sm={4}>
                  <StaticImage
                    src="../../static/images/other/marta-addessi.png"
                    width={300}
                    objectFit="scale-down"
                    alt="Marta Addessi"
                    title="Marta Addessi"
                  />
                </Col>
              </Row>
            </Container>
            <section className="section bottom-slant-gray">
              <Container className="container-three">
                <Row>
                  <Col sm={4}>
                    {/* <StaticImage
                      src="../../static/images/other/"
                      width={300}
                      objectFit="scale-down"
                      atl=""
                      title=""
                    /> */}
                  </Col>
                  <Col sm={8}>
                    <Title title="Elisabetta Falduto" />
                    <p></p>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
        </section>
      </Wrapper>
    </Layout>
  );
};

//styles
const Wrapper = styled.section`
  a {
    color: #777777;
  }
  a:hover {
    color: #822433;
    font-weight: bold;
    margin: 0;
  }
  section {
    position: relative;
    z-index: 2;
  }
  ul {
    padding-top: 2rem;
  }
  li {
    padding-top: 1rem;
  }
  p {
    line-height: 1.5rem;
  }
  .bottom-slant-gray {
    position: relative;
    background-color: #f8f9fa;
  }
  .bottom-slant-gray:after {
    content: "";
    width: 100%;
    height: 240px;
    background: #fff;
    z-index: -1;
    bottom: -240px;
    background-color: #f8f9fa;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
  }
  .bottom-slant-gray:before {
    content: "";
    width: 100%;
    height: 240px;
    background: #f8f9fa;
    z-index: -1;
    top: 0px;
    background-color: #f8f9fa;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
  }
  .img-left {
    text-align: center;
    float: right;
    padding-right: 5%;
    padding-bottom: 8%;
    height: auto;
    width: 300px;
    object-fit: cover;
    background-size: cover;
  }
  .img-right {
    text-align: center;
    float: left;
    padding-left: 5%;
    height: auto;
    width: 300px;
    object-fit: cover;
    background-size: cover;
  }
  .container-one,
  .container-two,
  .container-three {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 1.2rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .container-one {
    margin-top: 100px !important;
  }
  .container-one p {
    text-align: left !important;
  }
  .container-two {
    margin-top: 220px !important;
    padding-bottom: 220px;
  }
  .container-three p {
    text-align: left !important;
  }
  .container-three {
    margin-bottom: 100px;
  }
`;

export default Team;
