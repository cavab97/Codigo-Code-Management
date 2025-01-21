import {call, put} from 'redux-saga/effects';
import {fetchUpcomingMovies} from '../../services/Upcoming/api';
import {PayloadAction} from '@reduxjs/toolkit';
import {setLoading} from './Reducer';

// The saga that fetches upcoming movies
function* fetchUpcomingMoviesSaga(action: PayloadAction<string>) {
  try {
    // Start loading
    yield put(setLoading());

    // Call the API client function (dependency injection)
    const data = yield call(fetchUpcomingMovies, action.payload); // API Key is passed here

    // Dispatch success action with the movies
    yield put(setMovies(data.results)); // Assuming `data.results` contains the movie list
  } catch (error) {
    // Handle errors
    yield put(setError(error.message || 'An error occurred'));
  }
}
