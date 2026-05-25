export const COUNTRY_OPTIONS = [
  { value: 'ua', label: 'Ukraine' },
  { value: 'pl', label: 'Poland' },
  { value: 'de', label: 'Germany' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
];

export const getCountryLabel = (value) =>
  COUNTRY_OPTIONS.find((option) => option.value === value)?.label ?? value;
