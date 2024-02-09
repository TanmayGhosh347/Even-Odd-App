import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="p">Count is {count % 2 === 0 ? 'Even' : 'Odd'} </p>
          <button type="button" className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
