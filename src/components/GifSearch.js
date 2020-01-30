import React, { Component } from 'react'


class GifSearch extends Component {
  constructor() {
    super()
    this.state={
      userInput: ""
    }
  }

  handleOnChange = (e) => {
   this.setState({userInput: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmitInput(this.state.userInput)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.userInput} onChange={this.handleOnChange}></input>
        <button>Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch


