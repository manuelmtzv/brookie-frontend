import { useEffect, useState } from "react";
import { useUserContext } from "./useUserContext"; 

export const useVerifyAuthor = (author) => {
  const { user } = useUserContext(); 
  const [verified, setVerified] = useState(false); 

  useEffect(() => {
    if(user) {
      setVerified((user.username === author) ? true : false); 
    }
  }, [user, author])

  return { 
    verified
  }
}