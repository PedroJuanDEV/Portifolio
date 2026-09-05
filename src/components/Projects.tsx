import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  // Estado para controlar qual projeto está selecionado no modal
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  // Efeito para travar a rolagem da página quando a janela modal estiver aberta
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
      <section id="projects" style={{
        marginTop: '24px',
        padding: '48px 32px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#161617',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#f5f5f7',
          letterSpacing: '-0.02em',
          marginBottom: '32px'
        }}>
          Projetos em Destaque
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)} // Abre o modal ao clicar na box
              style={{
                padding: '32px',
                backgroundColor: '#1d1d1f',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
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
                      onClick={(e) => e.stopPropagation()} // Impede que o clique direto no link abra o modal junto
                      style={{ color: '#2997ff', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}
                    >
                      Ver código ↗
                    </a>
                  )}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 12px 0', color: '#f5f5f7', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#86868b', lineHeight: '1.6', margin: '0 0 24px 0', fontWeight: 400 }}>
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    backgroundColor: '#000000',
                    color: '#f5f5f7',
                    borderRadius: '980px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
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

      {/* JANELA MODAL CENTRAL */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)} // Fecha o modal ao clicar no fundo
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.65)', // Fundo escurecido
            backdropFilter: 'saturate(180%) blur(12px)', // Efeito de desfoque
            WebkitBackdropFilter: 'saturate(180%) blur(12px)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Caixa de Conteúdo do Modal (Mantendo a paleta Dark Mode) */}
          <div 
            onClick={(e) => e.stopPropagation()} // Impede que o clique dentro da caixa feche o modal
            style={{
              width: '100%',
              maxWidth: '640px',
              backgroundColor: '#1d1d1f',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
              position: 'relative'
            }}
          >
            {/* Botão Fechar (X) */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: '#2d2d2f',
                color: '#f5f5f7',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d3d3f'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2d2d2f'}
            >
              ✕
            </button>

            {/* Título e Tecnologias */}
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f5f5f7', margin: '0 0 16px 0', letterSpacing: '-0.02em', paddingRight: '40px' }}>
              {selectedProject.title}
            </h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} style={{
                  fontSize: '12px',
                  padding: '4px 10px',
                  backgroundColor: '#000000',
                  color: '#f5f5f7',
                  borderRadius: '980px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontWeight: 500
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Descrição - Renderiza a detailedDescription se existir em projectsData, senão a description padrão */}
            <p style={{ fontSize: '16px', color: '#86868b', lineHeight: '1.6', margin: '0 0 32px 0' }}>
              {/* @ts-ignore - Caso você não tenha tipado detailedDescription na sua interface base */}
              {selectedProject.detailedDescription || selectedProject.description}
            </p>

            {/* Botão de Ação para o Repositório - Invertido (Branco) para dar destaque */}
            {selectedProject.githubUrl && (
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  borderRadius: '980px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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