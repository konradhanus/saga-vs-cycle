import { takeEvery,  all, call, fork, delay, put} from 'redux-saga/effects';
import { CART_SEND_USING_SAGA } from './constant';
import actionCreators from './action';

export function* onSendSaga() {
   yield delay(1000);
   yield put(actionCreators.cartChangeStatusItem(1, 2));
   yield delay(2000);
   yield put(actionCreators.cartChangeStatusItem(1, 3));
   yield put(actionCreators.cartChangeStatusItem(2, 2));
   yield delay(500);
   yield put(actionCreators.cartChangeStatusItem(2, 3));
   yield put(actionCreators.cartChangeStatusItem(3, 2));
   yield delay(3000);
   yield put(actionCreators.cartChangeStatusItem(3, 3));
   yield put(actionCreators.cartChangeStatusItem(4, 2));
   yield delay(2500);
   yield put(actionCreators.cartChangeStatusItem(4, 3));
   yield put(actionCreators.cartChangeStatusItem(5, 2));
   yield delay(1000);
   yield put(actionCreators.cartChangeStatusItem(5, 3));
}

export function* sendSaga(){
    yield takeEvery(CART_SEND_USING_SAGA, onSendSaga);
}

export function* cartSaga() {
	yield all([fork(sendSaga)]);
}
