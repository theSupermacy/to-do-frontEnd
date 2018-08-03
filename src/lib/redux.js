import { createStore } from 'redux';
const INITIAL_STATE = {
  tasks: [],
  loading: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case '':
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

export default createStore(reducer, INITIAL_STATE);
