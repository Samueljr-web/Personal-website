import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import About from './components/about';
import Project from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <main className="app">
      <Navbar />
      <div className="container">
      <HeroSection />
      <br />
      <About />
      <br />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      </div>
    </main>
  );
}

export default App;
