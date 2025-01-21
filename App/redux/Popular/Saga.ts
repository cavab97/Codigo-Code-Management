import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchPopularMovies} from '../../services/Popular/api';
import {POPULAR_REQUEST} from './Constants';
import {popularError, popularRequest, popularSuccess} from './Actions';
import {API_KEY} from '../../services';
import {MovieResponse} from '../../model/data';
import {PayloadAction} from '@reduxjs/toolkit';

function* popularAction(action: PayloadAction<string>) {
  try {
    const populars: MovieResponse = yield call(fetchPopularMovies, API_KEY);

    yield put(popularSuccess(populars));
  } catch (error: any) {
    yield put(popularError(error.message));
  }
}

export default function* popularSaga() {
  yield takeLatest(POPULAR_REQUEST, popularAction);
}
