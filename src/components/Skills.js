import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircleProgress } from 'react-gradient-progress'
import iconReact from '../assets/img/skills/icon-react.svg'
import iconNodeJs from '../assets/img/skills/icon-nodejs.svg'
import iconVue from '../assets/img/skills/icon-vue.svg'
import iconJs from '../assets/img/skills/icon-js.svg'
import iconJava from '../assets/img/skills/icon-java.svg'
import iconHtml from '../assets/img/skills/icon-html.svg'
import iconCss from '../assets/img/skills/icon-css.svg'
import iconBootstrap from '../assets/img/skills/icon-bootstrap.svg'
import iconCsharp from '../assets/img/skills/icon-csharp.svg'
import iconUnity from '../assets/img/skills/icon-unity.svg'
import iconMysql from '../assets/img/skills/icon-mysql.svg'
import iconMongodb from '../assets/img/skills/icon-mongodb.svg'
import iconKotlin from '../assets/img/skills/icon-kotlin.svg'
import iconR from '../assets/img/skills/icon-r.svg'
import iconGit from '../assets/img/skills/icon-git.svg'


const skills = [
  { name: "React", percentage: 80,icon: iconReact},
  { name: "JavaScript", percentage: 90, icon: iconJs },
  { name: "Java", percentage: 80, icon: iconJava },
  { name: "NodeJS", percentage: 70,icon: iconNodeJs},
  { name: "Vue", percentage: 60,icon: iconVue },
  { name: "HTML", percentage: 75,icon: iconHtml },  
  { name: "CSS", percentage: 75, icon: iconCss },  
  { name: "Bootstrap", percentage: 75,icon: iconBootstrap },  
  { name: "Git", percentage: 85,icon: iconGit },  
  { name: "C#", percentage: 55,icon: iconCsharp },  
  { name: "Unity", percentage: 60,icon: iconUnity },  
  { name: "MySQL", percentage: 65,icon: iconMysql },  
  { name: "Mongo DB", percentage: 65,icon: iconMongodb },  
  { name: "Kotlin", percentage: 25,icon: iconKotlin },  
  { name: "R Studio", percentage: 30,icon: iconR }
]

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>{`Here some of my skills that i acquired through study, courses and projects.`}</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill) => (
                  <div className="item" key={skill.name}>
                    <CircleProgress fontSize="30px" percentage={skill.percentage} strokeWidth={12} primaryColor={['#39FF14', '#007fff']} secondaryColor="#000" />
                    <img className="social-icon" src={skill.icon} alt={skill.name}></img>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}