import React, {Component} from 'react';

import {JackpotHeader, JackpotNumbers, JackpotPrizes} from "./jackpotItemComponent/index"

class JackpotItem extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  numbers() {
    if(this.props.data.numbers){
      return(
        
          <JackpotNumbers 
          numbers={this.props.data.numbers}
          euroNumbers={this.props.data.euroNumbers}/>
      )
    } else {
      return;
    }
  }
  prizes() {
    if(this.props.data.odds){
      return(
        <JackpotPrizes 
        odds={this.props.data.odds}/>
      )
    } else {
      return;
    }
  }
  


  render() {
    return(
      <article className="jackpot-item">
        <JackpotHeader 
          nr={this.props.data.nr}
          drawingDate={this.props.data.drawingDate} 
          totalWinners={this.props.data.Winners} />
        {this.numbers()}
        {this.prizes()}
        
      </article>
    )
  }
}

export default JackpotItem;