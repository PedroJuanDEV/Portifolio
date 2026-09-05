import React from 'react';
import { certificatesData } from '../data/certificates';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" style={{
      marginTop: '24px',
      marginBottom: '48px',
      padding: '48px 32px',
      maxWidth: '896px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{
        fontSize: '12px',
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#0f172a',
        fontWeight: 800,
        marginBottom: '32px'
      }}>
        Certificados
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px'
      }}>
        {certificatesData.map((cert) => (
          <div 
            key={cert.id} 
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace', fontWeight: 600 }}>{cert.date}</span>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '4px 0 2px 0', color: '#0f172a' }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#334155', margin: '0 0 12px 0', fontWeight: 500 }}>{cert.issuer}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {cert.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    padding: '2px 6px',
                    backgroundColor: '#f1f5f9',
                    color: '#0f172a',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0',
                    fontWeight: 600
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: '#0f172a', 
                  textDecoration: 'underline' 
                }}
              >
                Ver credencial →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};