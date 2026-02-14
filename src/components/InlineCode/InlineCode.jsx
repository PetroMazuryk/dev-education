import styles from './InlineCode.module.css';

const InlineCode = ({ children }) => {
  return <span className={styles.code}>{children}</span>;
};

export default InlineCode;
