import React, {Component} from 'react'

export default class GifList extends Component {
    displayGifs = () => this.props.gifs.map((gif, i) => <li key={i}><img src={gif.images.original.url} alt='pic!'/></li>)
    render() {
        return (
            <ul>
                {this.displayGifs()}
            </ul>
        )
    }
}