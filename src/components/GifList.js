import React, { Component } from 'react'

// presentational
// ul
// li (3 images)

class GifList extends Component {

    // helper function to create li for each gif
    gifsList = () => {
        return this.props.gifs.map((gif, id) => 
            <li key={id}><img src={gif.images.original.url} alt="gif"/></li>
            )
            // console.log(this.props.gifs)
    }
 
    render() {
        return (
            // <div>GifList view
            <ul>
                {this.gifsList()}
            </ul>
            // </div>
        )
    }
}
export default GifList