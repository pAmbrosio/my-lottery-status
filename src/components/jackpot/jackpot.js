import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JackpotItem from './jackpotItem/jackpotItem';

const noData = <span className="loading-dots">...</span>;
const defaultGame = {
  nr: noData,
  date: {
    day: noData,
    month: noData,
    year: noData
  },
  numbers: [noData],
  euroNumbers: [noData],
  Winners: noData,
  odds: {
    rank1: {
      winners: noData,
      prize: noData
    }
  }
};


class Jackpot extends Component {

  constructor () {
    super();
    this.state = {
      last: defaultGame,
      next: {
        nr: noData,
        date: {
          day: noData,
          month: noData,
          year: noData
        }
      }
    };
    this.collapseSpacer = this.collapseSpacer.bind(this);
    console.log(`1Cmon: ${this.state.last}`);
  }

  componentDidMount() {
    console.log(`2Cmon: ${this.state}`);
    this.updateJackpotData();
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  updateJackpotData () {
    fetch('http://localhost:8080/public/data/eurojackpot-status.json')
      .then((response) => {
        if (response && response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((result) => {
        this.setState(result);
        console.log(result);
      })
      .catch((e) => {
        console.error(`Error: ${e}`);
        return false;
      });
  }

  handleScroll(evt) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      document.querySelector('div.spacer').classList.add('spacer__hover');
    }
  }

  collapseSpacer() {
    debugger;
    const el = document.querySelector('div.spacer');
    if (el) {
      el.classList.add('spacer__hover');
    }
  }

  render() {
    return (
      <div id="jackpot">
        <div className="jackpot-title__container">
          <a href="#" title="Euro Jackpot"><h1 className="jackpot-title__header">Euro Jackpot</h1></a>
        </div>
        <JackpotItem data={this.state.last} />
        <div className="spacer" onMouseEnter={this.collapseSpacer}><FontAwesomeIcon icon="angle-double-down" size="10x" /></div>
        <JackpotItem data={this.state.next} />
      </div>
    );
  }
}

export default Jackpot;
