import { CART_SEND_USING_CYCLES } from './constant';
import actionCreators from './action';
import { store } from '../../index';
import { fromPromise, mergeArray, of, Stream, delay} from 'most';
function sendCycle(action) {
    const send$ = action.ACTION.filter(({ type }) => type === CART_SEND_USING_CYCLES);
    
    const sendRed$ = send$.flatMap(({payload}) => {
            if(payload.x > 5)
            {
                return mergeArray([
                    of(store.dispatch(actionCreators.cartChangeStatusItem(1, 3))),
                ]);  
            }else{
                let y = payload.y;
                let x = payload.x;

                if(payload.y >= 3)
                {
                    y = 1;
                    x = payload.x+1;
                }
             
                return mergeArray([
                    of(store.dispatch(actionCreators.cartChangeStatusItem(payload.x, payload.y))),
                    of(actionCreators.cartSendUsingCycle({x: x, y: y+1})), 
                ]).delay(500); 
            }

    });
    

	return {
        ACTION: sendRed$,
	};
}

export default sendCycle;
