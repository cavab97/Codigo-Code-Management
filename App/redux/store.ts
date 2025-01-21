import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UpcomingReducer from './Upcoming/Reducer';
import upcomingSaga from './Upcoming/Saga';
import PopularReducer from './Popular/Reducer';
import popularSaga from './Popular/Saga';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['upcoming', 'popular'],
};

// Combine your reducers
const rootReducer = combineReducers({
  upcoming: UpcomingReducer,
  popular: PopularReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with persisted reducer
export const store = createStore(
  persistedReducer, // Use the persistedReducer
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Create a persistor
export const persistor = persistStore(store);

// Run the sagas
sagaMiddleware.run(upcomingSaga);
sagaMiddleware.run(popularSaga);

// Export the root state type
export type RootState = ReturnType<typeof rootReducer>;
