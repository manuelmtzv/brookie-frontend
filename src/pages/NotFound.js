import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { containerVariants } from "../utils/containerVariants"; 
const notFound = require("../img/404.png"); 

const NotFound = ({ message, title }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/home")
  }

  return (
    <motion.div className="not-found main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >
      <div className="not-found__container container">
        <div className="not-found__icon">
          <img src={notFound} alt="Brookie logo without color" />
          <h1>Oops!</h1>
        </div>
        <div className="not-found__description">
          <h2>{title}</h2>
          <p>{message}</p>
          <Button onClick={handleClick} className="not-found__button">Go back to home</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound; 