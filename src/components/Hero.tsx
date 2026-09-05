import React from 'react';
import profilePic from '../assets/perfil.jpg';

export const Hero: React.FC = () => {
  return (
    <section style={{
      marginTop: '80px',
      marginBottom: '64px',
      padding: '0 32px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'transparent'
    }}>
      {/* Badge de Status */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        border: '1px solid #1d1d1f',
        borderRadius: '4px',
        marginBottom: '24px',
        backgroundColor: '#ffffff'
      }}>
        <span style={{ fontSize: '10px' }}>✦</span>
        <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.08em', color: '#1d1d1f', textTransform: 'uppercase' }}>
          DEVELOPER PORTFOLIO
        </span>
      </div>

      {/* Nome com Cor Sólida Estilo Apple + Foto Maior */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        gap: '32px',
        marginBottom: '32px' 
      }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 84px)',
            fontWeight: 900,
            fontFamily: "'Sora', 'Outfit', -apple-system, sans-serif",
            color: '#1d1d1f', // Cor sólida cinza escuro/quase preto da Apple
            lineHeight: '0.95',
            letterSpacing: '-0.03em',
            margin: 0,
            textTransform: 'uppercase'
          }}>
            PEDRO JUAN
          </h1>

          <p style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgb(61, 61, 61)',
            margin: '12px 0 0 0',
            letterSpacing: '0.02em',
            fontFamily: 'monospace'
          }}>
            BACK-END DEVELOPER
          </p>
        </div>

        {/* Foto de Perfil */}
        <img 
          src={profilePic} 
          alt="Pedro Juan" 
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #1d1d1f',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160/1d1d1f/FFFFFF?text=PJ';
          }}
        />
      </div>

      {/* Resumo Direto e Botões em Layout Aberto */}
      <div style={{ maxWidth: '680px' }}>
        <p style={{
          fontSize: '20px',
          color: '#1d1d1f',
          lineHeight: '1.45',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          margin: '0 0 32px 0'
        }}>
          Acadêmico de Análise e Desenvolvimento de Sistemas na Faculdade Senac. Especializado em construir arquiteturas Back-end sólidas, consumo de APIs RESTful (.NET, C#, Node.js) e modelagem de dados relacionais.
        </p>

        {/* Botões de Ação */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <a
            href="https://github.com/PedroJuanDEV"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#1d1d1f',
              color: '#ffffff',
              borderRadius: '980px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3d3d3d';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1d1d1f';
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
              backgroundColor: '#ffffff',
              border: '1px solid #1d1d1f',
              color: '#1d1d1f',
              borderRadius: '980px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none'
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
            LinkedIn
          </a>

          <a
            href="/Curriculo ---Pedro Juan.pdf"
            target="_blank"
            style={{
              marginLeft: 'auto',
              fontSize: '14px',
              color: '#383838',
              fontWeight: 600,
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Download CV ↗
          </a>
        </div>
      </div>
    </section>
  );
};