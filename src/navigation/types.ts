
import { Article } from '../types/news';

export type RootStackParamList = {
  HomeMain: undefined;
  NewsDetail: { article: Article };
  WebView: { url: string };
};
