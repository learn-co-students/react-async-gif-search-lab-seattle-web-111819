import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
        this.gifFetch()
    }

    gifFetch = (term) => {
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=2DlWgaF7V6r00BmJwF7lSMuZ75tzLsud&rating=g`)
        .then(res => res.json())
        .then(json => this.set3Gifs(json))
    }

     set3Gifs = (json) => {
        // let gifArray = json.data.slice(0, 3)
        // let gif1 = json.data.images.original.url
        this.setState({
            gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)
        })
    }  

    // handleFinalSubmit = (term) => {
    //     // e.preventDefault()
    //     // e.persist()
    //     // console.log(e)
    //     // console.log(e.target["search-term"].value)
    //     this.gifFetch(term)
    // }
    // componentDidMount = () => {
    //         // console.log(this.state.gifs)
    // }

    render () {
        return <div>
            <GifSearch onGifFetch={this.gifFetch}/>
                <GifList gifs={this.state.gifs} />
                
            </div>
       
    }
}