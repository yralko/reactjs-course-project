import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../Pagination';

const mockState = {
  fetchedFilms: {
    offset: 0,
    total: 100,
    limit: 10,
  },
};

describe('<Pagination />', () => {
  test('abc', () => {
    const wrapper = shallow(<Pagination {...mockState} />);
    expect(wrapper.find('li')).toBe(null);
  });
});
