import { createStore } from 'redux';
import { ON_PINNED_TASK, ON_ARCHIVE_TASK } from './Constants';
import { fakeTaskList } from './faker';
const INITIAL_STATE = {
  tasks: fakeTaskList(),
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ON_PINNED_TASK:
      return INITIAL_STATE;
    case ON_ARCHIVE_TASK:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

export default createStore(reducer, INITIAL_STATE);
