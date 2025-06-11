// App.js

import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import CaseStudies from './components/CaseStudies/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail/CaseStudyDetail';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

// import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <ScrollToTop />
        <Header />
        
        <Switch>
          <Route path="/case-studies/:id">
            <CaseStudyDetail />
          </Route>
          <Route path="/">
            <main>
              <About />
              <Projects />
              <CaseStudies />
              <Skills />
              <Contact />
            </main>
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
