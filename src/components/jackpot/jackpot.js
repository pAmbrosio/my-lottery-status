import React, { Component } from 'react';
import './jackpot.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JackpotItem from './jackpotItem/jackpotItem';
import { DefaultGame, Utils } from '../../utils/utils';

/**
 * Jackpot page
 */
class Jackpot extends Component {
  /** */
  constructor () {
    super();
    this.state = {
      last: DefaultGame,
      next: DefaultGame
    };
    this.collapseSpacer = this.collapseSpacer.bind(this);
  }

  /** */
  componentDidMount() {
    this.updateJackpotData();
    document.addEventListener('scroll', this.handleScroll);
  }

  /** */
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  /**
   * Load data from server and update component state
   * if can't retrive data (CORS) will loop and take data from local mock to demo purpose
   * @param {boolean} loop demo purpose, default true
   */
  updateJackpotData (loop = true) {
    Utils.activeLoading();
    let url = 'https://media.lottoland.com/api/drawings/euroJackpot';
    if (!loop) {
      url = 'http://localhost:8080/public/data/eurojackpot-status.json';
      console.warn('loading mock data');
    }
    fetch(url)
      .then((response) => {
        if (response && response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((result) => {
        this.setState(result);
        Utils.disableLoading();
      })
      .catch((e) => {
        console.error(`Error: ${e}`);
        Utils.disableLoading();
        if (e.message === 'Failed to fetch' && loop) {
          this.updateJackpotData(false);
        }
      });
  }

  /**
   * Scroll effect trigger
   */
  handleScroll() {
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

  /**
   * Collapse effect between boxes
   */
  collapseSpacer() {
    const el = document.querySelector('div.spacer');
    if (el) {
      el.classList.add('spacer__hover');
    }
  }

  /** */
  render() {
    const state = this.state;
    return (
      <div id="jackpot">
        <div className="jackpot-title__container">
          <a href="#jackpot" title="Euro Jackpot"><h1 className="jackpot-title__header">Euro Jackpot</h1></a>
        </div>
        <JackpotItem data={state.last} />
        <div className="spacer" onMouseEnter={this.collapseSpacer}>
          <FontAwesomeIcon icon="angle-double-down" size="10x" />
        </div>
        <JackpotItem data={state.next} next />
      </div>
    );
  }
}

export default Jackpot;
