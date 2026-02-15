import styles from './InlineCode.module.css';

export const InlineCode = ({ children }) => {
  return <span className={styles.code}>{children}</span>;
};
