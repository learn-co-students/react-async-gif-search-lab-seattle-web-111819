import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }    
    callbackFormSubmit = search => {
        let url = ['https://api.giphy.com/v1/gifs/search?q=', '&api_key=dc6zaTOxFJmzC&rating=g']
        fetch(url[0] + search + url[1]).then(r => r.json()).then(gifs => this.setState({gifs: gifs.data.slice(0,10)}))
    }
    render() {
        return (<div>
            <GifSearch callback={this.callbackFormSubmit}/>
            <GifList gifs={this.state.gifs}/>
        </div>)
    }
}