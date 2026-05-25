import { useQuery } from '@tanstack/react-query';
import { coinsApi } from '../api/coins/coins.api';

export const useCoins = () => {
  return useQuery({
    queryKey: ['coins'],
    queryFn: coinsApi.getMarkets,
    staleTime: 2000,
    cacheTime: 3000,
  });
};