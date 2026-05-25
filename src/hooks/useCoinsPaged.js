import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { coinsApi } from '../api/coins/coins.api';

const PER_PAGE = 20;

export const useCoinsPaged = (page) => {
  return useQuery({
    queryKey: ['coins', 'paged', page],
    queryFn: () => coinsApi.getMarkets({ perPage: PER_PAGE, page }),
    placeholderData: keepPreviousData,
    staleTime: 2000,
    gcTime: 3000,
  });
};

export { PER_PAGE };
