import React, { Component} from 'react';

export default class GifList extends Component {
    render() {
        return(
            <ul>
                <li>
                    <img src={this.props.gifs[0]}></img>
                </li>
                <li>
                    <img src={this.props.gifs[1]}></img>
                </li>
                <li>
                    <img src={this.props.gifs[2]}></img>
                </li>
            </ul>
        )
    }
}