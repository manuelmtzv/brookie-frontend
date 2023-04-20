import { useNavigate } from 'react-router-dom'
import { useUserContext } from './useUserContext'

const API_URL = process.env.REACT_APP_API_URL

export const useDeleteReview = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const deleteReview = async (id) => {
    await fetch(`${API_URL}/review/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })

    navigate('/home')
  }

  return {
    deleteReview,
  }
}
