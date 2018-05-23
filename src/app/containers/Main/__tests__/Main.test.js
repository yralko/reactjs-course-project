import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from '../Main';
import SearchResults from '../../../components/SearchResults';

describe('<Main />', () => {
  it('renders SearchResults component', () => {
    const wrapper = shallow(<Main fetchedFilms />);
    expect(wrapper.find(SearchResults).exists()).toBe(true);
  });

  it('renders Films not found paragraph', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.text()).toBe('Films not found');
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      fetchedFilms: ['film1', 'film2'],
    };

    it('returns fetchedFilms', () => {
      expect(mapStateToProps(mockStore).fetchedFilms).toEqual(['film1', 'film2']);
    });
  });
});
