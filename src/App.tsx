import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';      // Projetos em Destaque
import { Experience } from './components/Experience';  // Projetos Acadêmicos & Residências
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <Navbar />
      <Hero />
      <Projects />      {/* 1º: Projetos em Destaque */}
      <Experience />  {/* 2º: Projetos Acadêmicos / Residências */}
      {/* 
        Próximas seções a serem adicionadas:
        <Skills />
        <Formations />
        <Certificates />
      */}
      <Footer />
    </div>
  );
}

export default App;