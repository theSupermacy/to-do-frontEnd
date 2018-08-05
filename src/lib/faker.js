import _ from 'lodash';
import faker from 'faker';
export const fakeTaskListData = () => {
  return _.times(10, {
    title: faker.lorem.sentence,
    id: faker.random.number,
    date_created: faker.date.past,
    state: 'TASK_INBOX',
  });
};
