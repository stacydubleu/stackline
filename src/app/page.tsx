'use client';

import Item from '@/components/Item/Item';
import Graph from '@/components/Graph/Graph';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { fetchItemData } from '@/lib/itemSlice';

interface ItemData {
  tags: string[];
  image: string;
  title: string;
  subtitle: string;
  brand: string;
  id: string;
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
    length: number;
  };
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(state => state.item);
  const data = useAppSelector(state => state.item.itemData);

  useEffect(() => {
    dispatch(fetchItemData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  const item = data[0] as ItemData;

  return (
    <main className={styles.main}>
      <div className={styles.itemContainer}>
        <Item
          data={{
            tags: item?.tags,
            image: item?.image,
            title: item?.title,
            subtitle: item?.subtitle,
            brand: item?.brand,
            id: item?.id,
          }}
        />
      </div>
      <div className={styles.graphContainer}>
        {/* @ts-ignore */}
        <Graph sales={item?.sales} />
      </div>
      <div className={styles.tableContainer}></div>
    </main>
  );
}
