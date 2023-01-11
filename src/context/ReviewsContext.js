import React, { createContext, useReducer } from "react";

export const ReviewsContext = createContext(); 

export const reviewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_REVIEWS": 
      return {
        reviewState: {...state.reviewState, reviews: action.payload}
      }
    case "SET_USER_REVIEWS": 
      return {
        reviewState: {...state.reviewState, userReviews: action.payload}
      }
    case "CREATE_REVIEW": 
      return {
        reviewState: {...state.reviewState, reviews: [action.payload, ...state.reviews] }
      }
    case "DELETE_REVIEW": 
      return {
        reviewState: {...state.reviewState, reviews: state.reviews.filter((review) => review._id !== action.payload._id)}
      }
    case "LOGOUT": 
      return {
        reviewState: null
      }
    default: 
      return state
  }
}

export const ReviewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewsReducer, {
    reviewState: {
      reviews: null, 
      userReviews: null
    }
  })

  return (
    <ReviewsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ReviewsContext.Provider>
  )
}