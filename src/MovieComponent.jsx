import React from 'react'
import MovieCard from './MovieCard'

const MovieComponent = ({movie}) => {
  return (
    <div className="container">
      <h1>List of cards</h1>
      {movie.map((curVal, id)=>{ 
        return <MovieCard key = {id} myData = {curVal}/> //hamne yahan naye props banaye key aur myData ab ise 
        // MovieCard ke andar as props pass karenge  

      })
    }
    
    </div>
  )
}

export default MovieComponent
