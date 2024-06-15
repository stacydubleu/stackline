'use client';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Graph.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSalesByMonth, initializeChartData } from '../../utils/utils';

interface Sales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
  length: number;
}

interface GraphProps {
  sales: Sales[];
}

export default function Graph({ sales }: GraphProps) {
  Chart.register(...registerables);
  const [chartData, setChartData] = useState(() => initializeChartData());

  useEffect(() => {
    if (sales && sales.length > 0) {
      const retailSalesByMonth = getSalesByMonth(sales, 'retailSales');
      const wholesaleSalesByMonth = getSalesByMonth(sales, 'wholesaleSales');
      //@ts-ignore
      setChartData(prevState => ({
        ...prevState,
        datasets: [
          { ...prevState.datasets[0], data: retailSalesByMonth },
          { ...prevState.datasets[1], data: wholesaleSalesByMonth },
        ],
      }));
    }
  }, [sales]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className={styles.graph}>
      <div className={styles.title}>Retail Sales</div>
      <div className={styles.graph}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
