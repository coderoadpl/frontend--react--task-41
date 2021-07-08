import React from 'react'

class App extends React.Component {
  isFirstRender = true
  state = {
    number: 1
  }

  inc = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }))
  }

  // static getDerivedStateFromProps () {
  //   console.log('1. getDerivedStateFromProps')
  // }

  shouldComponentUpdate () {
    console.log('2. shouldComponentUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('5. componentDidUpdate')
  }

  // getSnapshotBeforeUpdate () {
  //   console.log('4. getSnapshotBeforeUpdate')
  // }

  render () {
    if (this.isFirstRender) {
      console.log('MOUNTING - render')
      this.isFirstRender = false
    } else {
      console.log('3. render')
    }

    return (
      <div>
        <h1>
          {this.state.number}
        </h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
      </div>
    )
  }
}

export default App
