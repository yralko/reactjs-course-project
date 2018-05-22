import React from 'react';
import { shallow } from 'enzyme';
import { FilmDescription } from '../FilmDescription';
import CurrentFilm from '../CurrentFilm';
import Loader from '../../../Loader';

describe('<Filmdescription />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilmDescription fetchedFilms={[]}/>);
  });

  it('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders a loader until fetch request resolves', () => {
    wrapper.setProps({ fetchedFilms: false })
    expect(wrapper.find(Loader).exists()).toBe(true);
  });

  it('renders a selected film data', () => {
    wrapper.setProps({ fetchedFilms: true })
    expect(wrapper.find(CurrentFilm).exists()).toBe(true);
  });
});
