import { useUserContext } from './useUserContext'
import { useReviewContext } from './useReviewsContext'
import { useState } from 'react'
import { useEffect } from 'react'

const API_URL = process.env.REACT_APP_API_URL

export const useFetchReviews = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user } = useUserContext()
  const { dispatch } = useReviewContext()

  useEffect(() => {
    if (user) {
      const fetchReviews = async () => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${API_URL}/review`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        const json = await response.json()

        if (!response.ok) {
          setIsLoading(false)
          setError(JSON.parse(json.error))
        }

        if (response.ok) {
          dispatch({ type: 'SET_REVIEWS', payload: json })
          setIsLoading(false)
        }
      }
      fetchReviews()
    }
  }, [dispatch, user])

  return { isLoading, error }
}
