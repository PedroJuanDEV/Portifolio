import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      // Fundo branco translúcido com glassmorphism suave
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'saturate(180%) blur(16px)',
      WebkitBackdropFilter: 'saturate(180%) blur(16px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      zIndex: 100,
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '44px', // Altura reduzida (mais compacta)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px'
      }}>
        <a 
          href="#about" 
          style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0066cc';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#1d1d1f';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Sobre
        </a>

        <a 
          href="#experience" 
          style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0066cc';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#1d1d1f';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Experiência
        </a>

        <a 
          href="#projects" 
          style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0066cc';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#1d1d1f';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Projetos
        </a>

        <a 
          href="#certificates" 
          style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0066cc';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#1d1d1f';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Certificados
        </a>
      </div>
    </nav>
  );
};