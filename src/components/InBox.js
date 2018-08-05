import React from 'react';
import TaskList from './TaskList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function InBox({ error }) {
  console.log(error);
  if (error)
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

InBox.defaultProps = {
  error: false,
};
const mapStateToProps = state => {
  const { error } = state;
  return {
    error,
  };
};

export default connect(mapStateToProps)(InBox);
