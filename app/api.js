import data from './data.json';

export const loadData = () => new Promise(
  (resolve) => setTimeout(() => resolve(data), 500)
);

export const addEntry = (entryData) => new Promise(
  (resolve) => setTimeout(() => resolve(entryData), 500)
);
