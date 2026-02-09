import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import sprite from '../../assets/sprite.svg';
import styles from './PasswordModal.module.css';

const modalRoot = document.getElementById('modal-root');
const SITE_PASSWORD = import.meta.env.VITE_API_PASSWORD;
const ACCESS_DURATION = 24 * 60 * 60 * 1000;
const ACCESS_KEY = 'siteAccess';

const PasswordModal = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(ACCESS_KEY);

    if (saved) {
      const expiresAt = Number(saved);

      if (Date.now() < expiresAt) {
        onSuccess();
      } else {
        localStorage.removeItem(ACCESS_KEY);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (password === SITE_PASSWORD) {
      const expiresAt = Date.now() + ACCESS_DURATION;
      localStorage.setItem(ACCESS_KEY, expiresAt);

      onSuccess();
    } else {
      setError('Невірний пароль');
      setPassword('');
    }
  };

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Введіть пароль для доступу</h2>

        <div className={styles.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${error ? styles.inputError : ''}`}
          />

          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <svg width="20" height="20" stroke="currentColor" fill="none">
              <use
                href={`${sprite}#${showPassword ? 'icon-eye-off' : 'icon-eye'}`}
              />
            </svg>
          </button>
        </div>

        <div className={styles.errorWrapper}>
          {error && <p className={styles.error}>{error}</p>}
        </div>

        <button className={styles.button} onClick={handleSubmit}>
          Підтвердити
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default PasswordModal;
