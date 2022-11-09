import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTranslation } from 'react-i18next';
import { useState } from "react";



function App() {

  const [language, setLanguage] = useState();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const lng = language === 'en' ? 'es' : 'en'
    setLanguage(lng);
    i18n.changeLanguage(lng,false)
  }

  return (
    <div className="App">
        <NavBar changeLanguage={changeLanguage} />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
