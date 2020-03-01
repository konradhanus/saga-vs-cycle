import { applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import { createCycleMiddleware } from 'redux-cycles';
import createSagaMiddleware from 'redux-saga';
// import rootCycle from './rootCycle';
import { run } from '@cycle/most-run';
import rootCycle from './rootCycle';

//start


const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;

run(rootCycle, {
  ACTION: makeActionDriver()
})


//end


export const sagaMiddleware = createSagaMiddleware();
// @ts-ignore: REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(sagaMiddleware, cycleMiddleware));


export default () => createStore(
        rootReducer,
        middleware);
