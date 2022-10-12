import React from "react"
import imdb from "../images/imdb.png"
import rt from "../images/rt.png"
import youtube from "../images/youtube.png"
import eye from "../images/eye.png"




export default function MovieListItem ( { movie, toggleWatched }) {
    function handlemovieClick() {
        toggleWatched(movie.id)
    }
    return (
        <div className={`movie-list-item-container ${movie.completed ? "watched" : "unwatched"}`}>
        <div className="card">
            <img src={movie.poster} className="poster" alt="Poster"/>
            <div className="movie-content">
                <div className="movie-header">
                    <h2 className="header-text">
                        <span className="movie-title">{movie.title}</span> 
                        <span className="movie-year">{movie.year}</span>
                    </h2>
                </div>
                <div className="movie-categories">
                    {movie.categories.map(category => 
                        <div>{category}</div>
                    )}
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <div className="imdb">
                            <img src={imdb} alt="ImdB"/> {movie.imdb}</div>
                        <div className="rt">
                            <img src={rt} alt="Rotten Tomatoes"/> {movie.rottentomatoes}
                        </div>
                    </div>
                    <div className="youtube">
                        <a href={movie.youtube} target="_blank" rel="noreferrer"><img src={youtube} alt="YouTube"/></a>
                    </div>
                {/* 
                    <div className="rating">
                        {movie.stars}
                        <a href="#">Star</a>
                        <a href="#">Star</a>
                        <a href="#">Star</a>
                    </div>
                */}
                </div>
            </div>
        </div>
                    <div className="select">
                    <input type="checkbox" checked={movie.completed} onChange={handlemovieClick}/>  
                    <img src={eye} alt="Eye"/> 
 
                </div>
                </div>
    )
}
