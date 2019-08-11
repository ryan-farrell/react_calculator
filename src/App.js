import React from "react";
import './App.css';


class App extends React.Component {
  state = {
    num: 0,
    num2: 0,
    operator: ""
  };

  /* Operator functions */

  equalsHandler() {
    let num2 = this.state.num2
    let num = this.state.num
    let operator = this.state.operator

    if (operator === "+") {
      let answer = (num2 + num)
      this.setState({ num: answer })
    } else if (operator === "-") {
      let answer = (num2 - num)
      this.setState({ num: answer })
    } else if (operator === "*") {
      let answer = (num2 * num)
      this.setState({ num: answer })
    } else if (operator === "/") {
      let answer = (num2 / num)
      this.setState({ num: answer })
    } else {
      alert("Unknown error!")
    }
  }

  additionHandler(userInput) {
    this.setState({ num2: userInput })
    this.setState({ operator: "+" })
    this.setState({ num: 0 })
    /* {} inside of the this.setState
    call the state object to update it with counter*/
  }

  subtractionHandler(userInput) {
    this.setState({ num2: userInput })
    this.setState({ operator: "-" })
    this.setState({ num: 0 })
  }

  divideHandler(userInput) {
    this.setState({ num2: userInput })
    this.setState({ operator: "/" })
    this.setState({ num: 0 })

  }

  multiplyHandler(userInput) {
    this.setState({ num2: userInput })
    this.setState({ operator: "*" })
    this.setState({ num: 0 })
  }

  oneHandler(userInput) {
    userInput = 1
    if (this.state.num === 0) {
      this.setState({ num: 1 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }

  twoHandler(userInput) {
    userInput = 2
    if (this.state.num === 0) {
      this.setState({ num: 2 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }

  threeHandler(userInput) {
    userInput = 3
    if (this.state.num === 0) {
      this.setState({ num: 3 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }

  fourHandler(userInput) {
    userInput = 4
    if (this.state.num === 0) {
      this.setState({ num: 4 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }

  fiveHandler(userInput) {
    userInput = 5
    if (this.state.num === 0) {
      this.setState({ num: 5 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }
  sixHandler(userInput) {
    userInput = 6
    if (this.state.num === 0) {
      this.setState({ num: 6 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }
  sevenHandler(userInput) {
    userInput = 7
    if (this.state.num === 0) {
      this.setState({ num: 7 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }

  eightHandler(userInput) {
    userInput = 8
    if (this.state.num === 0) {
      this.setState({ num: 8 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }
  nineHandler(userInput) {
    userInput = 9
    if (this.state.num === 0) {
      this.setState({ num: 9 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }
  zeroHandler(userInput) {
    userInput = 0
    if (this.state.num === 0) {
      this.setState({ num: 0 })
    } else {
      let counter = this.state.num
      let count = `${counter}${userInput}`
      this.setState({ num: count })
    }
  }
  cancelHandler() {
    this.setState({ num: 0 })
    this.setState({ num2: 0 })
    this.setState({ operator: "" })

  }

  render() {
    return (
      <div className="calculator">
        <div className="reader">
          <h1>{this.state.num}</h1>
          <h6>{this.state.num2}</h6>
        </div>

        <div className="inputs">
          <div className="btns">
            <div className="sevenEightNine">
              <button onClick={() => this.sevenHandler(this.state.num)}>7</button>
              <button onClick={() => this.eightHandler(this.state.num)}>8</button>
              <button onClick={() => this.nineHandler(this.state.num)}>9</button>
            </div>

            <div className="fourFiveSix">
              <button onClick={() => this.fourHandler(this.state.num)}>4</button>
              <button onClick={() => this.fiveHandler(this.state.num)}>5</button>
              <button onClick={() => this.sixHandler(this.state.num)}>6</button>
            </div>

            <div className="oneTwoThree">
              <button onClick={() => this.oneHandler(this.state.num)}>1</button>
              <button onClick={() => this.twoHandler(this.state.num)}>2</button>
              <button onClick={() => this.threeHandler(this.state.num)}>3</button>
            </div>

            <div className="zero">
              <button id="zero" onClick={() => this.zeroHandler(this.state.num)}>0</button>
              <button onClick={() => this.cancelHandler()}>C</button>
            </div>
          </div>

          <div className="operators">
              <button onClick={() => this.additionHandler(this.state.num)}>+</button>
              <button onClick={() => this.subtractionHandler(this.state.num)}>-</button>
              <button onClick={() => this.multiplyHandler(this.state.num)}>x</button>
              <button onClick={() => this.divideHandler(this.state.num)}>/</button>
            
          </div>

          <div >
            <button id="equals" onClick={() => this.equalsHandler(this.state.num)}>=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;