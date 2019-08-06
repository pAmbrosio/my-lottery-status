import React, {Component} from 'react';
import Utils from "../../../../utils/utils";

class JackpotPrizes extends Component {


  prizeList() {
    let odds = [];
    for (let key in this.props.odds) {
      odds.push({...this.props.odds[key], id: key.slice(4), name:key})
    }
    odds.sort((a, b)=> { return Number(a.id)-Number(b.id)});
    console.log(odds);
    return (
      odds.map((prize)=>{
        if (prize.id != 0) {
          return (
          <li key={prize.id}>
            <span className="jackpot-prizes__pos">{prize.id}</span>
            <span className="jackpot-prizes__pos-definition">{prize.name}</span>
            <span className="jackpot-prizes__winners">{prize.winners}</span>
            <span className="jackpot-prizes__amount">{Utils.formatPrizeAmount(prize.prize, "Eur")}</span>
          </li>
          );
        } else {
          return;
        }
      })
      
    );
  }


  render() {
    return(
      <div className="jackpot-item__prizes">
        <ul>
          <li className="jackpot-prizes__header">
          <span className="jackpot-prizes__pos">Tier</span>
          <span className="jackpot-prizes__pos-definition">Match</span>
          <span className="jackpot-prizes__winners">Winners</span>
          <span className="jackpot-prizes__amount">Amount</span>
          </li>
          {this.prizeList()}
        </ul>
      </div>
    )
  }
}

export default JackpotPrizes;