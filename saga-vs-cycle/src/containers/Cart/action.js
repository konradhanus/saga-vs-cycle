import { CART_SEND_USING_SAGA, CART_CHANGE_STATUS_ITEM, CART_SEND_USING_CYCLES } from './constant';

const actionCreators = {
    cartSendUsingSaga: () =>  ({ type: CART_SEND_USING_SAGA }),
    cartSendUsingCycle: (step) => ({ type: CART_SEND_USING_CYCLES, payload: step }),
    cartChangeStatusItem: (id, status) =>  ({ type: CART_CHANGE_STATUS_ITEM, payload: status, meta: id }),
}

export default actionCreators;