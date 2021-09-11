import React from 'react'
import Movies from '../component/Movies'
import Loader from '../component/Loader'
import Search from '../component/Search'
export default class Main extends React.Component{
    state={
        movies:[],
        loading:true
    }

    componentDidMount(){
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=fdce839f&s=panda")
        .then(response=>response.json())
        .then(data=>this.setState({movies:data.Search, loading:false}))
    }

    searchMovies = (str, type="all") =>{
        this.setState({loading:true})
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fdce839f&s=${str}${type !=="all" ? `&type=${type}`: ""}`)
        .then(response=>response.json())
        .then(data=>this.setState({movies:data.Search, loading:false}))
    }

    render(){
       
    return (
        <div className="container content">
            <h1 className="text-center">All Companent</h1>
            <Search searchMovie={this.searchMovies}/>
            {this.state.loading ? <Loader />
             : (<Movies movies={this.state.movies} />)}
        </div>
    
     )
    }
    }