import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './PasswordModal.module.css';

const modalRoot = document.getElementById('modal-root');

const PasswordModal = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const SITE_PASSWORD = import.meta.env.VITE_API_PASSWORD;

  const handleSubmit = () => {
    if (password === SITE_PASSWORD) {
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

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          autoFocus
        />

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
