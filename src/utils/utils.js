export const NoData = '<span class="loading-dots">...</span>';

export const DefaultGame = {
  nr: NoData,
  currency: NoData,
  date: {
    minute: NoData,
    hour: NoData,
    day: NoData,
    month: NoData,
    year: NoData
  },
  numbers: [NoData],
  euroNumbers: [NoData],
  Winners: NoData,
  odds: {
    rank1: {
      winners: NoData,
      prize: NoData
    }
  }
};

export const Strings = {
  EUR: 'Eur'
};

export const Currency = {
  Eur: '€'
};

export const Utils = {
  /**
 * time formatter
 * @param {*} dateTime
 * @return {string} 31/12/1986
 */
  dateFromDateTime(dateTime) {
    if (typeof dateTime !== 'undefined' && dateTime !== NoData) {
      return `${dateTime.day}/${dateTime.month}/${dateTime.year}`;
    }
    return 'N/A';
  },

  /**
   * time formatter
   * @param {*} dateTime
   * @return {string} 00:00
   */
  timeFromDateTime(dateTime) {
    if (typeof dateTime !== 'undefined' && dateTime !== NoData) {
      const minutes = dateTime.minute >= 10 ? dateTime.minute : `0${dateTime.minute}`;
      return `${dateTime.hour}:${minutes}`;
    }
    return 'N/A';
  },

  /**
   * format date in string format from original day object
   * @param {object} dateTime
   * @return {string} return time to next draw
   */
  timeToNext (closingDate) {
    if (typeof closingDate !== 'undefined' && closingDate !== NoData) {
      const date = closingDate.split(',')[0].split('.');
      const time = closingDate.split(',')[1].trim().split(':');
      const dateFormated = new Date(date[2], date[1], date[0], time[0], time[1], 0);
      const now = new Date().getTime();
      const distance = dateFormated - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      return `${days} Days | ${hours} Hours | ${minutes} Minutes`;
    }
    return 'N/A';
  },

  /**
   *
   * @param {Number} amount
   * @param {String} currency
   */
  formatPrizeAmount(amount, currency) {
    if (typeof amount !== 'undefined' && !Number.isNaN(amount)) {
      if (Strings.EUR === currency) {
        amount = String(amount);
        let value = `${amount.slice(-5, -2)}.${amount.slice(-2)}`;
        amount = amount.slice(0, -5);
        while (amount.length > 0) {
          if (amount.length > 3) {
            value = `${amount.slice(-3)},${value}`;
          } else {
            value = `${amount},${value}`;
            break;
          }
          amount = amount.slice(0, -3);
        }
        return `€ ${value}`;
      }
      return `${currency} ${amount}`;
    }
    return 'N/A';
  }
};
