import React from 'react';
import { shallow } from 'enzyme';
import { FilmDescription, mapStateToProps, mapDispatchToProps, test } from '../FilmDescription';
import Loader from '../../../Loader';
import CurrentFilm from '../CurrentFilm';

console.log(test);

describe('<Filmdescription />', () => {
  let wrapper;
  const initialState = {
    fetchedFilms: true,
  }

  beforeEach(() => {
    wrapper = shallow(<FilmDescription />);
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

  it('returns fetchedFilms', () => {
    console.log(mapStateToProps);
    expect(mapStateToProps(initialState).fetchedFilms).toBe(true);
  })

  it('returns action of a correct type', () => {
    const dispatch  = jest.fn();
    mapDispatchToProps(dispatch).returnToSearchbox();

    expect(dispatch.mock.calls[0][0].type).toBe('RETURN_TO_SEARCHBOX');
  })
});
