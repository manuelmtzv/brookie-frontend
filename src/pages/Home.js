import React, { useEffect } from "react";
import Reviews from "../components/Reviews.js";
import { useReviewContext } from "../hooks/useReviewsContext.js";
import { useFetchReviews } from "../hooks/useFetchReviews.js";
import { motion } from "framer-motion";

import { containerVariants } from "../utils/containerVariants.js";

const Home = () => {
  const { isLoading } = useFetchReviews();
  const { reviewState } = useReviewContext();  

  const reviews = reviewState.reviews; 

  useEffect(() => {
  }, [isLoading, reviews])    

  return (
    <motion.div className="home main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >      
      <div className="home__container container">
        <div className="home__description">
          <div>
            <h3>Create reviews of the books you read</h3>
          </div>
        </div>

        <div className="home__reviews">
          {                     
            reviews && (
              (reviews.length > 0) ?
                <Reviews 
                  reviews={reviews}
                  className={"home__review"} />      
                : <p className="container no-reviews">No reviews to show.</p>     
            )      
          }

          {
            (!reviews && isLoading) && 
              <p>Loading...</p>
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Home; 