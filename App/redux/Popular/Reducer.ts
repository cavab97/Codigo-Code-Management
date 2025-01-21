import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, MovieResponse} from '../../model/data';

interface PopularState {
  loading: boolean;
  error: string | null;
  movieData: MovieResponse[];
  movieSingleData: Movie[];
}

const initialState: PopularState = {
  loading: false,
  error: null,
  movieData: [],
  movieSingleData: [],
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    popularRequest: state => {
      state.loading = true;
      state.error = null;
    },
    popularSuccess: (state, action: PayloadAction<MovieResponse[]>) => {
      state.loading = false;
      state.movieData = action.payload;
      state.error = null;
    },
    popularFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    popularAdd(state, action: PayloadAction<MovieResponse | MovieResponse[]>) {
      if (state.movieData) {
        const newData = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];

        newData.forEach((response: MovieResponse) => {
          if (response.results) {
            state.movieSingleData.push(...response.results);
          }
        });
      }
    },
    popularReset: (
      state,
      action: PayloadAction<MovieResponse | MovieResponse[]>,
    ) => {
      state.loading = false;
      state.movieData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
    },
  },
});

export const {
  popularRequest,
  popularSuccess,
  popularFailed,
  popularAdd,
  popularReset,
} = popularSlice.actions;

export default popularSlice.reducer;
