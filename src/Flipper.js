import React, { Component } from 'react'
import Coin from './Coin';

class Flipper extends Component {
  constructor(props){
    super(props);
    this.state = { side: '', counts: {flips: 0, heads: 0, tails: 0}};
    this.handleClick = this.handleClick.bind(this);
  }
  


  flip(){
    let [heads, tails] = ["https://upload.wikimedia.org/wikipedia/commons/2/28/98_quarter_obverse.png", "https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png" ];
    let sides = [heads, tails];
    let chosen = sides[Math.floor(Math.random() * 2)]
    chosen == heads ? 
    this.setState(curState => ({
      side: chosen,
      counts: { flips: curState.counts.flips + 1, heads: curState.counts.heads + 1, tails: curState.counts.tails},
    }))
    :
    this.setState(curState => ({
      side: chosen,
      counts: { flips: curState.counts.flips + 1, heads: curState.counts.heads, tails: curState.counts.tails + 1 },
    }))
    
  }
  
  handleClick(){
    this.flip();
  }

  render(){
    return (

      <div className="Flipper">
        <h1> Let's flip a coin!</h1>
        <Coin side={this.state.side}/>
        <button onClick={this.handleClick}>Flip!!!</button>
        <p>Out of {this.state.counts.flips} flips, there have been {this.state.counts.heads} heads and {this.state.counts.tails} tails.</p>
      </div>
    )
  };
}

export default Flipper;