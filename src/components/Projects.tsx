import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <>
      {/* Seção Principal */}
      <section id="projects" style={{
        marginTop: '32px',
        padding: '64px 32px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.03em',
            margin: '0 0 12px 0'
          }}>
            Projetos em Destaque
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#515154',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            Sistemas, APIs e soluções de back-end desenvolvidas com rigor técnico e arquitetura limpa.
          </p>
        </div>

        {/* Grid de Cards estilo Apple Grid (2 colunas amplas com fundo limpo) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))',
          gap: '24px'
        }}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              style={{
                background: 'linear-gradient(180deg, #fbfbfd 0%, #f5f5f7 100%)',
                borderRadius: '28px',
                padding: '48px 32px 36px 32px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
              }}
            >
              {/* Hierarquia de Texto estilo Apple */}
              <h3 style={{ 
                fontSize: '28px', 
                fontWeight: 700, 
                margin: '0 0 8px 0', 
                color: '#1d1d1f', 
                letterSpacing: '-0.01em' 
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                fontSize: '16px', 
                color: '#515154', 
                lineHeight: '1.45', 
                margin: '0 0 20px 0', 
                maxWidth: '420px',
                fontWeight: 400
              }}>
                {project.description}
              </p>

              {/* Botões de Ação idênticos ao "Saiba mais / Comprar" da Apple */}
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                alignItems: 'center',
                marginBottom: '32px' 
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0066cc',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Saiba mais <span style={{ fontSize: '12px' }}>›</span>
                </span>

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#ffffff',
                      backgroundColor: '#0071e3',
                      padding: '6px 16px',
                      borderRadius: '980px',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077ed'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0071e3'}
                  >
                    Repositório
                  </a>
                )}
              </div>

              {/* Pílulas de Tecnologias organizadas discretamente no rodapé do card */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px', 
                justifyContent: 'center',
                marginTop: 'auto'
              }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{
                    fontSize: '11px',
                    padding: '3px 10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    color: '#424245',
                    borderRadius: '980px',
                    fontWeight: 500,
                    fontFamily: 'monospace'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JANELA MODAL CENTRAL (Estilo Apple Sheet / Pop-up) */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '680px',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: '48px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              position: 'relative',
              maxHeight: '85vh',
              overflowY: 'auto'
            }}
          >
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#f5f5f7',
                color: '#1d1d1f',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}
            >
              ✕
            </button>

            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px 0', letterSpacing: '-0.02em', paddingRight: '30px' }}>
              {selectedProject.title}
            </h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  borderRadius: '980px',
                  fontWeight: 500,
                  fontFamily: 'monospace'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '17px', color: '#515154', lineHeight: '1.6', margin: '0 0 36px 0' }}>
              {/* @ts-ignore */}
              {selectedProject.detailedDescription || selectedProject.description}
            </p>

            {selectedProject.githubUrl && (
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  borderRadius: '980px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Acessar Repositório no GitHub ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};