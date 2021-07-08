import React from 'react'

class App extends React.Component {
  state = {
    number: 1
  }

  inc = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }))
  }

  render () {
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
