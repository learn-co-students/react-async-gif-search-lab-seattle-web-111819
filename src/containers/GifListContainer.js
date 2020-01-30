import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  // componentDidMount() {
  //   this.fetchGifs()
  // }

 

  getThree = gifsArray => {
    let threeGifs = gifsArray.slice(0,3)
    this.setState({gifs: threeGifs})
  }

  onSubmitInput = (userInput) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=gZxSP62cVP4gNmol3Xev2B6MdaOqIV9m&rating=g`)
    .then(res => res.json())
    .then(gifs => this.getThree(gifs.data))
  }

  render() {
    return (
    <div>
      
      <GifSearch 
        onSubmitInput={this.onSubmitInput}
      />
      <GifList 
        gifs={this.state.gifs}
      //send as prop to be rendered
      />
    </div>
    )
  }
}

export default GifListContainer