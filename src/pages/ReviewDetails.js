
import NotFound from "./NotFound";
import DeleteButton from "../components/DeleteButton";
import { useParams } from "react-router-dom";
import { useParseTextHtml } from "../hooks/useParseTextHtml"; 
import { useFetchReviewById } from "../hooks/useFetchReviewById";

import { motion } from "framer-motion";
import { containerVariants } from "../utils/containerVariants";

const ReviewDetails = () => {
  const { id } = useParams();
  const { parse } = useParseTextHtml();
  const { review, error, isLoading } = useFetchReviewById(id);   

  return (
    <motion.div className="review main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >         
      {
        review && (
          <div className="review__container container">
            <div className="review__top">
              <h2 className="review__title">{review.title} : <span>{review.book_name}</span></h2>

              <p className="review__date">Created at: <span>{new Date(review.createdAt).toLocaleDateString()}</span></p> 
            </div>

            <div className="review__content">
              <p className="review__description">Descripción: <span dangerouslySetInnerHTML={{__html: parse(review.description)}}></span></p>
              <p className="review__body" dangerouslySetInnerHTML={{__html: parse(review.body)}}></p>
            </div>
            
            <div className="review__bottom">
              <h2>Book author: <span>{review.book_author}</span></h2>
              <h2>Author: <span>{review.author}</span></h2>
            </div>

            <DeleteButton 
              author={review.author}
              _id={review._id} />                                  
          </div>                      
        )
      }

      {
        (!review && isLoading) && 
          <p className="container">Loading...</p>
      }

      {
        error && 
          <NotFound
            title={error.title}
            message={error.error} />
      }
    </motion.div>
  )
}

export default ReviewDetails;