import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import $ from 'jquery';
import { useState } from 'react';
import React, { useEffect } from 'react';
function App() {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("a");

  return (
    <div className='App'>
      
      <table style={{backgroundColor:'black', display:'block', color:'white', fontSize:'40px'}}>
        
        <tr>
          <td>
            <img src={logo} className="App-logo" alt="logo" />
          </td>
          <td>
            MovieSearch
          </td>
        </tr>

      </table>
      
      <table>
      <tr>
        <td>
        <Movie movies={movies} setMovies={setMovies} query= {query} setQuery={setQuery} ></Movie>
        </td>
      </tr>  
      </table>

        </div>
  )
}

export default App;
