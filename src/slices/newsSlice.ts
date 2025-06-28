import {createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image_url?: string;
};

interface NewsState {
  articles: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchNewsSuccess: (state, action: PayloadAction<NewsItem[]>) => {
      state.loading = false;
      state.articles = action.payload;
    },
    fetchNewsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;

export default newsSlice.reducer;
