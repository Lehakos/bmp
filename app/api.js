import data from './data.json';
const DELAY = 3000;

export const loadData = () => new Promise(
  (resolve) => setTimeout(() => resolve(data), DELAY)
);

export const addEntry = (entryData) => new Promise(
  (resolve) => setTimeout(() => resolve(entryData), DELAY)
);
