'use client';

import styles from './Item.module.scss';
import Tag from './Tag/Tag';
import Image from 'next/image';

interface ItemProps {
  data: {
    tags: string[]; // Define the type for 'tags' as an array of strings
    image: string;
    title: string;
    subtitle: string;
    brand: string;
    id: string;
  };
}

export default function Item({ data }: ItemProps) {
  const { tags, image, title, subtitle, brand, id } = data;
  return (
    <div className={styles.item} id={id}>
      <Image
        src={image}
        alt={brand}
        className={styles.itemImage}
        width={200}
        height={200}
        priority
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{subtitle}</div>
      <div className={styles.line} />
      <div className={styles.tags}>
        {tags?.map(tag => (
          <Tag text={tag} key={tag} />
        ))}
      </div>
      <div className={styles.line} />
    </div>
  );
}
