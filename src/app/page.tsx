'use client';

import Item from '@/components/Item/Item';
import Graph from '@/components/Graph/Graph';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { fetchItemData } from '@/lib/itemSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const { itemData, isLoading, isError } = useAppSelector(state => state.item);

  useEffect(() => {
    dispatch(fetchItemData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  const item =
    itemData[0] && typeof itemData[0] === 'object' ? itemData[0] : null;

  return (
    <main className={styles.main}>
      <div className={styles.itemContainer}>
        <Item
          data={{
            tags: itemData[0]?.tags,
            image: itemData[0]?.image,
            title: itemData[0]?.title,
            subtitle: itemData[0]?.subtitle,
            brand: itemData[0]?.brand,
            id: itemData[0]?.id,
          }}
        />
      </div>
      <div className={styles.graphContainer}>
        <Graph sales={item?.sales} />
      </div>
      <div className={styles.tableContainer}></div>
    </main>
  );
}
