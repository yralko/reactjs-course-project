import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SearchResultsBar, mapStateToProps, mapDispatchToProps } from '../SearchResultsBar';
import * as actions from '../../../../store/actions';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


describe('<SearchResultsBar />', () => {
  it('renders two buttons', () => {
    const wrapper = shallow(<SearchResultsBar fetchedFilms />);
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('notifies that 1 film was found', () => {
    const wrapper = shallow(<SearchResultsBar fetchedFilms={{ total: 1 }} />);
    expect(wrapper.find('[data-id="total-found"]').text()).toBe('1 film found');
  });

  it('notifies that 2 films were found', () => {
    const wrapper = shallow(<SearchResultsBar fetchedFilms={{ total: 2 }} />);
    expect(wrapper.find('[data-id="total-found"]').text()).toBe('2 films found');
  });

  describe('mapStateToProps', () => {
    it('returns sortBy and fetchedFilms', () => {
      const mockState = {
        query: {
          sortBy: 'title',
        },
        fetchedFilms: ['film1', 'film2', 'film3'],
      };

      expect(mapStateToProps(mockState).sortBy).toBe('title');
      expect(mapStateToProps(mockState).fetchedFilms).toEqual(['film1', 'film2', 'film3']);
    });
  });

  describe('mapDispatchToProps', () => {
    it('', () => {
      const store = mockStore({});
      store.dispatch(actions.requestFilms({ param: 'param1', value: 'value1' }));
      expect(store.getActions().map(v => v.type)).toEqual(['UPDATE_QUERY_PARAMETER', 'UPDATE_QUERY_PARAMETER', 'CHANGE_PAGINATION_INDEX']);
    });
  });
});
