import { Link } from "react-router-dom";

// const trashcan = require("../img/trashcan.png"); 

const ReviewLink = ({ review }) => {

  return (
    <Link to={`/reviews/${review._id}`} className={"review review-link"}>
      <h2>
        {review.title} : <span>{review.book_name}</span>
      </h2>              
      <p>
        {
          review.description.length < 500 ? 
          review.description : 
          review.description.slice(0, 500) + "..."
        }
      </p>
    </Link>
  )
}

export default ReviewLink;