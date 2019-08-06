import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Utils from "../../../../utils/utils";

class JackpotHeader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props)
  }


  headerStatusString() {
    debugger;
    if (this.props && this.props.totalWinners && !isNaN(this.props.totalWinners)) {
      return "Congratulation to all "+this.props.totalWinners+" Winners!"
    } else {
      return "Go and buy some tickets!"
    }
  }


  render() {
    return(
      <div className="jackpot-item__header">
        <div className="jackpot-header__title">EuroJackpot Results for {Utils.originalDatetimeToDate(this.props.drawingDate)}</div>
        <div className="jackpot-header__index"><FontAwesomeIcon icon="star" size="3x" color="red" /><p>{this.props.nr}</p></div>
        <div className="jackpot-header__congrats">{this.headerStatusString()}</div>
      </div>
    )
  }
}

export default JackpotHeader;