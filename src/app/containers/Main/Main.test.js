import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';
import SearchResults from '../../components/SearchResults';

describe('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('shows that no films have been found', () => {
    expect(wrapper.find('h1').text()).toMatch(/Films not found/);
  });

  it('shows SearchResults', () => {
    wrapper.setProps({ fetchedFilms: true });
    expect(wrapper.find(SearchResults).exists()).toBe(true);
  });

  it('returns appropriate prop', () => {
    const mockStore = {
      fetchedFilms: ['film1', 'film2', 'film3'],
    };
    expect(mapStateToProps(mockStore).fetchedFilms).toEqual(['film1', 'film2', 'film3']);
  });
});
