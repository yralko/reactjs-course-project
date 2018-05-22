import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from '../SearchResult';
import Brief from '../Brief';
import Poster from '../Poster';

describe('<SearchResult />', () => {
  const mockState = {
    genres: ['drama', 'action', 'thriller'],
    release_date: '2018-10-04',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchResult {...mockState} />);
  });

  it('renders a Poster component', () =>  {
    expect(wrapper.find(Poster).exists()).toBe(true);
  });

  it('renders a Brief component', () =>  {
    expect(wrapper.find(Brief).exists()).toBe(true);
  });

  it('triggers clicked function if div is clicked', () =>  {
    const mockFn = jest.fn();
    wrapper.setProps({
      clicked: mockFn,
    });
    wrapper.find('div').simulate('click');
    wrapper.find('div').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
