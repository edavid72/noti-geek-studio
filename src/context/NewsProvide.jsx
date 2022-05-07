import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  // Category State
  const [category, setCategory] = useState('general');

  // News State
  const [news, setNews] = useState([]);

  // Pages State
  const [page, setPage] = useState(1);

  // Total News State
  const [totalNews, setTotalNews] = useState(0);

  // Function that gets the category
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePage = (e, value) => {
    setPage(value);
  };
  // * API consult "https://newsapi.org/" by "Category"
  useEffect(() => {
    const apiConsult = async () => {
      // API KEY
      const apiKey = import.meta.env.VITE_API_KEY;

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      const { data } = await axios(url);

      setNews(data.articles);
      setTotalNews(data.totalResults);
      setPage(1);
    };

    apiConsult();
  }, [category]);

  // * API consult "https://newsapi.org/" by "Page"
  useEffect(() => {
    const apiConsult = async () => {
      // API KEY
      const apiKey = import.meta.env.VITE_API_KEY;

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${apiKey}`;

      const { data } = await axios(url);

      setNews(data.articles);
      setTotalNews(data.totalResults);
    };

    apiConsult();
  }, [page]);

  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        totalNews,
        handleChangePage,
        page,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
