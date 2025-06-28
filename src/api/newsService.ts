import api from './axiosInstance';
import { Article } from '../types/news'; 

export const fetchNews = async (params: {
  category?: string;
  language?: string;
  page?: number;
  query?: string;
}): Promise<Article[]> => {
  const {
    category = 'top',
    language = 'en',
    //page = 1,
    query,
  } = params;
  const finalCategory = category === 'all' ? 'top' : category;

  const response = await api.get('/news', {
    params: {
      country: 'in',
      category:finalCategory,
      language:language,
     // page,
      ...(query ? { q: query } : {}),
    },
  });

  return response.data.results;
};
