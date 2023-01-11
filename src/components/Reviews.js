
import ReviewLink from "./ReviewLink";

const Reviews = ({ reviews, className }) => {

  return (
    <div>
      {
        reviews.lenght !== 0 
        ? reviews.map((review) => (
          <div 
            className={`reviews ${className}`} 
            key={review._id} 
          >
            <ReviewLink review={review} />
          </div> 
        )) 
        : <h2 className="no-reviews">There are no reviews to show</h2>
      }
    </div>
  )
}

export default Reviews; 