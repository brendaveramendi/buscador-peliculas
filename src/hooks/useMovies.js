import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../service/movie'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  // Se inyecta el search por parametro asi no se renderiza cada vez que cambia el input
  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return
    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    console.log('memoSortMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading }
}
