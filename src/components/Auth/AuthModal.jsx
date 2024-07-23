import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada yapılacak
    console.log('Giriş Formu Gönderildi');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Kayıt işlemleri burada yapılacak
    console.log('Kayıt Formu Gönderildi');
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{activeTab === 'login' ? 'Giriş' : 'Kayıt Ol'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {activeTab === 'login' ? (
            <>
              <form onSubmit={handleLogin} className="auth-form">
                <input type="email" placeholder="E-posta" required />
                <input type="password" placeholder="Şifre" required />
                <button type="submit">Giriş</button>
              </form>
              <p className="switch-text">
                Hesabınız yok mu? <button onClick={() => toggleTab('register')}>Kayıt Ol</button>
              </p>
            </>
          ) : (
            <>
              <form onSubmit={handleRegister} className="auth-form">
                <input type="text" placeholder="Kullanıcı Adı" required />
                <input type="email" placeholder="E-posta Adresi" required />
                <input type="password" placeholder="Şifre" required />
                <input type="tel" placeholder="Telefon Numarası" required />
                <input type="text" placeholder="Adres" required />
                <button type="submit">Kayıt Ol</button>
              </form>
              <p className="switch-text">
                Zaten hesabınız var mı? <button onClick={() => toggleTab('login')}>Giriş Yap</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
