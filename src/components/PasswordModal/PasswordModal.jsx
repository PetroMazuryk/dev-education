import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import sprite from '../../assets/sprite.svg';
import styles from './PasswordModal.module.css';

const modalRoot = document.getElementById('modal-root');
const ACCESS_KEY = 'siteAccess';

const PasswordModal = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const SITE_PASSWORD = import.meta.env.VITE_API_PASSWORD;

  useEffect(() => {
    const hasAccess = localStorage.getItem(ACCESS_KEY);
    if (hasAccess === 'true') {
      onSuccess();
    }
  }, [onSuccess]);

  const handleSubmit = () => {
    if (password === SITE_PASSWORD) {
      localStorage.setItem(ACCESS_KEY, 'true');

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
