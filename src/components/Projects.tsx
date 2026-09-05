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
      {/* Box de Fundo Principal com o Gradiente Radial */}
      <section id="projects" style={{
        marginTop: '24px',
        padding: '48px 32px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'radial-gradient(circle at 35% 50%, #fff4d9 0%, #ffcc70 45%, #ff8c00 100%)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(255, 140, 0, 0.2)'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#1d1d1f',
          letterSpacing: '-0.02em',
          marginBottom: '32px'
        }}>
          Projetos em Destaque
        </h2>

        {/* Grid de Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              style={{
                padding: '32px',
                backgroundColor: '#ffffff',
                color: '#1d1d1f',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    REPOSITÓRIO
                  </span>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: '#0066cc', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}
                    >
                      Ver código ↗
                    </a>
                  )}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 12px 0', color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#515154', lineHeight: '1.6', margin: '0 0 24px 0', fontWeight: 400 }}>
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    backgroundColor: '#f5f5f7',
                    color: '#1d1d1f',
                    borderRadius: '980px',
                    border: '1px solid #d2d2d7',
                    fontWeight: 500
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JANELA MODAL CENTRAL (Agora Branca) */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'saturate(180%) blur(12px)',
            WebkitBackdropFilter: 'saturate(180%) blur(12px)',
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
              maxWidth: '640px',
              backgroundColor: '#ffffff', // Fundo branco na janela modal
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
              position: 'relative'
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
                border: '1px solid #d2d2d7',
                backgroundColor: '#f5f5f7',
                color: '#1d1d1f',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1d1d1f', margin: '0 0 16px 0', letterSpacing: '-0.02em', paddingRight: '40px' }}>
              {selectedProject.title}
            </h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} style={{
                  fontSize: '12px',
                  padding: '4px 10px',
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  borderRadius: '980px',
                  border: '1px solid #d2d2d7',
                  fontWeight: 500
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '16px', color: '#515154', lineHeight: '1.6', margin: '0 0 32px 0' }}>
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
                  padding: '14px 28px',
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  borderRadius: '980px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Acessar Repositório ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};