import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import UpcomingReducer from './Upcoming/Reducer';
import upcomingSaga from './Upcoming/Saga';

import PopularReducer from './Popular/Reducer';
import popularSaga from './Popular/Saga';

const rootReducer = combineReducers({
  upcoming: UpcomingReducer,
  popular: PopularReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(upcomingSaga);
sagaMiddleware.run(popularSaga);
export type RootState = ReturnType<typeof rootReducer>;
