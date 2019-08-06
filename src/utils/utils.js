const Utils = {
  Strings: {
    EUR: 'Eur'
  },

  Currency: {
    Eur: '€'
  },

  /**
   *
   * @param {*} dateTime
   */
  originalDatetimeToDate (dateTime) {
    if (typeof dateTime !== 'undefined') {
      const date = dateTime.split(',');
      return date[0].replace(/\./g, '/');
    }
    return 'N/A';
  },

  /**
   *
   * @param {*} amount
   * @param {*} currency
   */
  formatPrizeAmount(amount, currency) {
    if (typeof amount !== 'undefined' && !Number.isNaN(amount)) {
      if (this.Strings.EUR === currency) {
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

export default Utils;
