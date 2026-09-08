import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      // Fundo branco translúcido original com glassmorphism
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'saturate(180%) blur(16px)',
      WebkitBackdropFilter: 'saturate(180%) blur(16px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '44px',
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