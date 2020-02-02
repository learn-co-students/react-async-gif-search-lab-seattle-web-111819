import React, { Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentWillMount() {
        this.fetchGifs()
    }

    fetchGifs = (term = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=ifokhatyRwHBc4OVWVnbgfbSxnEGfzg6&rating=g`)
        .then(res => res.json())
        .then(json => 
            {this.setState({
            gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)
        })}
        )
    }

    render() {
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}