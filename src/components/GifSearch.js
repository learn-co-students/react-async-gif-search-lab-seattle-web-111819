import React, {Component} from 'react'

class GifSearch extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ""
    }
  }

  handleChange = event => {
    this.setState({userInput: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitInput(this.state.userInput)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input  value={this.state.userInput} onChange={this.handleChange}></input>
        <button>Find Gifs</button>
        </form>
      </div>
    )
  }

}

export default GifSearch