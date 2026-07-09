import { img } from '/src/utils/img';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to my work.</h1>

        <img src={img('image.png')} alt="Movies" className={styles.image} />
      </div>
    </section>
  );
};

export default HomePage;
