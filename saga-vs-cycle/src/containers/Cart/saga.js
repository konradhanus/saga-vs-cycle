import { takeEvery,  all, fork,  } from 'redux-saga/effects';

export function* onLogOutSaga() {
   yield true;
}


export function* logoutSaga(){
    yield takeEvery("TEST", onLogOutSaga);
}

export function* cartSaga() {
	yield all([fork(logoutSaga)]);
}
