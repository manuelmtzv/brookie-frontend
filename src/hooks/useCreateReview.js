import { useParseTextJson } from "./useParseTextJson";
import { useUserContext } from "../hooks/useUserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateReview = () => {
  const { parse } = useParseTextJson(); 
  const { user, dispatch } = useUserContext();
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(null); 
  const navigate = useNavigate(); 

  const createReview = async (formValues) => {    
    setIsLoading(true); 
    setError(null); 
    let review = formValues; 

    review = {...review, description: parse(review.description), body: parse(review.body)}

    const response = await fetch("https://brookie-backend.onrender.com/review/create", {
      method: "POST", 
      body: JSON.stringify(review), 
      headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${user.token}`
      }
    })

    const json = await response.json();     

    if (!response.ok) {
      setIsLoading(false); 
      setError(JSON.parse(json.error)); 
    }

    if (response.ok) {
      dispatch({ type: "CREATE_REVIEW", payload: json })
      navigate("/home"); 
      
      setIsLoading(false); 
    }    
  }

  return {
    createReview, 
    error, 
    isLoading
  }
}