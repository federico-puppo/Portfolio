import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import memotest1 from "../assets/img/proyects/memotest/memotest_1.jpg";
import memotest2 from "../assets/img/proyects/memotest/memotest_2.jpg"
import memotest3 from "../assets/img/proyects/memotest/memotest_3.jpg";
import memotest4 from "../assets/img/proyects/memotest/memotest_4.jpg";
import memotest5 from "../assets/img/proyects/memotest/memotest_5.jpg";
import memotest6 from "../assets/img/proyects/memotest/memotest_6.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const memotest_items = [
    {
      title: "Main Menu",
      description: "here we can find three options, play, credits, and exit. Fun fact, the background consists of randomly created cards that fall to the bottom",
      imgUrl: memotest1,
    },
    {
      title: "Difficulty selection menu",
      description: "in this section we can choose between 7 different difficulties, each one varies the total number of cards and attempts",
      imgUrl: memotest2,
    },
    {
      title: "Game table",
      description: "here is the board where initially we see all the cards face down, to play we must select one, which is revealed to us and then choose another, if the image matches then both cards disappear from the board (with a fancy animation)",
      imgUrl: memotest3,
    },
    {
      title: "Game over",
      description: "If the images do not match, both cards will be turned face down again, and we will lose an attempt. If we run out of attempts, we lose the game",
      imgUrl: memotest4,
    },
    {
      title: "Pause menu",
      description: "We also have a pause menu, from which we can resume it later, restart the game, or return to the main menu.",
      imgUrl: memotest6,
    },
    {
      title: "Credit menu",
      description: "There's not much here, just my name. Although we can appreciate the random background accompanied by a retro fantasy music :)",
      imgUrl: memotest5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row >
          <Col size={12} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Memotest</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Pokedex</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">WIP..</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <p>{' Videogame developed in '}<b>Unity</b>{' using '}<b>C#</b><br></br>{'The memotest is a memory game that consists of finding matching pairs of cards.'}</p>
                            <Row style={{ alignItems: "center", display: "flex", justifyContent: "space-evenly", marginBottom: "30px",margiTop: "-40px"}}>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_MEMOTEST_SOURCE}>Source Code</a></span><ArrowRightCircle size={25} /></button>
                              </Col>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_MEMOTEST_BUILD}>Download Build</a></span><Download size={25} /></button>
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
                          <p>{' Videogame developed in '}<b>Unity</b>{' using '}<b>C#</b><br></br>{'The memotest is a memory game that consists of finding matching pairs of cards.'}</p>
                            <Row style={{ alignItems: "center", display: "flex", justifyContent: "space-evenly", marginBottom: "30px",margiTop: "-40px"}}>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_MEMOTEST_SOURCE}>Source Code</a></span><ArrowRightCircle size={25} /></button>
                              </Col>
                              <Col size={6} sm={6} md={3}>
                                <button><span><a href={process.env.REACT_APP_MEMOTEST_BUILD}>Download Build</a></span><Download size={25} /></button>
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
                      <Tab.Pane eventKey="third">
                        <p>{"Working on next proyect..."}</p>
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