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
   * @param {object} numberList
   */
  numbers(numbersList) {
    if (numbersList) {
      return (
        <JackpotNumbers
          numbers={numbersList.numbers}
          euroNumbers={numbersList.euroNumbers}
        />
      );
    }
    return '';
  }

  /**
   * Draw prizes if needed
   * @param {object} prizesList
   */
  prizes(prizesList) {
    if (prizesList) {
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
        {this.numbers(props.data.numbers)}
        {this.prizes(props.data.odds)}

      </article>
    );
  }
}

export default JackpotItem;
