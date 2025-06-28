import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchNewsFailure, fetchNewsStart, fetchNewsSuccess } from '../slices/newsSlice';
import { fetchNews } from '../api/newsService';
import { PayloadAction } from '@reduxjs/toolkit';

interface FetchNewsPayload {
  category: string;
  query: string;
  language: string; 
}

function* handleFetchNews(action: PayloadAction<FetchNewsPayload>): Generator<any, void, any> {
  try {
    yield put(fetchNewsStart());

    const { category, query, language } = action.payload; 

    const data = yield call(fetchNews, { category, query, language });
    yield put(fetchNewsSuccess(data));
  } catch (error: any) {
    yield put(fetchNewsFailure(error.message));
  }
}

export default function* newsSaga() {
  yield takeLatest('news/fetchNewsRequest', handleFetchNews);
}
