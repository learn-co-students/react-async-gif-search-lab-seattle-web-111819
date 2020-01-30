import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=sPlEiDkvF84RHxsrYVoqXM3TPQNba0FK&q=${search}&limit=3&offset=0&rating=G&lang=en`)
        .then(res => res.json())
        .then(json => {
            this.setState({ 
                gifs: json.data.map( gif => gif.images.original.url ) 
            })
      })
    }
    
    // { gifs: data.map( gif => ({gif.images.original.url }) ) }
    componentDidMount(){
        this.fetchGifs()
    }
        


    render() {
        return (
        <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
        </div>
        )
    }



}
export default GifListContainer