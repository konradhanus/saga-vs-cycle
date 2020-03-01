import { CART_SEND_USING_SAGA, CART_CHANGE_STATUS_ITEM } from './constant';

const actionCreators = {
    cartSendUsingSaga: () =>  ({ type: CART_SEND_USING_SAGA }),
    cartChangeStatusItem: (id, status) =>  ({ type: CART_CHANGE_STATUS_ITEM, payload: status, meta: id }),
}

export default actionCreators;