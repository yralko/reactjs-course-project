import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from './Header';
import SearchResultsBar from './SearchResultsBar';
import Searchbox from './Searchbox';
import FilmDescription from './FilmDescription';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  })

  it('renders SearchResultsBar if search was fired at least once and no film is selected', () => {
    wrapper = shallow(<Header filmSelected={false} initialPage={false} />);
    expect(wrapper.find(SearchResultsBar).exists()).toBe(true);
  });

  it('renders Searchbox if no film is selected', () => {
    wrapper.setProps({ filmSelected: false });
    expect(wrapper.find(Searchbox).exists()).toBe(true);
  });

  it('renders FilmDescription if a film is selected', () => {
    wrapper.setProps({ filmSelected: true });
    expect(wrapper.find(FilmDescription).exists()).toBe(true);
  });

  describe('mapStateToProps', () =>  {
    const mockInitialState = {
      filmSelected: true,
      initialPage: false,
    };

    it('returns filmSelected', () => {
      expect(mapStateToProps(mockInitialState).filmSelected).toBe(true);
    });

    it('returns initialPage', () => {
      expect(mapStateToProps(mockInitialState).initialPage).toBe(false);
    });
  });
});
