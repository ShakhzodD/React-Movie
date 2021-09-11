import React from 'react'

export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster}= props
    return (
            <div className="col-12 col-sm-6 col-md-3 col-lg-3" key={imdbID}>
            <div className="card">
                <img src={Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-text">{Title}</h4>
                    <p className="d-flex justify-content-between">{Year} <span>{Type}</span></p>
                </div>
                </div>
            </div>
    )
}
