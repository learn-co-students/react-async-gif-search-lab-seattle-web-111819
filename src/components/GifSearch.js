import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    handleFormChange = e => {
        this.setState({search: e.target.value})
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.callback(this.state.search)
        this.setState({search: ""})
    }
    render() {
        return (
            <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                <label htmlFor='search'>Search For: </label>
                <input name='search' value={this.state.search}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}