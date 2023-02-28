import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">SPEEDOMETER</h1>
        <img
          className="picture"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="head">Speed is {count}mph</h1>
        <p className="para">min limit is 0mph, max limit is 200mph</p>
        <div>
          <button
            className="buttonOne"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="buttonTwo"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
