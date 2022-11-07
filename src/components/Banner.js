import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FileEarmarkPerson,ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import headerImg from "../assets/img/me.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = ["Systems Analist", "Programmer", "Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.8);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(index => index - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(220);
    } else {
      setIndex(index => index + 1);
    }
  }

  return (
    <section className="banner" id="aboutme">
      <Router>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm ${process.env.REACT_APP_NAME} `}</h1>
                    <h2><span className="txt-rotate"><span className="wrap">{text}</span></span></h2>
                    <p>{`Proactive, honest, committed and capable. I am a graduated Systems Analist in continuous search for growth. I am looking for my first job in the IT world, willing to demonstrate my knowledge and problem-solving capacity. Always ready to learn new technologies and polish the already known ones.`}</p>
                    <button><span><a href={process.env.REACT_APP_MEMOTEST_BUILD}>Download Resume</a></span><FileEarmarkPerson size={25} /></button>
                    <HashLink smooth to='#connect'>
                      <button><span>Let’s Connect</span><ArrowRightCircle size={25}/></button>
                      </HashLink>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </Router>
    </section>
  )
}
