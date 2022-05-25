import React, { Component } from 'react'

class Coin extends Component {

  render() {
    let [heads, tails] = ["https://upload.wikimedia.org/wikipedia/commons/2/28/98_quarter_obverse.png", "https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png" ];

    return (
      <div className="Coin">
        <img src={this.props.side}></img>
        </div>
    )
  }
}

export default Coin;