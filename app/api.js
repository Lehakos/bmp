import data from './data.json';

// Задержка для имитации ожидания ответа от сервера
const DELAY = 3000;

export const loadData = () => new Promise(
  (resolve) => setTimeout(() => resolve(data), DELAY)
);

export const addEntry = (entryData) => new Promise(
  (resolve) => setTimeout(() => resolve(entryData), DELAY)
);
