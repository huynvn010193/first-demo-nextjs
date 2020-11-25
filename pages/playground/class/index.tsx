import React, { Component } from 'react';

type StateType = {
  counter: number;
}

// babel + webpack.
export default class PlayGround extends Component<any,StateType> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    console.log("constructor")
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  UNSAFE_componentWillUpdate () {
    console.log("componentWillUpdate");
  }

  render() {
    console.log("render");
    return (
      <div className='container'>
        <h1>Play Ground - Life Cycle - React Hooks</h1>
        <button onClick={() => {
          // this.setState({
          //   counter: this.state.counter + 1
          // })
          this.setState((prevState) => {
            return {
              counter: prevState.counter + 1
            }
          })
        }}>Counter Add</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}