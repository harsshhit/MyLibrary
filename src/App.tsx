import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

import { Facilities } from './components/Facilities';
import { ExamPrep } from './components/ExamPrep';
import { Membership } from './components/Membership';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
       
        <Facilities />
        <ExamPrep />
        <Membership />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;