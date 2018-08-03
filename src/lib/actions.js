import { onPinTask, onArchiveTask } from './../lib/actions';
import { ON_PINNED_TASK } from './Constants';

export const onPinTask = function(id) {
  return {
    type: ON_PINNED_TASK,
    payload: id,
  };
};
