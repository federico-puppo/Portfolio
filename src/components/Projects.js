import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle, Download, Terminal } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import memotest1 from "../assets/img/projects/memotest/memotest_1.jpg";
import memotest2 from "../assets/img/projects/memotest/memotest_2.jpg"
import memotest3 from "../assets/img/projects/memotest/memotest_3.jpg";
import memotest4 from "../assets/img/projects/memotest/memotest_4.jpg";
import memotest5 from "../assets/img/projects/memotest/memotest_5.jpg";
import memotest6 from "../assets/img/projects/memotest/memotest_6.jpg";
import pokedex1 from "../assets/img/projects/pokedex/pokedex_1.jpg";

import { Markup } from "interweave"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const { t } = useTranslation();

  const memotest_items = [
    {
      title: t('project.memotest.p1Title'),
      description: t('project.memotest.p1Desc'),
      imgUrl: memotest1,
    },
    {
      title: t('project.memotest.p2Title'),
      description: t('project.memotest.p2Desc'),
      imgUrl: memotest2,
    },
    {
      title: t('project.memotest.p3Title'),
      description: t('project.memotest.p3Desc'),
      imgUrl: memotest3,
    },
    {
      title: t('project.memotest.p4Title'),
      description: t('project.memotest.p4Desc'),
      imgUrl: memotest4,
    },
    {
      title: t('project.memotest.p5Title'),
      description: t('project.memotest.p5Desc'),
      imgUrl: memotest6,
    },
    {
      title: t('project.memotest.p6Title'),
      description: t('project.memotest.p6Desc'),
      imgUrl: memotest5,
    },
  ];
  const pokedex_items = [
    {
      title: "Pokedex",
      description: "here we can see our pokemons",
      imgUrl: pokedex1,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row >
          <Col size={12} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t('common.project')}</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">{t('Project.name.1')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">{t('project.name.2')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">{t('project.name.3')}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <p><Markup content={t('project.memotest.desc')}/></p>
                            <Row style={{ alignItems: "center", display: "flex", justifyContent: "space-evenly", marginBottom: "30px",margiTop: "-40px"}}>
                              <Col size={6} sm={6} md={3}>
                              <button><span><a href={process.env.REACT_APP_MEMOTEST_SOURCE}>{t('common.source')}</a></span><ArrowRightCircle size={25} /></button>
                              </Col>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_MEMOTEST_BUILD}>{t('common.download')}</a></span><Download size={25} /></button>
                              </Col>
                            </Row>
                        </Row>
                        <Row>
                          {
                            memotest_items.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          <p><Markup content={t('project.pokedex.desc')}/></p>
                            <Row style={{ alignItems: "center", display: "flex", justifyContent: "space-evenly", marginBottom: "30px",margiTop: "-40px"}}>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_POKEDEX_SOURCE}>{t('common.source')}</a></span><ArrowRightCircle size={25} /></button>
                              </Col>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_POKEDEX_BUILD}>{t('common.build')}</a></span><Terminal size={25} /></button>
                              </Col>
                            </Row>
                        </Row>
                        <Row>
                          {
                            pokedex_items.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>{t('project.wip.desc')}</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}