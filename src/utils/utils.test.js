import { Utils } from './utils';

describe('Utils tests', () => {
  test('date conversion', () => {
    expect(Utils.dateFromDateTime({ day: '26', month: '07', year: '2019' })).toBe('26/07/2019');
  });

  test('time conversion', () => {
    expect(Utils.timeFromDateTime({ hour: '12', minute: '7' })).toBe('12:07');
  });

  test('prize amount conversion', () => {
    expect(Utils.formatPrizeAmount(1234567890, 'Eur')).toBe('€ 12,345,678.90');
  });
  test('prize amount conversion to fail', () => {
    expect(Utils.formatPrizeAmount(undefined, 'Eur')).toBe('N/A');
  });
});
