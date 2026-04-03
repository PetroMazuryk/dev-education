import styles from './Image.module.css';

export const Image = ({ src, alt = 'image', width, height }) => {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
