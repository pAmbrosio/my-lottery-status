import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Utils } from '../../../../utils/utils';

/**
 * Article dimanic header (last/next)
 */
class JackpotHeader extends Component {
  /**
   * @param {number} props.totalWinners total number of winners
   * @param {number} props.dateTime date and time of the draw
   * @param {number} props.nr Round Number
   * @param {string} props.closingDate closing date and time string
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * Specific header to last draw result
   * @param {object} dateTime date time data
   * @param {number} totalWinners total winners
   * @param {number} nr Round Number
   */
  lastHeader(dateTime, totalWinners, nr) {
    const dateFormated = Utils.dateFromDateTime(dateTime);
    const timeFormated = Utils.timeFromDateTime(dateTime);
    return (
      <div className="jackpot-item__header">
        <div className="jackpot-header__title">
          EuroJackpot Results for {dateFormated} at {timeFormated}
        </div>
        <div className="jackpot-header__index">
          <FontAwesomeIcon icon="star" size="3x" color="red" /><p>{nr}</p>
        </div>
        <div className="jackpot-header__congrats">Congratulation to all {totalWinners} Winners!</div>
      </div>
    );
  }

  /**
   * Specific header to last draw result
   * @param {object} dateTime date time data
   * @param {number} totalWinners total winners
   * @param {number} nr Round Number
   */
  nextHeader(dateTime, closingDate, nr) {
    const dateFormated = Utils.dateFromDateTime(dateTime);
    const timeFormated = Utils.timeFromDateTime(dateTime);
    return (
      <div className="jackpot-item__header">
        <div className="jackpot-header__title">
          EuroJackpot Will be {dateFormated} at {timeFormated}
        </div>
        <div className="jackpot-header__index">
          <FontAwesomeIcon icon="star" size="3x" color="red" /><p>{nr}</p>
        </div>
        <div className="jackpot-header__congrats">Time to buy your tickets! {Utils.timeToNext(closingDate)} Left</div>
      </div>
    );
  }

  /** */
  render() {
    const data = this.props;
    if (data.next) {
      return this.nextHeader(data.dateTime, data.closingDate, data.nr);
    }
    return this.lastHeader(data.dateTime, data.totalWinners, data.nr);
  }
}

export default JackpotHeader;
