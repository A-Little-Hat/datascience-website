import './App.css';
import MainCarousel from './shared/MainCarousel';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import AboutAndEvents from './sections/about-events';
import Faculties from './sections/faculties';

function App() {
  return (
    <>
      <div className="body font-primary">
        <Navbar/>
        <MainCarousel/>
        <AboutAndEvents/>
        <Faculties/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
