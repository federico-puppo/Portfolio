import "animate.css";
import "./style.scss";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FileEarmarkPerson, Envelope } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/img/me.svg";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const toRotate = [
    `${t("title.t1")}`,
    `${t("title.t2")}`,
    `${t("title.t3")}`,
    `${t("title.t4")}`,
    `${t("title.t5")}`,
    `${t("title.t6")}`,
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.8);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((index) => index - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((index) => index + 1);
    }
  };

  return (
    <section className="banner" id="aboutme">
      <Router>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">
                      <h5>{t("banner.welcome")}</h5>
                    </span>
                    <h1>{`${t("banner.greet")}${
                      process.env.REACT_APP_NAME
                    } `}</h1>
                    <h2>
                      <span className="txt-rotate">
                        <span style={{ color: "gold" }}>{"{ "}</span>
                        <span className="wrap">{text}</span>
                        <span style={{ color: "gold" }}>{" }"}</span>
                      </span>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("banner.description")}
                    </p>
                    <button>
                      <span>
                        <a
                          href={process.env.REACT_APP_CV_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("common.cv")}
                        </a>
                      </span>
                      <FileEarmarkPerson size={25} />
                    </button>
                    <HashLink smooth to="#connect">
                      <button>
                        <span>{t("common.connect")}</span>
                        <Envelope size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </Router>
    </section>
  );
};
