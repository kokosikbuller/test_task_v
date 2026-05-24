import { useQuery } from '@tanstack/react-query';
import { coinsApi } from '../api/coins/coins.api';

const REFETCH_INTERVAL_MS = 15000;

export const useMarketChart = (coinId) => {
  return useQuery({
    queryKey: ['marketChart', coinId],
    queryFn: () => coinsApi.getMarketChart(coinId),
    refetchInterval: REFETCH_INTERVAL_MS,
    staleTime: 5000,
  });
};
