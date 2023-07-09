import axios from 'axios';

export const DATA_URL = 'https://if-fox-library-api.onrender.com/api/library';

const cash = new Map();

export const fetchData = (url) => {
  if (!cash.has(url)) {
    cash.set(
      url,
      axios.get(url).then((response) => response.data),
    );
  }
  return cash.get(url);
};

export const getBooks = async () => {
  return fetchData(DATA_URL);
};
