const BASE_URL = 'https://api.coingecko.com/api/v3';

export const api = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};
