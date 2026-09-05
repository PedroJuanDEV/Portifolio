import React, { useRef, useEffect, useState } from 'react';

// Importação das imagens de fundo (ajuste os nomes conforme salvou na pasta assets)
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
}

const experiencesData: ExperienceItem[] = [
  {
    id: '1',
    role: 'SIRENE — Sistema de Gestão para Bombeiros',
    company: 'Projeto Integrador',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Plataforma administrativa de missão crítica para o Corpo de Bombeiros de PE. Back-end estruturado em Node.js com WebSockets para dados em tempo real, reduzindo em até 40% o tempo de resposta.',
    imageUrl: sireneImg
  },
  {
    id: '2',
    role: 'Robótica — Robô NAO v3',
    company: 'Residência Tecnológica: CETEC',
    period: 'Agosto/2025 — Dezembro/2025',
    description: 'Programação do robô bípede NAO v3 para atuar como Intérprete Textual, gerando insights automatizados e relatórios pedagógicos para professores do Ensino Fundamental I.',
    imageUrl: robodImg
  },
  {
    id: '3',
    role: 'Projeto RiseUP — Interface de Ponto',
    company: 'Residência Tecnológica: SiDi',
    period: 'Fevereiro/2025 — Julho/2025',
    description: 'Desenvolvimento de sistema para controle de ponto eletrônico, mapeando a arquitetura lógica e os fluxos do Back-end para garantir integridade e consistência de concorrência.',
    imageUrl: dotImg
  },
  {
    id: '4',
    role: 'Sistema Inteligente de Acesso (Toi)',
    company: 'Residência Tecnológica',
    period: '2025',
    description: 'Sistema inteligente de acesso integrado com tecnologia RFID, otimizando o fluxo de controle, segurança e validação de credenciais de forma automatizada.',
    imageUrl: toiImg
  }
];

export const Experience: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const infiniteExperiences = [...experiencesData, ...experiencesData];

  useEffect(() => {
    if (isPaused) return;

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
    }, 3500);

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
              height: '300px',
              scrollSnapAlign: 'start',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              // Gradiente escuro translúcido por cima da imagem para garantir leitura perfeita do texto
              backgroundImage: item.imageUrl 
                ? `linear-gradient(180deg, rgba(20, 20, 22, 0.85) 0%, rgba(20, 20, 22, 0.92) 100%), url(${item.imageUrl})` 
                : 'linear-gradient(180deg, #1d1d1f 0%, #1d1d1f 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#2997ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#a1a1aa', fontFamily: 'monospace' }}>
                {item.period}
              </span>

              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '12px 0 4px 0', color: '#f5f5f7', letterSpacing: '-0.01em' }}>
                {item.role}
              </h3>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#2997ff', margin: '0 0 12px 0' }}>
                {item.company}
              </p>
              <p style={{ fontSize: '13.5px', color: '#d2d2d7', lineHeight: '1.5', margin: 0, fontWeight: 400 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};