import React from 'react'

class GifList extends React.Component {


    makeGifsList = () =>{
       return this.props.gifs.map((gif, index) => {
           return <li key={index}><img src={gif} alt={gif} /></li>
        })
    }



    render() {
        return(
         <ul>
             {this.makeGifsList()}
         </ul>
        )
    }



}
export default GifList