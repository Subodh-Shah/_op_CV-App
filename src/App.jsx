import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="greeting-container">
      <div className="greeting-card">
        <div className="greeting-header">
          <h1 className="greeting-header-title">Greeting Letter</h1>
          <div className="greeting-header-sub">A Note for Subodh</div>
        </div>
        <div className="greeting-content">
          <div className="greeting-salutation">Dear Subodh,</div>
          <div className="greeting-message">
            <p>I hope this message finds you well. This is a simple, straightforward greeting — no formalities or elaborate praise, just a sincere hello.</p>
            <p>How may I assist you today? Please feel free to let me know what you need help with, and I will be glad to support you.</p>
            <p>Looking forward to your reply.</p>
          </div>
          <div className="greeting-signature">
            <div className="greeting-signature-name">Best regards,</div>
            <div className="greeting-signature-title">Assistant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;