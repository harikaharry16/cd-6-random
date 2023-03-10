// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState(prevState => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.onGenerate} type="button">
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
