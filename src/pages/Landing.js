import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Feature from "../components/Feature";

import { motion } from "framer-motion";
import { landingVariants } from "../utils/containerVariants";

const image = require("../img/landing-image.png");
const free = require("../img/free.png");
const review = require("../img/reviews.png");
const book = require("../img/books.png"); 

const Landing = () => {
  const navigate = useNavigate();   

  const handleClick = () => {
    navigate("/signup")
  }

  return (
    <motion.div className="landing main_content"
      variants={landingVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >     
      <div className="landing__container container">
        <div className="landing__main">
          <div className="landing__description">
            <h2 className="landing__slogan">
              Brookie is a free website where you can share your opinion of the things you read. 
            </h2>
          </div>
          
          <div className="landing__image">
            <img src={image} alt="Brookie" />
          
            <Button 
              children={"Signup"}
              onClick={handleClick}
              className={"landing__signup"} />
          </div>
        </div>

        <div className="landing__features">
          <Feature
            title={"Free access"}
            img={free}
            description={"It has no cost at all. Create your account now and enjoy."} />
          <Feature
            title={"Share you reviews"}
            img={review}
            description={"Share your experiences, opinions, criticisms and theories."} />
          <Feature
            title={"Discover new books"}
            img={book}
            description={"Check what others think and encourage yourself to continue reading."} />
        </div>
      </div>
    </motion.div>
  )
}

export default Landing; 