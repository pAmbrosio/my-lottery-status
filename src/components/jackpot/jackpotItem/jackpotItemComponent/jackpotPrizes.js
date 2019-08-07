import React, { Component } from 'react';
import { Utils } from '../../../../utils/utils';

/**
 * Jackpot prizes list display
 */
class JackpotPrizes extends Component {
  /**
   * @param {array} props.odds prize list
   */
  constructor (props) {
    super(props);
    this.props = props;
  }

  /**
   * Create every prize list display
   */
  prizeList(oddsData) {
    const odds = [];
    for (const key in oddsData) {
      if (Object.prototype.hasOwnProperty.call(oddsData, key)) {
        odds.push({ ...oddsData[key], id: key.slice(4), name: key });
      }
    }
    odds.sort((a, b) => { return Number(a.id) - Number(b.id); });
    return (
      odds.map((prize) => {
        if (prize.id !== '0') {
          return (
            <li key={prize.id}>
              <span className="jackpot-prizes__pos">{prize.id}</span>
              <span className="jackpot-prizes__pos-definition">{prize.name}</span>
              <span className="jackpot-prizes__winners">{prize.winners}</span>
              <span className="jackpot-prizes__amount">{Utils.formatPrizeAmount(prize.prize, 'Eur')}</span>
            </li>
          );
        }
        return '';
      })

    );
  }

  /** */
  render() {
    const data = this.props;
    return (
      <div className="jackpot-item__prizes">
        <ul>
          <li className="jackpot-prizes__header">
            <span className="jackpot-prizes__pos">Tier</span>
            <span className="jackpot-prizes__pos-definition">Match</span>
            <span className="jackpot-prizes__winners">Winners</span>
            <span className="jackpot-prizes__amount">Amount</span>
          </li>
          {this.prizeList(data.odds)}
        </ul>
      </div>
    );
  }
}

export default JackpotPrizes;
