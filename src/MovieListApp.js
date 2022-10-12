import './App.css';
import MovieList from './MovieList'
import React, { useState, useRef, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'movies'
 
function Appmovie() {
  const [movies, setmovies] = useState([ { 
    id: 0, 
    title: "Bullet Train",
    year: "2022",
    poster: "https://i.postimg.cc/x895jCC9/bullettrain.jpg",
    categories: ["Action", "Mind-bending"],
    imdb: "7,3",
    rottentomatoes: "55%",
    stars: 3,
    youtube: "https://www.youtube.com/watch?v=EGeJczJvWns"
  },
  { 
    id: 1, 
    title: "The Unbearable Weight Of Massive Talent",
    year: "2022",
    poster: "https://i.postimg.cc/P5bqY5fg/unbearable-weight-of-massive-talent-xlg-1-480x-progressive.webp",
    categories: ["Comedy", "Action"],
    imdb: "7,0",
    rottentomatoes: "86%",
    stars: 3,
    youtube: "https://www.youtube.com/watch?v=x2YHPZMj8r4"
  },
  { 
    id: 2, 
    title: "Everything Everywhere All At Once",
    year: "2022",
    poster: "https://i.postimg.cc/CMcrZghs/Everything-Everywhere-All-at-Once-ps-1-jpg-sd-high-scaled.jpg",
    categories: ["Mind-bending", "Comedy", "Action"],
    imdb: "8,1",
    rottentomatoes: "95%",
    stars: 3,
    youtube: "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
    completed: true
  } ])
  const titleRef = useRef()
  const yearRef = useRef()
  const posterRef = useRef()
  const youtubeRef = useRef()
  const categoriesRef = useRef()
  const imdbRef = useRef()
  const rottentomatoesRef = useRef()
  const starsRef = useRef()

  useEffect(() => {
    const storedmovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if (storedmovies) setmovies(storedmovies)

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
  }, [movies])

  function toggleWatched(id) {
    const newmovies = [...movies]
    const movie = newmovies.find(movie => movie.id === id)
    movie.completed = !movie.completed
    setmovies(newmovies)
  }

  function clear() {
    // const newmovies = movies.filter(movie => !movie.completed)
    // setmovies(newmovies)
    setmovies([])
  }

  function handleAddmovie(e) {
    const title = titleRef.current.value
    const year = yearRef.current.value
    const poster = posterRef.current.value
    const youtube = youtubeRef.current.value
    const categories = categoriesRef.current.value.split(",")
    const imdb = imdbRef.current.value
    const rottentomatoes = rottentomatoesRef.current.value
    const stars = starsRef.current.value

    if (title === '') return
    setmovies(prevmovies =>  {
      return [...prevmovies, 
        { 
          id: prevmovies.length, 
          title: title, 
          completed: false, 
          year:year,
          poster: poster,
          youtube: youtube,
          categories: categories,
          imdb: imdb,
          rottentomatoes: rottentomatoes,
          stars: stars,
        }]
    })

    titleRef.current.value = null
    yearRef.current.value = null
    posterRef.current.value = null
    youtubeRef.current.value = null
    categoriesRef.current.value = null
    imdbRef.current.value = null
    rottentomatoesRef.current.value = null
    starsRef.current.value = null

  }

  function showUnwatched() {
    const container = document.getElementById("movielist-outer");
    container.classList.remove("show-watched")
    container.classList.add("show-unwatched")
  }

  function showWatched() {
    const container = document.getElementById("movielist-outer");
    container.classList.add("show-watched")
    container.classList.remove("show-unwatched")
  }
  function addDemoContent() {
    setmovies(prevmovies =>  {
      return [
        { 
          id: prevmovies.length, 
          title: "Bullet Train",
          year: "2022",
          poster: "https://i.postimg.cc/x895jCC9/bullettrain.jpg",
          categories: ["Action", "Mind-bending"],
          imdb: "7,3",
          rottentomatoes: "55%",
          stars: 3,
          youtube: "https://www.youtube.com/watch?v=EGeJczJvWns"
        },
        { 
          id: prevmovies.length + 1, 
          title: "The Unbearable Weight Of Massive Talent",
          year: "2022",
          poster: "https://i.postimg.cc/P5bqY5fg/unbearable-weight-of-massive-talent-xlg-1-480x-progressive.webp",
          categories: ["Comedy", "Action"],
          imdb: "7,0",
          rottentomatoes: "86%",
          stars: 3,
          youtube: "https://www.youtube.com/watch?v=x2YHPZMj8r4"
        },
        { 
          id: prevmovies.length + 2, 
          title: "Everything Everywhere All At Once",
          year: "2022",
          poster: "https://i.postimg.cc/CMcrZghs/Everything-Everywhere-All-at-Once-ps-1-jpg-sd-high-scaled.jpg",
          categories: ["Mind-bending", "Comedy", "Action"],
          imdb: "8,1",
          rottentomatoes: "95%",
          stars: 3,
          youtube: "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
          completed: true
        },
      ]
    })
  }
  return (
    <div className="App">
      <div className="movie-form">
        <input ref={titleRef} type="text" placeholder="Title"/>
        <input ref={yearRef} type="text" placeholder="Year"/>
        <input ref={posterRef} type="text" placeholder="Poster image URL"/>
        <input ref={youtubeRef} type="text" placeholder="Youtube Trailer"/>
        <input ref={categoriesRef} type="text" placeholder="Categories"/>
        <input ref={imdbRef} type="text" placeholder="IMDB score"/>
        <input ref={rottentomatoesRef} type="text" placeholder="Rotten Tomatoes %"/>
        <input class="hidden" ref={starsRef} type="text" placeholder="Stars"/>
      </div>

    <button onClick={handleAddmovie}>Add</button>
    <button onClick={addDemoContent}>Add demo content</button>
    <button onClick={clear}>Clear list</button>
    <br/>

  <div id="movielist-outer" className="show-unwatched">
    <div className="tabcontainer">
    <button className="tab unwatched" onClick={showUnwatched}>To watch <span>{movies.filter(movie => !movie.completed).length}</span></button>
    <button className="tab watched" onClick={showWatched}>Watched <span>{movies.filter(movie => movie.completed).length}</span></button>
  </div>

    <div className="movielist-inner">
    <MovieList movies={movies} toggleWatched={toggleWatched} />
    </div>
    </div>
  </div>)
}

export default Appmovie; 
