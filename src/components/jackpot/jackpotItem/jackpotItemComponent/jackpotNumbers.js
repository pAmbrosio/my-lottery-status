import React, {Component} from 'react';

class JackpotNumbers extends Component {



  constructor (props) {
    super(props);
    this.props = props;
  };


  numbersList () {
    return (
        this.props.numbers.map((number,i)=> {
          return (
            <li key={i} className="jakpot-number">{number}</li>
          );
        })
    )
  }
  euroNumbersList () {
    return (
      this.props.euroNumbers.map((number,i)=> {
        return (
          <li key={"e"+i} className="jakpot-euroNumber">{number}</li>
        );
      })
    )
  }

  render() {
    return(
      <div className="jackpot-item__numbers">
        <ul>
          {this.numbersList()}
          {this.euroNumbersList()}
        </ul>
      </div>
    )
  }
}

export default JackpotNumbers;