
import Reviews from "../components/Reviews"; 
import Button from "../components/Button"; 

import { useNavigate } from "react-router-dom"; 
import { useFetchUserReviews } from "../hooks/useFetchUserReviews"; 
import { useReviewContext } from "../hooks/useReviewsContext";

import { motion } from "framer-motion";
import { containerVariants } from "../utils/containerVariants";

const YourReviews = () => {
  const navigate = useNavigate();  
  const { isLoading } = useFetchUserReviews(); 
  const { reviewState } = useReviewContext(); 

  const userReviews = reviewState.userReviews; 

  const handleClick = () => {
    navigate("/create-review");
  }

  return (
    <motion.div className="your-reviews main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >           
      <div className="your-reviews__container container">
        <div className="your-reviews__description">
          <h3>Your reviews</h3>
        </div>

        <div className="your-reviews__reviews">
          {                     
            userReviews && (
              (userReviews.length > 0) ? 
                <Reviews 
                  reviews={userReviews}
                  className={"home__review"} />     
                : <p className="container no-reviews">No reviews to show.</p>  
            )            
          }

          {
            (!userReviews && isLoading) && 
              <p>Loading...</p>
          }
        </div>

        <Button
          children={"Create Review"}
          className={"your-reviews__create"}
          onClick={handleClick} />
      </div>
    </motion.div>
  )
}

export default YourReviews; 