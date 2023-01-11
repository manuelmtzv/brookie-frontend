import { useUserContext } from "./useUserContext";
import { useReviewContext } from "./useReviewsContext";
import { useState } from "react";
import { useEffect } from "react";

export const useFetchUserReviews = () => {
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(null); 
  const { user } = useUserContext();
  const { dispatch } = useReviewContext();   

  useEffect(() => {
    if (user) {
      const fetchUserReviews = async () => {
        setIsLoading(true); 
        setError(null); 
    
        const response = await fetch("https://brookie-backend.onrender.com/review/user", {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        const json = await response.json()    
    
        if (!response.ok) {
          setIsLoading(false); 
          setError(JSON.parse(json.error)); 
        }
    
        if (response.ok) {
          dispatch({ type: "SET_USER_REVIEWS", payload: json })
          setIsLoading(false); 
        }
      }
    
      fetchUserReviews() 
    } 
  }, [dispatch, user])

  return { isLoading, error }
}