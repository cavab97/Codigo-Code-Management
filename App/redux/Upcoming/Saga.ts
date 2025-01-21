import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchUpcomingMovies} from '../../services/Upcoming/api';
import {UPCOMING_REQUEST} from './Constants';
import {PayloadAction} from '@reduxjs/toolkit';
import {setLoading, setMovies, setError} from './Reducer';
import {MovieResponse} from '../../model/data';
import {API_KEY} from '../../services';

function* fetchUpcomingMoviesSaga(action: PayloadAction<string>) {
  try {
    yield put(setLoading());

    const data: MovieResponse = yield call(fetchUpcomingMovies, API_KEY);

    yield put(setMovies(data.results));
  } catch (error: any) {
    yield put(setError(error.message || 'An error occurred'));
  }
}

export default function* upcomingSaga() {
  yield takeLatest(UPCOMING_REQUEST, fetchUpcomingMoviesSaga);
}
