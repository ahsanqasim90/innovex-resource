

import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroImg from './components/HeroImg';


import Whyus from './components/Whyus';
import Services from './components/Services';
import OurProcess from './components/OurProcess';
import TempRec from './components/TempRec';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound'; // Create this component

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><HeroImg /></div>
              <div id="about"><Whyus /></div>
              <div id="services"><Services /></div>
              <div id="process"><OurProcess /></div>
              <div><TempRec /></div>
              <div><Footer /></div>
            </>
          } />
          <Route path="/contact" element={<ContactForm />} />
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
