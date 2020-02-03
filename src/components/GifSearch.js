import React, { Component } from 'react'

// controlled form
// state
// callback prop from GifListContainer

class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            userInput: ""
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value}) 
            // console.log(e)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitInput(this.state.userInput)
        // console.log(e)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.userInput} onChange={this.handleChange} />
                <button>Find Gifs</button>
            </form>
            </div>
        )
    }
}
export default GifSearch