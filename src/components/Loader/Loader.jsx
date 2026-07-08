import { img } from '/src/utils/img';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}>
        <img src={img('image.png')} alt="Logo" className={styles.logo} />
      </div>
    </div>
  );
};
