import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchPopularMovies} from '../../services/Popular/api';
import {PayloadAction} from '@reduxjs/toolkit';
import {setLoading, setMovies, setError} from './Reducer';
import {MovieResponse} from '../../model/data';
import {API_KEY} from '../../services';
import {POPULAR_REQUEST} from './Constants';

function* fetchPopularMoviesSaga(action: PayloadAction<string>) {
  try {
    yield put(setLoading());

    const data: MovieResponse = yield call(fetchPopularMovies, API_KEY);

    yield put(setMovies(data.results));
  } catch (error: any) {
    yield put(setError(error.message || 'An error occurred'));
  }
}

export default function* popularSaga() {
  yield takeLatest(POPULAR_REQUEST, fetchPopularMoviesSaga);
}
