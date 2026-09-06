import React from 'react';
import profilePic from '../assets/perfil.jpg';

export const Hero: React.FC = () => {
  const coreStacks = ['.NET', 'C#', 'SQL Server'];

  return (
    <section style={{
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      marginTop: '0px',
      marginBottom: '64px',
      padding: '80px 32px',
      position: 'relative',
      overflow: 'hidden',

      /* Wallpaper de fundo em alta definição */
      backgroundImage: "url('/hero-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
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

        {/* Bloco Superior: Nome, Cargo e Foto com Stacks */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '32px' 
        }}>
          <div style={{ textAlign: 'left', maxWidth: '700px' }}>
            <h1 style={{
              fontSize: 'clamp(42px, 7vw, 84px)',
              fontWeight: 900,
              fontFamily: "'Sora', 'Outfit', -apple-system, sans-serif",
              color: '#ffffff',
              lineHeight: '0.95',
              letterSpacing: '-0.03em',
              margin: 0,
              textTransform: 'uppercase',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}>
              PEDRO JUAN
            </h1>

            <p style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#d2d2d7',
              margin: '12px 0 0 0',
              letterSpacing: '0.02em',
              fontFamily: 'monospace',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              BACK-END DEVELOPER
            </p>
          </div>

          {/* Coluna da Direita: Foto de Perfil + Stacks logo abaixo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <img 
              src={profilePic} 
              alt="Pedro Juan" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(255, 255, 255, 0.8)',
                backgroundColor: '#1d1d1f',
                boxShadow: '0 12px 32px rgba(0,0,0,0.4)'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160/1d1d1f/FFFFFF?text=PJ';
              }}
            />

            {/* Stacks minimalistas logo abaixo da foto */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {coreStacks.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    backgroundColor: 'rgba(29, 29, 31, 0.75)',
                    color: '#ffffff',
                    borderRadius: '980px',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Resumo e Botões de Ação */}
        <div style={{ maxWidth: '680px' }}>
          <p style={{
            fontSize: '20px',
            color: '#f5f5f7',
            lineHeight: '1.45',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            margin: '0 0 32px 0',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)'
          }}>
            Olá! Me chamo Pedro Juan e sou estudante de ADS na Universidade Senac, uma oportunidade que nasceu através do programa Embarque Digital em parceria com o banco Santander. Atualmente, estou cursando o meu 5º período. Direciono meus estudos ao ecossistema .NET e a bancos de dados relacionais. Estou em busca da minha primeira oportunidade como desenvolvedor estagiário. Sinta-se à vontade para navegar entre meus projetos e conhecer um pouco mais sobre a minha atuação.
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
                marginLeft: 'auto',
                fontSize: '14px',
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Download CV ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};