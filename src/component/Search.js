import React from 'react'

export default class Search extends React.Component{
 state={
     message:"panda",
     type:"all",

 }

handleKey = (e) =>{
    if(e.key=== "Enter") {
        this.props.searchMovie(this.state.message)
    }
}

handleFilter=(e)=>{
    this.setState(()=>({type:e.target.dataset.type}), ()=>{
        this.props.searchMovie(this.state.message, this.state.type)
    } )
}
 
    render(){
    return (
        <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
            id="email_inline" 
            onChange={(e)=>this.setState({message:e.target.value})}
            value={this.state.message} 
            placeholder="Search" 
            type="search" 
            className="validate"
            onKeyDown={this.handleKey} />
          
          <button className="btn btn-pos" onClick={()=>this.props.searchMovie(this.state.message, this.state.type)}>Qidirish</button>
          </div>
        </div>
        <div>
            <label>
            <input 
            className="with-gap" 
            name="type" 
            type="radio"
            onChange={this.handleFilter}
            data-type="all"
            checked={this.state.type==="all"}/>
            <span>All</span>
            </label>
            <label>
            <input 
            className="with-gap" 
            name="type" 
            type="radio"
            checked={this.state.type==="movie"}
            onChange={this.handleFilter}
            data-type="movie"/>
            <span>Movies only</span>
            </label>
            <label>
            <input 
            className="with-gap" 
            name="type" 
            type="radio"
            onChange={this.handleFilter}
            data-type="series"
            checked={this.state.type==="series"}/>
            <span>Series only</span>
            </label>
            </div>
      </div>
    )
}
}
