
import Button from "./Button";
import { useVerifyAuthor } from "../hooks/useVerifyAuthor";
import { useDeleteReview } from "../hooks/useDeleteReview";

const DeleteButton = ({ author, _id, ...props }) => {
  const { verified } = useVerifyAuthor(author); 
  const { deleteReview } = useDeleteReview(); 

  return (
    verified &&
    <Button
       className="delete-button"
       onClick={() => deleteReview(_id)} >
      <p>Delete review</p>
    </Button>
  )
}

export default DeleteButton; 