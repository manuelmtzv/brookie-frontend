import { ReviewsContext } from "../context/ReviewsContext"; 
import { useContext } from "react"

export const useReviewContext = () => {
  const context = useContext(ReviewsContext)

  if (!context) {
    throw Error("useReviewContext must be inside an ReviewContextProvider")
  }

  return context
}