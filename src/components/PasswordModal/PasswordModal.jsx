import { createPortal } from 'react-dom';
import styles from './PasswordModal.module.css';

const modalRoot = document.getElementById('modal-root');

const PasswordModal = ({ onSuccess }) => {
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Введіть пароль для доступу</h2>

        <input
          type="password"
          placeholder="••••••••"
          className={styles.input}
        />

        <button className={styles.button} onClick={onSuccess}>
          Підтверлити
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default PasswordModal;
