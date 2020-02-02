import React, { Component} from 'react';

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            term: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.term)
        this.setState ({
            term: ""
        })
    }

    handleChange = (e) => {
        this.setState ({
            term: e.target.value
        })   
    }

    render() {
        const divStyle= {
            float: 'right'
        }
        return(
            <div style={divStyle}>
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label>
                <input type="text" value={this.state.term} onChange={this.handleChange}></input>
                <button>Find Gifs</button>
            </form>
            </div>
            )
        }
    }