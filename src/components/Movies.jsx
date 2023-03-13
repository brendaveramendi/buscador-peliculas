export const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key = {movie.id} >
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}
export const NoMoviesResults = () => {
  return (
  <p>No se encontraron peliculas para esta búsqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovie = movies?.length > 0
  return (
    hasMovie
      ? <ListOfMovies movies={ movies } />
      : <NoMoviesResults />
  )
}
