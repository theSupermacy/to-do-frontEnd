import React from 'react';
import { storiesOf, action } from '@storybook/react';
import TaskList from './TaskList';
import { task, actions } from './Task.stories';

const tasks = [
  { ...task, id: 1, title: 'testing' },
  { ...task, id: 2, title: 'testing2' },
  { ...task, id: 3, title: 'testing3' },
  { ...task, id: 4, title: 'testing4' },
  { ...task, id: 5, title: 'testing5' },
];
export const withPinnedTasks = [
  ...tasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];
storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('loading Task', () => <TaskList tasks={tasks} loading {...actions} />)
  .add('emptyTaskList', () => <TaskList tasks={[]} />)
  .add('default', () => <TaskList tasks={tasks} {...actions} />)
  .add('withPinnedTask', () => (
    <TaskList tasks={withPinnedTasks} {...action} />
  ));
