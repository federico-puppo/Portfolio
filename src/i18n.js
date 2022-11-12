import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: {
            t1: "System Analist",
            t2: "Programmer",
            t3: "Developer",
            t4: "Full Stack",
            t5: "Front-End",
            t6: "Back-End",
          },
          common: {
            about: "About Me",
            skill: "Skills",
            project: "Projects",
            connect: "Let's Connect",
            cv: "Download Resume",
            source: "Source Code",
            build: "Running Build",
            download: "Download Build",
            send: "Send",
            sending:"Sending..",
            language: "EN"
          },
          banner: {
            welcome: "Welcome to my Portfolio",
            greet: "Hi! I'm ",
            description: "Proactive, honest, committed and capable. I am a graduated Systems Analist in continuous search for growth. I am looking for my first job in the IT world, willing to demonstrate my knowledge and problem-solving capacity. Always ready to learn new technologies and polish the already known ones.",
          },
          skill: {
            intro: "Here some of my skills that i acquired through study, courses and projects."
          },
          project: {
            name: {
              1: "Memotest",
              2: "Pokedex",
              3: "WIP.."
            },
            memotest: {
              desc: 'Videogame developed in <b>Unity</b> using <b>C#</b>.<br></br>The Memotest is a memory game that consists of finding matching pairs of cards.',
              p1Title: "Main Menu",
              p1Desc: "here we can find three options, play, credits, and exit. Fun fact, the background consists of randomly created cards that fall to the bottom",
              p2Title: "Difficulty selection menu",
              p2Desc: "in this section we can choose between 7 different difficulties, each one varies the total number of cards and attempts",
              p3Title: "Game table",
              p3Desc: "here is the board where initially we see all the cards face down, to play we must select one, which is revealed to us and then choose another, if the image matches then both cards disappear from the board (with a fancy animation)",
              p4Title: "Game over",
              p4Desc: "If the images do not match, both cards will be turned face down again, and we will lose an attempt. If we run out of attempts, we lose the game",
              p5Title: "Pause menu",
              p5Desc: "We also have a pause menu, from which we can resume it later, restart the game, or return to the main menu.",
              p6Title: "Credit menu",
              p6Desc: "There's not much here, just my name. Although we can appreciate the random background accompanied by a retro fantasy music :)",
            },
            pokedex: {
              desc: 'Pokedex created in <b>React</b> this application offers an interface (responsive) that allows viewing the Pokemons database using an <b>API REST</b> <a href="https://pokeapi.co/">(https://pokeapi.co/)'
            },
            wip: {
              desc: "Working on the next project..."
            }
          },
          contact: {
            desc: "Get In Touch",
            name: "First name",
            lastName: "Last name",
            email: "Email Adress",
            phone: "Phone No.",
            message: "Message",
            success: "Message sent successfully",
            fail: "Something went wrong, please try again later."
          }
        }
      },
      es: {
        translation: {
          title: {
            t1: "Analista de Sistemas",
            t2: "Programador",
            t3: "Desarrollador",
            t4: "Full Stack",
            t5: "Front-End",
            t6: "Back-End",
          },
          common: {
            about: "Sobre mi",
            skill: "Habilidades",
            project: "Proyectos",
            connect: "Contactame",
            cv: "Descargar CV",
            source: "Código Fuente",
            build: "Aplicacion en vivo",
            download: "Descargar Ejecutable",
            send: "Enviar",
            sending:"Enviando..",
            language: "ES"
          },
          banner: {
            welcome: "Bienvenido a mi Portafolio",
            greet: "Hola! soy ",
            description: "Proactivo, honesto, comprometido y capaz. Soy Analista de Sistemas graduado en continua búsqueda de crecimiento. Busco mi primer trabajo en el mundo IT, dispuesto a demostrar mis conocimientos y capacidad de resolución de problemas. Siempre dispuesto a aprender nuevas tecnologías y pulir las ya conocidas.",
          },
          skill: {
            intro: "Aquí algunas de mis habilidades que adquirí a través de estudios, cursos y proyectos."
          },
          project: {
            name: {
              1: "Memotest",
              2: "Pokedex",
              3: "En progreso.."
            },
            memotest: {
              desc: 'Videojuego desarrollado en <b>Unity</b> usando <b>C#</b>.<br></br>El Memotest es un juego de memoria que consiste en encontrar parejas de cartas iguales.',
              p1Title: "Menú Principal",
              p1Desc: "aquí podemos encontrar tres opciones, jugar, créditos y salir. Dato curioso, el fondo consiste en cartas creadas al azar que van cayendo.",
              p2Title: "Seleccion de Dificultad",
              p2Desc: "en este apartado podemos elegir entre 7 dificultades diferentes, cada una varía el número total de cartas e intentos",
              p3Title: "Tablero",
              p3Desc: "aquí está el tablero donde inicialmente vemos todas las cartas boca abajo, para jugar debemos seleccionar una, la cual se nos revela y luego elegir otra, si las imagenes coincide entonces ambas cartas desaparecen del tablero (con una animación fabulosa!)",
              p4Title: "Juego terminado",
              p4Desc: "Si las imágenes no coinciden, ambas cartas volverán a ponerse boca abajo y perderemos un intento. Si nos quedamos sin intentos, perdemos el juego",
              p5Title: "Menú de Pausa",
              p5Desc: "También disponemos de un menú de pausa, desde el cual podemos retomar el juego, reiniciar el nivel, o volver al menú principal.",
              p6Title: "Pantalla de Creditos",
              p6Desc: "No hay mucho aquí, solo mi nombre. Aunque podemos apreciar el fondo aleatorio acompañado de una música de fantasía retro :)",
            },
            pokedex: {
              desc: 'Pokedex creado en <b>React</b> esta aplicación ofrece una interfaz (responsive) que permite ver la base de datos de Pokemons usando una <b>API REST</b> <a href="https://pokeapi.co/">(https://pokeapi.co/)'
            },
            wip: {
              desc: "Trabajando en el próximo proyecto..."
            }
          },
          contact: {
            desc: "Ponte en Contacto",
            name: "Nombre",
            lastName: "Apellido",
            email: "Direccion de Email",
            phone: "Número de Telefono",
            message: "Mensaje",
            success: "Mensaje enviado con éxito",
            fail: "Algo salió mal, inténtalo de nuevo más tarde."
          }
        }
      }
    }
  }
  );

export default i18n;