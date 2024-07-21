import './App.css';
import MainCarousel from './shared/MainCarousel';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import AboutAndEvents from './sections/about-events';
import Faculties from './sections/faculties';
import Projects from './sections/projects';

function App() {
  return (
    <>
      <div className="body font-primary">
        <Navbar/>
        <MainCarousel/>
        <AboutAndEvents/>
        <Faculties/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
