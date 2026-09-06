import React from 'react';
import { Navbar } from './components/Navbar'; // <-- Importe a Navbar
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <Navbar /> {/* <-- Renderize a Navbar no topo de tudo */}
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;