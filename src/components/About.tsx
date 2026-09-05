import React from 'react';

const techStacks = {
  backend: ['.NET', 'C#', 'ASP.NET Core', 'Node.js', 'TypeScript'],
  database: ['MySQL', 'SQL Server', 'DBeaver', 'Entity Framework Core'],
  infrastructure: ['Windows', 'Linux (Instalação, Configuração e CLI)']
};

export const About: React.FC = () => {
  return (
    <section id="skills" style={{
      padding: '0 32px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '64px',
      backgroundColor: 'transparent' /* Removida a box de fundo */
    }}>
      {/* Título da Seção */}
      <span style={{ 
        fontSize: '11px', 
        fontWeight: 700, 
        color: '#86868b', 
        textTransform: 'uppercase', 
        letterSpacing: '0.08em', 
        fontFamily: 'monospace',
        display: 'block',
        marginBottom: '24px'
      }}>
       
      </span>

      {/* Grid Fluido de Stacks */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px'
      }}>
        {/* Coluna 1: Back-End */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', margin: '0 0 16px 0', letterSpacing: '-0.01em' }}>
            Back-end
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStacks.backend.map((tech) => (
              <span key={tech} style={{
                fontSize: '13px',
                padding: '6px 14px',
                backgroundColor: '#ffffff',
                color: '#1d1d1f',
                borderRadius: '980px',
                border: '1px solid #d2d2d7',
                fontWeight: 600
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna 2: Persistência */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', margin: '0 0 16px 0', letterSpacing: '-0.01em' }}>
            Banco de Dados
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStacks.database.map((tech) => (
              <span key={tech} style={{
                fontSize: '13px',
                padding: '6px 14px',
                backgroundColor: '#ffffff',
                color: '#1d1d1f',
                borderRadius: '980px',
                border: '1px solid #d2d2d7',
                fontWeight: 600
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna 3: Ecossistema */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', margin: '0 0 16px 0', letterSpacing: '-0.01em' }}>
            Sistemas
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techStacks.infrastructure.map((tech) => (
              <span key={tech} style={{
                fontSize: '13px',
                padding: '6px 14px',
                backgroundColor: '#ffffff',
                color: '#1d1d1f',
                borderRadius: '980px',
                border: '1px solid #d2d2d7',
                fontWeight: 600
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};