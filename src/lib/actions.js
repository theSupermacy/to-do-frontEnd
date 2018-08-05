import { ON_PINNED_TASK, ON_ARCHIVE_TASK } from './Constants';

export const onPinTask = function(id) {
  return {
    type: ON_PINNED_TASK,
    payload: { id },
  };
};

export const onArchiveTask = function(id) {
  return { type: ON_ARCHIVE_TASK, payload: { id } };
};
