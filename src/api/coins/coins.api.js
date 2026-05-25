import { api } from "../apiClient";

export const coinsApi = {
  getMarkets: ({ perPage = 50, page = 1 } = {}) =>
    api(
      `/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`,
    ),

  getMarketChart: (coinId) =>
    api(`/coins/${coinId}/market_chart?vs_currency=usd&days=7`),
};