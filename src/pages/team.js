import React from "react";

import styled from "styled-components";
import Helmet from "react-helmet";

import { Container, Card, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import { GiIceIris } from "react-icons/gi";

import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";
import Title from "../components/Title";

//markup
const Team = () => {
  const teamData = [
    {
      name: "Paola Buzi - Principal Investigator",
      image: "/images/other/pbuzi.jpeg",
      position: "Full Professor",
      affiliation:
        " Full Professor of Egyptology and Coptic Studies, Honorary Professor at the University of Hamburg and Director of DigiLab Sapienza",
      uni: "Sapienza University of Rome",
      unisite: "https://www.lettere.uniroma1.it/users/paola-buzi",
      academia: "https://uniroma1.academia.edu/PaolaBuzi",
      iris: "https://iris.uniroma1.it/simple-search?filter_field_1=author&filter_type_1=contains&filter_value_1=paola+buzi&query=&main-query-submit=Cerca",
    },
    {
      name: "Julian Bogdani",
      image: "/images/other/jbogdani.jpeg",
      position: "Assistant Professor",
      affiliation:
        "Assistant Professor of Metodologie della Ricerca Archeologica (L-ANT/10), Director of the Archaeological Mission at Çuka e Ajtoit (Albania) and Director of the Laboratorio di Archeologia Digitale at Sapienza University of Rome",
      uni: "Sapienza University of Rome",
      unisite: "https://www.lettere.uniroma1.it/users/julian-bogdani",
      github: "https://github.com/jbogdani",
      academia: "https://uniroma1.academia.edu/JulianBogdani",
      iris: "https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en",
      researchgate: "https://www.researchgate.net/profile/Julian-Bogdani",
      twitter: "https://twitter.com/JulianBogdani",
    },
    {
      name: "Domizia D'Erasmo",
      image: "/images/other/dderasmo.jpg",
      position: "Research Fellow",
      affiliation:
        "Researcher of Metodologie della Ricerca Archeologica (L-ANT/10) and member of the Laboratorio di Archeologia Digitale at Sapienza University of Rome",
      uni: "Sapienza University of Rome",
      github: "https://github.com/ddomizia",
      academia: "https://uniroma1.academia.edu/domiziaderasmo",
      iris: "https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1",
      researchgate: "https://www.researchgate.net/profile/Domizia_Derasmo",
      twitter: "https://twitter.com/DomiziaDErasmo",
    },
    {
      name: "Valeria Parisi",
      image: "/images/other/vparisi.jpg",
      position: "Research Fellow",
      affiliation: "Researcher (Tipo A) of Classical Archaeology (L-ANT/07) at University of Campania Luigi Vanvitelli",
      uni: "University of Campania Luigi Vanvitelli",
    },
    {
      name: "Serena Guidone",
      image: "",
      position: "Research Fellow",
    },
    {
      name: "Elisabetta Falduto",
      image: "",
      position: "Research Fellow",
      affiliation:
        "Research Fellow in Egyptology and Coptic Studies (L-OR/02) for the project Sacri lapides Aegypti and PhD student in Philology and History of the Ancient World, Oriental Curriculum at Sapienza University of Rome",
      uni: "Sapienza University of Rome",
    },
    {
      name: "Marta Addessi",
      image: "/images/other/maddessi.jpeg",
      position: "Research Fellow",
      affiliation:
        "Research Fellow in Egyptology and Coptic Studies (L-OR/02) for the project Sacri lapides Aegypti",
      uni: "Sapienza University of Rome",
    },
  ];

  const iconList = [
    {
      id: "unisite",
      label: "Sito istituzionale",
      icon: <FaUniversity />,
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      id: "academia",
      label: "Academia.edu",
      icon: <SiAcademia />,
    },
    {
      id: "iris",
      label: "Repository IRIS",
      icon: <GiIceIris />,
    },
    {
      id: "researchgate",
      label: "Research Gate",
      icon: <SiResearchgate />,
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: <FaTwitter />,
    },
  ];

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
          <Container className="team">
            <Row className="mx-5">
              <Title title="Who we are" align="right" />
            </Row>
            <Row xs={1} md={3} className="mx-5">
              {teamData.map((m, mk) => {
                return (
                  <Col key={mk}>
                    <Card key={mk} className="g-4">
                      <Card.Img variant="top" src={m.image}/>
                      <Card.Body>
                        <Card.Title>{m.name}</Card.Title>
                        <Card.Text className="position">
                          {m.position} | {m.uni}
                        </Card.Text>
                        <Card.Text className="affiliation">
                          {m.affiliation}
                        </Card.Text>
                        <Card.Text className="icon">
                          {iconList.map((i, ik) => {
                            if (m[i.id]) {
                              return (
                                <a href={m[i.id]} title={i.label} key={ik}>
                                  {i.icon}
                                </a>
                              );
                            } else {
                              return "";
                            }
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Wrapper>
    </Layout>
  );
};

//styles
const Wrapper = styled.section`
  section {
    position: relative;
    z-index: 2;
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
`;

export default Team;
