import "./style.scss"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
import iconReact from "../../assets/img/skills/icon-react.svg";
import iconNodeJs from "../../assets/img/skills/icon-nodejs.svg";
import iconVue from "../../assets/img/skills/icon-vue.svg";
import iconJs from "../../assets/img/skills/icon-js.svg";
import iconJava from "../../assets/img/skills/icon-java.svg";
import iconHtml from "../../assets/img/skills/icon-html.svg";
import iconCss from "../../assets/img/skills/icon-css.svg";
import iconBootstrap from "../../assets/img/skills/icon-bootstrap.svg";
import iconCsharp from "../../assets/img/skills/icon-csharp.svg";
import iconUnity from "../../assets/img/skills/icon-unity.svg";
import iconMysql from "../../assets/img/skills/icon-mysql.svg";
import iconMongodb from "../../assets/img/skills/icon-mongodb.svg";
import iconKotlin from "../../assets/img/skills/icon-kotlin.svg";
import iconR from "../../assets/img/skills/icon-r.svg";
import iconGit from "../../assets/img/skills/icon-git.svg";
import iconRedux from "../../assets/img/skills/icon-redux.svg";
import iconJira from "../../assets/img/skills/icon-jira.svg";
import iconFigma from "../../assets/img/skills/icon-figma.svg";
import iconDocker from "../../assets/img/skills/icon-docker.svg";
import iconSass from "../../assets/img/skills/icon-sass.svg";

const skills = [
  { name: "React", icon: iconReact },
  { name: "JavaScript", icon: iconJs },
  { name: "Java", icon: iconJava },
  { name: "NodeJS", icon: iconNodeJs },
  { name: "Vue", icon: iconVue },
  { name: "HTML", icon: iconHtml },
  { name: "CSS", icon: iconCss },
  { name: "Bootstrap", icon: iconBootstrap },
  { name: "Sass", icon: iconSass },
  { name: "Git", icon: iconGit },
  { name: "C#", icon: iconCsharp },
  { name: "Unity", icon: iconUnity },
  { name: "MySQL", icon: iconMysql },
  { name: "Mongo DB", icon: iconMongodb },
  { name: "Kotlin", icon: iconKotlin },
  { name: "R Studio", icon: iconR },
  { name: "Redux", icon: iconRedux },
  { name: "Jira", icon: iconJira },
  { name: "Figma", icon: iconFigma },
  { name: "Docker", icon: iconDocker },
];

export const Skills = () => {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{t("common.skill")}</h2>
              <p>{t("skill.intro")}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                className="carousel skill-slider"
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={devicePixelRatio >= 3 ? false : true}
              >
                {skills.map((skill) => (
                  <div className="item" key={skill.name}>
                    <img
                      className="social-icon"
                      src={skill.icon}
                      alt={skill.name}
                    ></img>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
