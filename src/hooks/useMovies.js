import { useRef, useState } from 'react'
import { searchMovies } from '../service/movie'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)
  const getMovies = async () => {
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
  }
  return { movies, getMovies, loading }
}
