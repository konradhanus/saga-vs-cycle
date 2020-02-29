const initialState = "tests"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST": 
      return true
    default: {
      return state;
    }
  }
};

export default reducer;
