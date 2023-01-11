
import Button from "../components/Button";
import { useCreateReview } from "../hooks/useCreateReview";

import { motion } from "framer-motion";
import { containerVariants } from "../utils/containerVariants";

const CreateReview = () => {
  const { createReview, error, isLoading } = useCreateReview(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);    

    createReview(Object.fromEntries(formData));
  }

  return (
    <motion.div className="create-review main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >     
      <div className="create-review__container">
        <form className="create-review__form container" onSubmit={(e) => handleSubmit(e)}>
          <h2>Create a review</h2>

          <label htmlFor="title">Title:</label>
          <input  type="text" name="title" id="title" />
          <label htmlFor="book_name">Book name:</label>
          <input  type="text" name="book_name" id="book_name" />
          <label htmlFor="book_author">Book author:</label>
          <input  type="text" name="book_author" id="book_author" />
          <label htmlFor="description">Description:</label>
          <textarea  name="description" id="description"></textarea>
          <label htmlFor="body">Body:</label>
          <textarea name="body" id="body"></textarea>

          <Button
            children={"Publish"} 
            disabled={isLoading} />

          {
            error && (<p className="error">{`${error.type === "CRITICAL" ? "❌" : "⚠️"} ${error.error}`}</p>)
          }
        </form>
      </div>
    </motion.div>
  )
}

export default CreateReview; 