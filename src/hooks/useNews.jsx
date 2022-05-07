import { useContext } from 'react';
import NewsContext from '../context/NewsProvide';

const useNews = () => {
  return useContext(NewsContext);
};

export default useNews;
