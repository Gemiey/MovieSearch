import React from 'react'

const MovieRow = ({movie}) => {
  return (
    <div>
        <table key={movie.id}>
            <tr  className='movies'>
                <td className='block'>                   
                 <img height = '500px' src={movie.poster_src}></img>

                    <p className='title'> {movie.title}</p>
                    <p className='overview'>{movie.overview} </p>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default MovieRow