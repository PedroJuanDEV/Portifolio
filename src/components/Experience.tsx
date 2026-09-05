import React, { useRef, useEffect, useState } from 'react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  imageUrl?: string;
}

const experiencesData: ExperienceItem[] = [
  {
    id: '1',
    role: 'Bootcamp de IA e ServiceNow',
    company: 'Residência Tecnológica: EY',
    period: 'Março/2026 — Julho/2026',
    description: 'Imersão de 4 meses focada em Inteligência Artificial. Desenvolvimento e simulação de diretrizes de segurança aplicadas a 5+ cenários complexos de agentes de IA e capacitação na plataforma ServiceNow.',
    imageUrl: '/assets/ey-bg.png'
  },
  {
    id: '2',
    role: 'SIRENE — Sistema de Gestão para Bombeiros',
    company: 'Projeto Integrador',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Plataforma administrativa de missão crítica para o Corpo de Bombeiros de PE. Back-end estruturado em Node.js com WebSockets para dados em tempo real, reduzindo em até 40% o tempo de resposta.',
    imageUrl: '/assets/sirene-bg.png'
  },
  {
    id: '3',
    role: 'Robótica — Robô NAO v3',
    company: 'Residência Tecnológica: CETEC',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Programação do robô bípede NAO v3 para atuar como Intérprete Textual, gerando insights automatizados e relatórios pedagógicos para professores do Ensino Fundamental I.',
    imageUrl: '/assets/nao-bg.png'
  },
  {
    id: '4',
    role: 'Projeto RiseUP — Interface de Ponto',
    company: 'Residência Tecnológica: SiDi',
    period: 'Fevereiro/2025 — Julho/2025',
    description: 'Desenvolvimento de sistema para controle de ponto eletrônico, mapeando a arquitetura lógica e os fluxos do Back-end para garantir integridade e consistência de concorrência.',
    imageUrl: '/assets/riseup-bg.png'
  },
  {
    id: '5',
    role: 'Projeto Kick-off — Moeda Sustentável',
    company: 'Residência Tecnológica: Kick-off',
    period: 'Novembro/2024 — Dezembro/2024',
    description: 'Ideação e modelagem matemática e lógica de negócios de uma Moeda Sustentável voltada para a gamificação do turismo sustentável em Recife.',
    imageUrl: '/assets/kickoff-bg.png'
  }
];

export const Experience: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos a lista para criar o efeito de loop infinito
  const infiniteExperiences = [...experiencesData, ...experiencesData];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardWidth = 380 + 24; // Largura do card + gap

        // Verifica se chegou ao fim da primeira metade do carrossel duplicado
        if (scrollLeft >= (scrollWidth - clientWidth) / 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollManual = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 404;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '28px'
      }}>
        <div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#0066cc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Trajetória Acadêmica
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1d1d1f', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>
            Projetos Acadêmicos & Residências
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => scrollManual('left')}
            aria-label="Anterior"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f7',
              border: '1px solid #e5e5e7',
              color: '#1d1d1f',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600
            }}
          >
            ←
          </button>
          <button 
            onClick={() => scrollManual('right')}
            aria-label="Próximo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f7',
              border: '1px solid #e5e5e7',
              color: '#1d1d1f',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600
            }}
          >
            →
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
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
            style={{
              flex: '0 0 380px',
              height: '280px',
              scrollSnapAlign: 'start',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              backgroundImage: item.imageUrl ? `linear-gradient(180deg, rgba(245, 245, 247, 0.85) 0%, rgba(245, 245, 247, 0.95) 100%), url(${item.imageUrl})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #e5e5e7',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e5e7';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#86868b', fontFamily: 'monospace' }}>
                  {item.period}
                </span>
                
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt={item.company} 
                    style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'contain' }}
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                )}
              </div>

              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '12px 0 4px 0', color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                {item.role}
              </h3>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#0066cc', margin: '0 0 12px 0' }}>
                {item.company}
              </p>
              <p style={{ fontSize: '13.5px', color: '#515154', lineHeight: '1.5', margin: 0, fontWeight: 400 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};