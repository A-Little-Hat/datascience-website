import './App.css';
import MainCarousel from './shared/MainCarousel';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
  return (
    <>
      <div className="body font-primary">
        <Navbar/>
        <MainCarousel/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
