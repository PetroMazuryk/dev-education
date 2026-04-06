import { useState } from 'react';
import styles from './Image.module.css';

export const Image = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <img className={styles.fullImage} src={src} alt={alt} />
        </div>
      )}
    </>
  );
};
