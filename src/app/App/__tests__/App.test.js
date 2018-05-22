import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from '../App';
import Header from '../../components/Header';
import Main from '../../containers/Main';
import Footer from '../../components/Footer';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders 3 components', () => {
    expect(wrapper.children()).toHaveLength(3);
  });

  it('has a header', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('has a main section', () => {
    expect(wrapper.find(Main).exists()).toBe(true);
  });

  it('has a footer', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('stores films fetched from the server', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).storeFetchedFilms();
    expect(dispatch.mock.calls[0][0].type).toBe('STORE_FETCHED_FILMS');
  });
});
