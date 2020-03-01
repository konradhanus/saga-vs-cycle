import React from 'react';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HotelIcon from '@material-ui/icons/Hotel';
import { CART_CHANGE_STATUS_ITEM } from './constant';

const initialState = [
  {
      "id": 1,
      "name": "WRO-KEF",
      "icon": <FlightLandIcon />,
      "status": 1, 
  },
  {
      "id": 2,
      "name": "Bus",
      "icon": <AirportShuttleIcon />,
      "status": 1,
  },
  {
      "id": 3,
      "name": "Hotel ***",
      "icon": <HotelIcon />,
      "status": 1,
  },
  {
      "id": 4,
      "name": "Bus",
      "icon": <AirportShuttleIcon />,
      "status": 1,
  },
  {
      "id": 5,
      "name": "KEF-WRO",
      "icon": <FlightTakeoffIcon />,
      "status": 1,
  },
];

const reducer = (state = initialState, {type, payload, meta}) => {
  switch (type) {
    case CART_CHANGE_STATUS_ITEM: 
       const newState = [...state];
       newState[meta-1] = {...newState[meta-1], 'status': payload};
      return newState;
    default: {
      return state;
    }
  }
};

export default reducer;
