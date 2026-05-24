import { api } from "../apiClient";

export const coinsApi = {
  getMarkets: () =>
    api('/coins/markets?vs_currency=usd&per_page=50&page=1'),
};