import React from 'react';

const App = () => {
  const styles = {
    container: {
      background: 'linear-gradient(145deg, #f5f7fc 0%, #e9eef4 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Georgia', 'Times New Roman', Times, serif",
      padding: '2rem',
      margin: 0,
    },
    card: {
      maxWidth: '700px',
      width: '100%',
      background: '#ffffff',
      borderRadius: '1.25rem',
      boxShadow: '0 20px 35px -12px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
    },
    header: {
      background: '#2c3e4e',
      padding: '1.8rem 2rem',
      borderBottom: '3px solid #c9a03d',
    },
    headerTitle: {
      color: '#f9f6ec',
      fontSize: '1.8rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
      fontFamily: "'Palatino', 'Georgia', serif",
      margin: 0,
    },
    headerSub: {
      color: '#dcd3c1',
      fontSize: '0.9rem',
      marginTop: '0.5rem',
      fontStyle: 'italic',
    },
    content: {
      padding: '2.5rem 2rem 2rem 2rem',
    },
    salutation: {
      fontSize: '1.2rem',
      color: '#2c3e4e',
      borderLeft: '4px solid #c9a03d',
      paddingLeft: '1.2rem',
      marginBottom: '1.8rem',
      fontWeight: 500,
    },
    message: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#2c3e4e',
      marginBottom: '2rem',
    },
    paragraph: {
      marginBottom: '1rem',
    },
    signature: {
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: '1px solid #e2e8f0',
      fontSize: '1rem',
      color: '#4a627a',
      textAlign: 'right',
    },
    signatureName: {
      fontWeight: 600,
      fontSize: '1.1rem',
      color: '#2c3e4e',
    },
    signatureTitle: {
      fontSize: '0.85rem',
      color: '#6b7f8f',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Formal Correspondence</h1>
          <div style={styles.headerSub}>A message of respect and esteem</div>
        </div>
        <div style={styles.content}>
          <div style={styles.salutation}>Dear Mr. Subodh,</div>
          <div style={styles.message}>
            <p style={styles.paragraph}>
              It is a privilege to address you. Your name, <strong>Subodh</strong>, carries a dignified resonance—evoking wisdom, clarity, and profound understanding.
            </p>
            <p style={styles.paragraph}>
              I extend my most respectful greetings and am honored by your esteemed presence. Please be assured of my highest attention and unwavering support in all matters you wish to discuss.
            </p>
            <p style={styles.paragraph}>
              How may I assist you today, sir? It would be my sincere pleasure to be of service.
            </p>
          </div>
          <div style={styles.signature}>
            <div style={styles.signatureName}>Yours sincerely,</div>
            <div style={styles.signatureTitle}>Assistant | Professional Services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;