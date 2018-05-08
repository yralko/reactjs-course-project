import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

const ProblemChild = () => {
  throw new Error('I crashed!');
  return <p>Error</p>;
};

describe('<ErrorBoundary />', () => {
  it('should catch errors with componentDidCatch', () => {
    const spy = sinon.spy(ErrorBoundary.prototype, 'componentDidCatch');
    const wrapper = mount(<ErrorBoundary><ProblemChild /></ErrorBoundary>);
    expect(ErrorBoundary.prototype.componentDidCatch.calledOnce).toEqual(true);
  });
});
