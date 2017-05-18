import data from './data.json';

export const loadData = () => new Promise(
  (resolve) => setTimeout(() => resolve(data), 500)
);
