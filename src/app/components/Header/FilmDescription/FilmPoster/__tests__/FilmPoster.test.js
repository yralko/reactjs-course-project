import React from 'react';
import { shallow } from 'enzyme';
import FilmPoster from '../FilmPoster';

describe('<FilmPoster />', () => {
  it('', () => {
    const mockProps = {
      src: 'http://example.com/img1',
      alt: 'film_title',
    };

    const wrapper = shallow(<FilmPoster {...mockProps} />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
