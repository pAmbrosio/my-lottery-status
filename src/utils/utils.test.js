import Utils from './utils';

describe('Utils tests', () => {
  test('date conversion', () => {
    expect(Utils.originalDatetimeToDate('26.07.2019, 20:15')).toBe('26/07/2019');
  });

  test('prize amount conversion', () => {
    expect(Utils.formatPrizeAmount(1234567890, 'Eur')).toBe('€ 12,345,678.90');
  });
  test('prize amount conversion to fail', () => {
    expect(Utils.formatPrizeAmount(undefined, 'Eur')).toBe('N/A');
  });
});
