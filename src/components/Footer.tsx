import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '32px 24px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#a3a3a3',
      backgroundColor: '#ffffff'
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Pedro Juan.</p>
    </footer>
  );
};