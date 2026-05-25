export const mapPricesToChartData = (prices = []) =>
  prices.map(([timestamp, price]) => ({
    timestamp,
    price,
    label: new Date(timestamp).toLocaleString('uk-UA', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
    }),
  }));

export const formatUsd = (value) =>
  new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
