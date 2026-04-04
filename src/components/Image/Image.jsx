import styles from './Image.module.css';

export const Image = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};
