import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "pedrojuanaluno22@gmail.com"; // Substitua pelo seu e-mail de contato real se necessário

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" style={{
      marginTop: '80px',
      padding: '80px 32px 48px 32px',
      backgroundColor: '#1d1d1f',
      color: '#f5f5f7',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        {/* Bloco Superior: Chamada para Ação */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '32px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
            VAMOS CONVERSAR?
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-0.02em', color: '#ffffff' }}>
              Em busca da primeira oportunidade em Tech.
            </h2>
            <p style={{ fontSize: '16px', color: '#86868b', lineHeight: '1.6', margin: 0 }}>
              Estou ativamente aberto a vagas de estágio em desenvolvimento Back-end (.NET, Node.js) e desafios de arquitetura de dados. Tem um projeto ou vaga na sua equipe? Vamos trocar uma ideia!
            </p>
          </div>

          {/* Botão de Copiar E-mail Rápido */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={handleCopyEmail}
              style={{
                padding: '16px 28px',
                backgroundColor: '#2997ff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(41, 151, 255, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0077ed'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2997ff'}
            >
              {copied ? '✓ E-mail Copiado!' : 'Copiar E-mail 📋'}
            </button>
            <span style={{ fontSize: '12px', color: '#86868b', textAlign: 'center', fontFamily: 'monospace' }}>
              {email}
            </span>
          </div>
        </div>

        {/* Divisor */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bloco Inferior: Links Sociais e Copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Links Sociais */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a 
              href="https://github.com/PedroJuanDEV" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#f5f5f7', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#f5f5f7'}
            >
              GitHub ↗
            </a>
            <a 
              href="https://linkedin.com/in/pedrojuandevv/" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#f5f5f7', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#f5f5f7'}
            >
              LinkedIn ↗
            </a>
            <a 
              href="/Curriculo ---Pedro Juan.pdf" 
              download="Curriculo ---Pedro Juan.pdf"
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#f5f5f7', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#f5f5f7'}
            >
              Baixar CV ↗
            </a>
          </div>

          {/* Copyright */}
          <p style={{ fontSize: '13px', color: '#86868b', margin: 0, fontFamily: 'monospace' }}>
            © 2026 Pedro Juan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};