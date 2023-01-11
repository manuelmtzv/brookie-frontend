
import { useNavigate } from "react-router-dom"
import { useUserContext } from "./useUserContext";

export const useDeleteReview = () => {
  const navigate = useNavigate(); 
  const { user } = useUserContext();

  const deleteReview = async (id) => {
    await fetch(`https://brookie-backend.onrender.com/review/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }); 

    navigate("/home")
  }

  return {
    deleteReview
  }
}
