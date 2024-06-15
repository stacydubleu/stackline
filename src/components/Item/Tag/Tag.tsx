import styles from './Tag.module.scss';
import Image from 'next/image';

export default function Tag({ text }: { text: string }) {
  /* async function, server side, pass in src, alt, tags, desc*/
  return (
    <div className={styles.tag}>
      <div className={styles.tagText}>{text}</div>
    </div>
  );
}
