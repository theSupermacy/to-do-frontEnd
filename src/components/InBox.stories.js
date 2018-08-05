import React from 'react';
import { storiesOf } from '@storybook/react';
import { InBox } from './InBox';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { tasks } from './TaskList.stories';
const store = {
  getState: () => {
    return {
      tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};
storiesOf('InBox', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('error', () => <InBox error />)
  .add('default', () => <InBox />);
