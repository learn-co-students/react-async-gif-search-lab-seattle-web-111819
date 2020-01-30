import React, { Component } from 'react';

export default class GifSearch extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        e.persist()
        // console.log(e)
        console.log(e.target["search-term"].value)
        let term = e.target["search-term"].value
        this.props.onGifFetch(term)
        // this.props.g
    }


    render () {

        const divStyle = {
            float: 'right'
        }
        return <div style={divStyle} id="search">
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term </label>
                <input type="text" name="search-term"></input>
                <button >Find Gifs</button>
            </form>
        </div>
    }
}