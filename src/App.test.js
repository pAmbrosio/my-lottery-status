import React from 'react';
import { mount } from 'enzyme';
import App from './App';

global.fetch = require('jest-fetch-mock');

const mockEurojackpot = {
  last: {
    nr: 384,
    currency: 'EUR',
    date: {
      full: 'Die Lottozahlen vom Freitag, den 26.07.2019',
      day: 26,
      month: 7,
      year: 2019,
      hour: 21,
      minute: 0,
      dayOfWeek:
        'Freitag'
    },
    closingDate: '26.07.2019, 19:00',
    lateClosingDate: '26.07.2019, 20:15',
    drawingDate: '26.07.2019, 21:00',
    numbers: [3, 8, 30, 46, 48],
    euroNumbers: [1, 3],
    jackpot: '37',
    marketingJackpot: '37',
    specialMarketingJackpot: '90',
    climbedSince: 4,
    Winners: 762628,
    odds: {
      rank0: {
        winners: 0,
        specialPrize: 0,
        prize: 0
      },
      rank1: {
        winners: 0,
        specialPrize: 0,
        prize: 3700000000
      },
      rank2: {
        winners: 6,
        specialPrize: 0,
        prize: 30710920
      },
      rank3: {
        winners: 2,
        specialPrize: 0,
        prize: 30710920
      },
      rank8: {
        winners: 27540,
        specialPrize: 0,
        prize: 2400
      },
      rank9: {
        winners: 32131,
        specialPrize: 0,
        prize: 1990
      },
      rank10: {
        winners: 53940,
        specialPrize: 0,
        prize: 1700
      },
      rank4: {
        winners: 34,
        specialPrize: 0,
        prize: 628350
      },
      rank5: {
        winners: 649,
        specialPrize: 0,
        prize: 29620
      },
      rank6: {
        winners: 1114,
        specialPrize: 0,
        prize: 13420
      },
      rank11: {
        winners: 150838,
        specialPrize: 0,
        prize: 1100
      },
      rank7: {
        winners: 1769,
        specialPrize: 0,
        prize: 7240
      },
      rank12: {
        winners: 494605,
        specialPrize: 0,
        prize: 820
      }
    }
  },
  next: {
    nr: 385,
    currency: 'EUR',
    date: {
      full: 'Die Lottozahlen vom Freitag, den 02.08.2019',
      day: 2,
      month: 8,
      year: 2019,
      hour: 21,
      minute: 0,
      dayOfWeek: 'Freitag'
    },
    closingDate: '02.08.2019, 19:00',
    lateClosingDate: '02.08.2019, 20:15',
    drawingDate: '02.08.2019, 21:00',
    jackpot: '48',
    marketingJackpot: '48',
    specialMarketingJackpot: '48',
    climbedSince: 5
  }
};

describe('Main test', () => {
  const mockJsonPromise = Promise.resolve(mockEurojackpot);
  const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists('.jackpot-title__container')).toBe(true);
  });
});
