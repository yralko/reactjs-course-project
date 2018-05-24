import React from 'react';
import { shallow } from 'enzyme';
import { Searchbox, mapStateToProps, mapDispatchToProps } from '../Searchbox';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import * as actions from '../../../../store/actions';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('<Searchbox />', () => {
  let wrapper;
  const mockProps = {
    query: {
      searchBy: 'title',
    },
  };

  beforeEach(() => {
    wrapper = shallow(<Searchbox {...mockProps} />);
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
    it('dispatches an action on input change', (done) => {
      const store = mockStore({})
      wrapper.setProps({
        updateQueryParameter: () => store.dispatch(actions.updateQueryParameter()),
      });

      const instance = wrapper.instance();
      instance.getInputValue({ target: { value: 34 } });
      setTimeout(() => {
        expect(store.getActions()[0].type).toBe('UPDATE_QUERY_PARAMETER');
        done();
      }, 200);
    });

    it('dispatches requestFilms on Enter key release', () => {
      const mockFn = jest.fn();
      wrapper.setProps({
        requestFilms: () => mockFn(),
      });

      const instance = wrapper.instance();
      instance.keyReleased({ keyCode: 13 });

      expect(mockFn.mock.calls).toHaveLength(1);
    });

    it('triggers event.persist when onChange is invoked', () => {
      const instance = wrapper.instance();
      const mockFn = jest.fn();
      instance.onChange({ persist: () => mockFn() });

      expect(mockFn.mock.calls).toHaveLength(1);
    });

    describe('mapStateToProps', () => {
      it('returns query object', () => {
        expect(mapStateToProps(mockProps).query).toEqual({ searchBy: 'title' });
      });
    });

    describe('mapDispatchToProps', () => {
      it('returns action of \'RECEIVE_FILMS\' type asynchronously', async () => {
        const store = mockStore({});

        axios.get = () => Promise.resolve({ data: [1, 2, 3] });

        await store.dispatch(actions.requestFilms());
        expect(store.getActions().some(v => v.type === 'RECEIVE_FILMS')).toBe(true);
      });

      it('returns action of a proper type', () => {
        const mockFn = jest.fn();
        mapDispatchToProps(mockFn).updateQueryParameter();
        expect(mockFn.mock.calls[0][0].type).toEqual('UPDATE_QUERY_PARAMETER');
      });
    });
  });
});
