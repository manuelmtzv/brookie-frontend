import { useUserContext } from "./useUserContext";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

export const useAuth = () => {
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(null); 
  const { dispatch } = useUserContext();
  const navigate = useNavigate(); 

  const auth = async (email, username, password) => {
    setIsLoading(true); 
    setError(null); 

    const response = await fetch("https://brookie-backend.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({ email, username, password })
    })

    const user = await response.json(); 

    if (!response.ok) {
      setIsLoading(false); 
      setError(JSON.parse(user.error)); 
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(user))

      dispatch({ type: "LOGIN", payload: user })

      setIsLoading(false)

      navigate("/home")
    }
  }

  return { auth, isLoading, error }
}