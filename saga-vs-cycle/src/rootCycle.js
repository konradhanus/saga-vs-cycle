import { combineCycles } from 'redux-cycles';
//import configCycle from 'src/components/config/cycle';
import sendCycle from './containers/Cart/cycle';

export default combineCycles(
  //configCycle,
  sendCycle
);
