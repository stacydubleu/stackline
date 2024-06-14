// utils.ts
interface Sales {
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  };
}

export const getSalesByMonth = (
  salesData: Sales[],
  type: 'retailSales' | 'wholesaleSales'
) => {
  const salesByMonth = Array.from({ length: 12 }).fill(0);

  salesData.forEach(sale => {
    const monthIndex = parseInt(sale.weekEnding.split('-')[1]) - 1;
    const salesAmount = sale[type];

    salesByMonth[monthIndex] += salesAmount;
  });

  return salesByMonth;
};

export const initializeChartData = () => {
  return {
    labels: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUNE',
      'JULY',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ],
    datasets: [
      {
        label: 'Retail Sales',
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderColor: 'rgb(70, 168, 246)',
        data: [],
      },
      {
        label: 'Wholesale Sales',
        fill: false,
        lineTension: 0.5,
        pointRadius: 0,
        pointHoverRadius: 5,
        borderColor: 'rgb(155, 155, 191)',
        data: [],
      },
    ],
  };
};
