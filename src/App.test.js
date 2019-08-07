import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import App from './App';
import Jackpot from './components/jackpot/jackpot';

global.fetch = require('jest-fetch-mock');


describe('General test', () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  it('renders without crashing', () => {
    const wrapper = shallow(<Jackpot />);
    expect(wrapper.exists('.jackpot-title__container')).toBe(true);
  });
});
