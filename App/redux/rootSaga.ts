import {all} from 'redux-saga/effects';
import upcomingSaga from './Upcoming/Saga';
import popularSaga from './Popular/Saga';

export default function* rootSaga() {
  yield all([upcomingSaga(), popularSaga()]);
}
