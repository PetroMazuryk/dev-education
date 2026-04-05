import { CodeBlock } from '../CodeBlock/CodeBlock';
import { InlineCode } from '../InlineCode/InlineCode';
import { Image } from '../Image/Image';

import styles from './LessonBlock.module.css';

export const LessonBlock = ({ task }) => {
  const {
    id,
    title,
    link,
    requirements,
    description,
    inlineCode,
    starterCode,
    solution,
    language = 'javascript',
    images,
  } = task;

  return (
    <section className={styles.block}>
      <h3 className={styles.title}>
        <span className={styles.number}>{id}</span> {title}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            ▶ Відео YouTube
          </a>
        )}
      </h3>

      {requirements && (
        <ul className={styles.requirements}>
          {requirements.map((req, index) => (
            <li key={`${req}-${index}`}>{req}</li>
          ))}
        </ul>
      )}

      {inlineCode && (
        <p className={styles.inline}>
          <InlineCode>{inlineCode}</InlineCode>
        </p>
      )}

      {starterCode && <CodeBlock code={starterCode} language={language} />}

      {solution && (
        <details className={styles.solution}>
          <summary className={styles.summary}>Показати рішення</summary>
          <CodeBlock code={solution} language={language} />
          {description && <p className={styles.description}>{description}</p>}
        </details>
      )}

      {images && (
        <div className={styles.gallery}>
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`img-${index}`} />
          ))}
        </div>
      )}
    </section>
  );
};
