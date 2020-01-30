import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


// the App component should render out the GifListContainer component 
//https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gZxSP62cVP4gNmol3Xev2B6MdaOqIV9m&rating=g

const App = () => {

    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifListContainer />
      </div>
    )
  
}


export default App
