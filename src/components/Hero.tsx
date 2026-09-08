import React from 'react';
import profilePic from '../assets/perfil.jpg';

export const Hero: React.FC = () => {
  return (
    <section style={{
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      marginTop: '0px', // Alinhado perfeitamente logo abaixo da navbar fixa
      marginBottom: '32px',
      // Área do wallpaper aumentada significativamente para dar mais imponência ao topo
      padding: '100px 32px 180px 32px',
      minHeight: '65vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',

      backgroundImage: "url('blu.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Badge de Status */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '4px',
          marginBottom: '24px',
          backgroundColor: 'rgba(29, 29, 31, 0.6)',
          backdropFilter: 'blur(8px)'
        }}>
          <span style={{ fontSize: '10px', color: '#ffffff' }}>✦</span>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase' }}>
            DEVELOPER PORTFOLIO
          </span>
        </div>

        {/* Bloco Superior: Nome, Cargo e Foto */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '32px' 
        }}>
          {/* Lado Esquerdo: Nome, Área de Atuação, Contatos e Resumo */}
          <div style={{ textAlign: 'left', maxWidth: '700px' }}>
            {/* 1. Nome */}
            <h1 style={{
              fontSize: 'clamp(42px, 7vw, 84px)',
              fontWeight: 900,
              fontFamily: "'Sora', 'Outfit', -apple-system, sans-serif",
              color: '#ffffff',
              lineHeight: '0.95',
              letterSpacing: '-0.03em',
              margin: 0,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.26)'
            }}>
              Pedro Juan
            </h1>

            {/* 2. Área de Atuação */}
            <p style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              margin: '12px 0 24px 0',
              letterSpacing: '0.02em',
              fontFamily: 'monospace',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              BACK-END DEVELOPER
            </p>

            {/* 3. Contatos (Botões de Ação) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
              <a
                href="https://github.com/PedroJuanDEV"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#ffffff',
                  color: '#1d1d1f',
                  borderRadius: '980px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/pedrojuandevv/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(29, 29, 31, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: '#ffffff',
                  borderRadius: '980px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(29, 29, 31, 0.7)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                LinkedIn
              </a>

              <a
                href="/Curriculo ---Pedro Juan.pdf"
                download="Curriculo ---Pedro Juan.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '14px',
                  color: '#ffffff',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                  marginLeft: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Download CV ↗
              </a>
            </div>

            {/* 4. Breve Resumo Curto */}
            <p style={{
              fontSize: '18px',
              color: '#ffffff',
              lineHeight: '1.45',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              margin: 0,
              textShadow: '0 2px 12px rgba(7, 7, 7, 0.6)'
            }}>
              Olá, sou Pedro Juan, estudante de Análise e Desenvolvimento de Sistemas no Senac (5º período) e bolsista do programa Embarque Digital. Focado no ecossistema .NET e bancos de dados relacionais, busco minha primeira oportunidade como desenvolvedor estagiário para aplicar meus conhecimentos e crescer profissionalmente.
            </p>
          </div>

          {/* Lado Direito: Foto de Perfil */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={profilePic} 
              alt="Pedro Juan" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(0, 0, 0, 0.4)',
                backgroundColor: '#1d1d1f',
                boxShadow: '0 12px 32px rgba(0,0,0,0.4)'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160/1d1d1f/FFFFFF?text=PJ';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};