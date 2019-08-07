import React, { Component } from 'react';

/**
 * Jacpot article winning numbers display
 */
class JackpotNumbers extends Component {
  /**
   * @param {array} props.numbers winning numbers list
   * @param {array} props.euroNumbers winning numbers list
   */
  constructor (props) {
    super(props);
    this.props = props;
  }


  /**
   * Display numbers list
   * @param {number} numbers winning number list
   */
  numbersList (numbers) {
    if (numbers) {
      return (
        numbers.map((number, i) => {
          return (
            <li key={i} className="jakpot-number">{number}</li>
          );
        })
      );
    }
    return '';
  }

  /**
   * Display numbers list
   * @param {number} euroNumbers winning number list
   */
  euroNumbersList (euroNumbers) {
    if (euroNumbers) {
      return (
        euroNumbers.map((number, i) => {
          return (
            <li key={`e${i}`} className="jakpot-euroNumber">{number}</li>
          );
        })
      );
    }
    return '';
  }

  /** */
  render() {
    const props = this.props;
    return (
      <div className="jackpot-item__numbers">
        <ul>
          {this.numbersList(props.numbers)}
        </ul>
        <ul>
          {this.euroNumbersList(props.euroNumbers)}
        </ul>
      </div>
    );
  }
}

export default JackpotNumbers;
