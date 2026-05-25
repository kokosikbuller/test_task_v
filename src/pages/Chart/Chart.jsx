import { useState } from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import { Alert, Button, Flex, Segmented, Typography } from 'antd';
import { useMarketChart } from '../../hooks/useMarketChart';
import PriceChart from './PriceChart.jsx';
import { mapPricesToChartData } from './chartUtils.js';

const { Title } = Typography;

const COIN_OPTIONS = [
  { label: 'Bitcoin', value: 'bitcoin' },
  { label: 'Ethereum', value: 'ethereum' },
  { label: 'Dogecoin', value: 'dogecoin' },
];

const Chart = () => {
  const [coinId, setCoinId] = useState('bitcoin');
  const [isManualRefresh, setIsManualRefresh] = useState(false);

  const { data, isPending, isFetching, error, refetch } = useMarketChart(coinId);

  const chartData = mapPricesToChartData(data?.prices);

  const showChartLoader = isPending || (isManualRefresh && isFetching);

  const handleRefresh = async () => {
    setIsManualRefresh(true);
    try {
      await refetch();
    } finally {
      setIsManualRefresh(false);
    }
  };

  if (error) {
    return (
      <Alert
        message="Error"
        description={error?.message}
        type="error"
        showIcon
      />
    );
  }

  return (
    <Flex vertical gap="large">
      <Title level={1}>Price chart (7 days)</Title>

      <Flex wrap="wrap" gap="middle" align="center" justify="space-between">
        <Segmented
          options={COIN_OPTIONS}
          value={coinId}
          onChange={setCoinId}
        />
        <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
          Оновити
        </Button>
      </Flex>

      <PriceChart data={chartData} loading={showChartLoader} />
    </Flex>
  );
};

export default Chart;
