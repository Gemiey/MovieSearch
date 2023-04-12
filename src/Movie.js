import React, { useEffect } from 'react'
import $ from 'jquery';
import MovieRow from './MovieRow';
const Movie = ({movies,setMovies, query, setQuery}) => {
  
  const MovieTitles =[];  
  var rowsarray = [];

  useEffect(()=>{
    const searching = () =>{
      
      const api_url = 'https://api.themoviedb.org/3/search/movie?query=' + query + '&api_key=d6352689d9431bdd1dcb859d69f8d426';
      
      $.ajax({
        url:api_url,
        success: (searchResults) => {
            const results = searchResults.results;      
            
            results.forEach((movie)=>{
              movie.poster_src = "https://www.themoviedb.org/t/p/original" + movie.poster_path;
              const movierow = <MovieRow movie={movie}></MovieRow>
              rowsarray.push(movierow);
              MovieTitles.push(movie.title);
            },);

            setMovies(rowsarray);
        },

        error:(xhr, status, err) =>{
          console.error("Failed to fetch data")
        }

      })

    }
    
    searching();

  })

  return (
    <div>      
      
      <input className='searchbar' type="text" placeholder="Search" onChange={e => setQuery(e.target.value)}></input>
      
      <ul className='movies'>
        {movies}
      </ul>
    
    </div>
  )
}

export default Movie