import React, { Component } from 'react'

class GifList extends Component {
  createGifLis() {
    return this.props.gifs.map(gif => 
      <li><img src={gif.images.original.url} alt="gif"/></li>)
  }

  render(){
    return(
      //this.props.gifs
      <ul>
        {this.createGifLis()}
      </ul>
    )
  }
}

export default GifList