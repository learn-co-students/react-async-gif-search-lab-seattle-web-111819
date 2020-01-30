import React from 'react'
const INITIAL_STATE ={
    search: ""
}
class GifSearch extends React.Component{

    constructor(){
        super()
        this.state =INITIAL_STATE
    }



handleChange =(e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
 this.setState({ 
     [e.target.name]: e.target.value
 }) 
}

handleSubmit =(e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
    this.setState(INITIAL_STATE)
}

render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.search}  type="text" name= "search" onChange={this.handleChange} >
            </input>
        </form>

    )
}



}
export default GifSearch