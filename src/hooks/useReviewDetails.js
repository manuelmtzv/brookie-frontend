import { useReviewContext } from "../hooks/useReviewsContext";
import { useEffect, useState } from "react";

export const useReviewDetails = (id) => {
  const { reviewState } = useReviewContext();
  const [review, setReview] = useState({}); 

  useEffect(() => {
    const filter = (reviewArray, id) => {
      return (reviewArray.filter(item => item._id === id )[0]); 
    }

    if (!reviewState) {
      setReview({})
    } else {
      setReview(reviewState.reviews ? filter(reviewState.reviews, id) : reviewState.userReviews ? filter(reviewState.userReviews, id) : {}); 
    }
  }, [reviewState, id])

  return {
    review
  }
}