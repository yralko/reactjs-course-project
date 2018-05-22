import React from 'react';
import { shallow } from 'enzyme';
import { Searchbox, mapStateToProps, mapDispatchToProps } from '../Searchbox';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

describe('<Searchbox />', () => {
  const mockState = {
    filter: 'title',
    inputValue: '',
    fetchedFilms: [{ title: 'film1', genre: 'action' }, { title: 'film2', genre: 'thriller' }, { title: 'film3', genre: 'action' }],
    query: {
      searchBy: 'title',
    },
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Searchbox fetchedFilms={mockState.fetchedFilms} query={mockState.query} />)
  });

  it('renders Button component', () =>  {
    expect(wrapper.find(Button).exists()).toBe(true);
  });

  it('renders 3 buttons at page', () =>  {
    expect(wrapper.find(Button)).toHaveLength(3);
  });

  it('Renders Input component', () =>  {
    expect(wrapper.find(Input).exists()).toBe(true);
  });
});
