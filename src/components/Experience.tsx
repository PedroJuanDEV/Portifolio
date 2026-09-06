import React, { useRef, useEffect, useState } from 'react';

// Importação das imagens de fundo
import sireneImg from '../assets/Sirene.jpg';
import robodImg from '../assets/Robo Nao.jpg';
import dotImg from '../assets/Dot.jpg';
import toiImg from '../assets/Toi.jpg';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string; // Propriedade para o link do repositório
}

const experiencesData: ExperienceItem[] = [
  {
    id: '1',
    role: 'SIRENE — Sistema de Gestão para Bombeiros',
    company: 'Projeto Integrador',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Plataforma administrativa de missão crítica para o Corpo de Bombeiros de PE. Back-end estruturado em Node.js com WebSockets para dados em tempo real, reduzindo em até 40% o tempo de resposta.',
    imageUrl: sireneImg,
    githubUrl: 'https://lnkd.in/p/ej_GcSqp' // Substitua pelo link real do repositório, se desejar
  },
  {
    id: '2',
    role: 'Robótica — Robô NAO v3',
    company: 'Residência Tecnológica: CETEC',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Programação do robô bípede NAO v3 para atuar como Intérprete Textual, gerando insights automatizados e relatórios pedagógicos para professores do Ensino Fundamental I.',
    imageUrl: robodImg,
    githubUrl: 'https://github.com/PedroJuanDEV'
  },
  {
    id: '3',
    role: 'Projeto RiseUP — Interface de Ponto',
    company: 'Residência Tecnológica: SiDi',
    period: 'Fevereiro/2025 — Julho/2025',
    description: 'Desenvolvimento de sistema para controle de ponto eletrônico, mapeando a arquitetura lógica e os fluxos do Back-end para garantir integridade e consistência de concorrência.',
    imageUrl: dotImg,
    githubUrl: 'https://github.com/PedroJuanDEV'
  },
  {
    id: '4',
    role: 'Sistema Inteligente de Acesso (Toi)',
    company: 'Residência Tecnológica',
    period: '2025',
    description: 'Sistema inteligente de acesso integrado com tecnologia RFID, otimizando o fluxo de controle, segurança e validação de credenciais de forma automatizada.',
    imageUrl: toiImg,
    githubUrl: 'https://lnkd.in/p/eVwDjY4Z'
  }
];

export const Experience: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const infiniteExperiences = [...experiencesData, ...experiencesData];

  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedExperience]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 380 + 24;
      const activeIndex = Math.round(scrollLeft / cardWidth) % experiencesData.length;
      setCurrentIndex(activeIndex);
    }
  };

  useEffect(() => {
    if (isPaused || selectedExperience) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardWidth = 380 + 24;

        if (scrollLeft >= (scrollWidth - clientWidth) / 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, selectedExperience]);

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 380 + 24;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <section 
        id="experience" 
        style={{
          marginTop: '40px',
          padding: '56px 0',
          width: '100%',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e5e7',
          borderBottom: '1px solid #e5e5e7',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 32px',
          marginBottom: '28px'
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Trajetória Acadêmica
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1d1d1f', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>
            Projetos Acadêmicos & Residências
          </h2>
        </div>

        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingBottom: '16px'
          }}
        >
          {infiniteExperiences.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              onClick={() => setSelectedExperience(item)}
              style={{
                flex: '0 0 380px',
                height: '300px',
                scrollSnapAlign: 'start',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: item.imageUrl 
                  ? `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0, 0, 0, 0.85) 100%), url(${item.imageUrl})` 
                  : 'linear-gradient(180deg, #1d1d1f 0%, #1d1d1f 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#2997ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Topo do card: Link rápido para o repositório (opcional na capa) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 2 }}>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontSize: '12px',
                      color: '#ffffff',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '980px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    Código ↗
                  </a>
                )}
              </div>

              {/* Base do card: Período e Título */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#93c5fd', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                  {item.period}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '6px 0 0 0', color: '#ffffff', letterSpacing: '-0.01em', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                  {item.role}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores em Bolinha */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          {experiencesData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              style={{
                width: currentIndex === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentIndex === index ? '#0066cc' : '#d2d2d7',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0
              }}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* MODAL DETALHADA AO CLICAR NA IMAGEM */}
      {selectedExperience && (
        <div 
          onClick={() => setSelectedExperience(null)}
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
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
              position: 'relative'
            }}
          >
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedExperience(null)}
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

            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#0066cc', fontWeight: 600, textTransform: 'uppercase' }}>
              {selectedExperience.period}
            </span>

            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#1d1d1f', margin: '8px 0 4px 0', letterSpacing: '-0.02em', paddingRight: '40px' }}>
              {selectedExperience.role}
            </h2>

            <p style={{ fontSize: '14px', fontWeight: 600, color: '#515154', margin: '0 0 24px 0' }}>
              {selectedExperience.company}
            </p>

            <p style={{ fontSize: '16px', color: '#515154', lineHeight: '1.6', margin: '0 0 32px 0' }}>
              {selectedExperience.description}
            </p>

            {selectedExperience.githubUrl && (
              <a 
                href={selectedExperience.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  borderRadius: '980px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Acessar Repositório↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};