import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onPinTask, onArchiveTask } from './../lib/actions';

export function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onArchiveTask,
    onPinTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const priorityTasks = [
    ...tasks.filter(singleTask => singleTask.state === 'TASK_PINNED'),
    ...tasks.filter(singleTask => singleTask.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {priorityTasks.map(singleTask => (
        <Task
          {...events}
          key={singleTask.id}
          task={singleTask}
          key={singleTask.id}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { loading, tasks } = state;
  return {
    loading,
    tasks,
  };
};
const dispatchActionToProps = dispatch => {};
export default connect(
  mapStateToProps,
  dispatchActionToProps
)(TaskList);
