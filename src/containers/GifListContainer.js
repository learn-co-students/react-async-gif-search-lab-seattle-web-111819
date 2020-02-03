import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// gif_url = https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gZxSP62cVP4gNmol3Xev2B6MdaOqIV9m&rating=g
// three_gif_url = https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gZxSP62cVP4gNmol3Xev2B6MdaOqIV9m&rating=g&limit=3

// not visible
// has state
// fetch data
// submit handler to GifSearch
// render sub-component

class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    // loads fetch, not needed if there's a submit button
    // componentDidMount() {
    //     this.fetchGifs()
    // }

    gifsArray = (gifsArray) => {
        let threeGifs = gifsArray.slice(0,3)
        // console.log(threeGifs)
        this.setState({gifs: threeGifs})
    }

    onSubmitInput = (userInput) => {
        // replace "dolphin" with "${userInput}" 
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=gZxSP62cVP4gNmol3Xev2B6MdaOqIV9m&rating=g`)
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(gifs => this.gifsArray(gifs.data))
    }

    render() {
        return (
            <div>
                {/* GifListContainer view */}
                <GifSearch onSubmitInput={this.onSubmitInput} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
export default GifListContainer