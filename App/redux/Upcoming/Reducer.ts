// movieSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../model/data';

interface MovieState {
  loading: boolean;
  error: string | null;
  movieData: Movie[];
}

const initialState: MovieState = {
  loading: false,
  error: null,
  movieData: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movieData = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {setLoading, setError, setMovies} = movieSlice.actions;
export default movieSlice.reducer;
