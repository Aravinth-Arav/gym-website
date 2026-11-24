import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
