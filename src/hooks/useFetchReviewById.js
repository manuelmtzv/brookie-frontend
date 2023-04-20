import { useState } from 'react'
import { useEffect } from 'react'

const API_URL = process.env.REACT_APP_API_URL

export const useFetchReviewById = (id) => {
  const [review, setReview] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true)
      setError(null)

      const response = await fetch(`${API_URL}/review/get/${id}`)

      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError(JSON.parse(json.error))
      }

      if (response.ok) {
        setReview(json)
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [id])

  return { review, isLoading, error }
}
