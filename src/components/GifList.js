import React, { Component } from 'react'

export default class GifList extends Component {
  gifLis() {
    return this.props.gifs.map(gif => 
      <li><img src={gif.images.original.url}/></li>) 

    // console.log(this.props.gifs)
  }

  render() {
    return(
      //this.props.gifs (an array of 3 gifs)
      <ul>
        {this.gifLis()}
      </ul>
    )
  }
}