import React from 'react'
import Movie from './Movie'

export default function Movies(props) {
    const {movies=[]}=props
    
    return (
        <div className="movies">
            <div className="row">
                {movies.length ? movies.map((movie)=>(
                    <Movie key={movie.imdbID} {...movie} />
                )): <h4>Malumot Topilmadi</h4>
                }
            </div>
        </div>
    )
}
