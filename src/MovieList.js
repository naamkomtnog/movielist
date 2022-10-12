import React from 'react'
import MovieListItem from './components/MovieListItem';


export default function MovieList({ movies, toggleWatched}) {
    return (
        movies.map(movie => 
            <MovieListItem 
            movie={movie}
            key={movie.id} 
            toggleWatched={toggleWatched}
            />)
    )
}

