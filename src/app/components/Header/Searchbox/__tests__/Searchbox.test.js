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
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Searchbox fetchedFilms={mockState.fetchedFilms} />)
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

  describe('<Searchbox /> methods', () => {
    let instance;

    beforeEach(() => {
      instance = wrapper.instance();
    });

    it('updates State inputValue', () => {
      instance.getInputValue({ target: { value: 'test' } });
      expect(instance.state.inputValue).toBe('test');
    });

    it('triggers searchFilms function', () => {
      const mockFn = jest.fn();
      wrapper.setProps({
        searchFilms: mockFn,
      });

      instance.searchFilms('genre');
      expect(mockFn).toHaveBeenCalled();
    });

    it('triggers searchFilms method on Enter button release', () => {
      instance.searchFilms = jest.fn();
      const mockFn = instance.searchFilms;
      instance.keyReleased({ keyCode: 13 });
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps and mapDispatchToProps', () => {
    it('returns fetchedFilms', () => {
      expect(mapStateToProps(mockState).fetchedFilms)
        .toEqual([
          { title: 'film1', genre: 'action' },
          { title: 'film2', genre: 'thriller' },
          { title: 'film3', genre: 'action' },
        ]);
    });

    it('returns an action of an appropriate type', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).searchFilms();
      expect(dispatch.mock.calls[0][0].type).toBe('SEARCH_FILMS');
    });
  });
});
