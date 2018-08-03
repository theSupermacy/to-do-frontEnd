import React from 'react';
import { storiesOf } from '@storybook/react';
import Task from './Task';
import { action } from '@storybook/addon-actions';

const task = {
  id: 1,
  title: 'Testing task',
  date_created: new Date(),
  state: 'TASK_INBOX',
};
const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ));

export { task, actions };
