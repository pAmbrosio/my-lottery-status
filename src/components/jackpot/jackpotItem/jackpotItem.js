import React, { Component } from 'react';

import { JackpotHeader, JackpotNumbers, JackpotPrizes } from './jackpotItemComponent/index';

/**
 * Jackpot draw article
 */
class JackpotItem extends Component {
  /**
   * @param {object} props.data draw data
   * @param {boolean} props.next article type
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * Draw winning numbers if needed
   * @param {boolean} next if next, not shown
   * @param {array} numberList
   * @param {array} euroNumbersList
   */
  numbers(next, numbersList, euroNumbersList) {
    if (!next && numbersList) {
      return (
        <JackpotNumbers
          numbers={numbersList}
          euroNumbers={euroNumbersList}
        />
      );
    }
    return '';
  }

  /**
   * Draw prizes if needed
   * @param {boolean} next if next, not shown
   * @param {object} prizesList
   */
  prizes(next, prizesList) {
    if (!next && prizesList) {
      return (
        <JackpotPrizes
          odds={prizesList}
        />
      );
    }
    return '';
  }

  /** */
  render() {
    const props = this.props;
    return (
      <article className="jackpot-item">
        <JackpotHeader
          next={props.next}
          nr={props.data.nr}
          dateTime={props.data.date}
          closingDate={props.data.closingDate}
          totalWinners={props.data.Winners}
        />
        {this.numbers(props.next, props.data.numbers, props.data.euroNumbers)}
        {this.prizes(props.next, props.data.odds)}

      </article>
    );
  }
}

export default JackpotItem;
