import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Header';
import SearchResultsBar from '../SearchResultsBar';
import Searchbox from '../Searchbox';
import FilmDescription from '../FilmDescription';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders Searchbox if no film is selected', () => {
    wrapper.setProps({ filmSelected: false });
    expect(wrapper.find(Searchbox).exists()).toBe(true);
  });
});
