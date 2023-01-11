import Button from "../components/Button"; 
import { useLogin } from "../hooks/useLogin";

import { motion } from "framer-motion";
import { containerVariants } from "../utils/containerVariants";

const Login = () => {
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const values = Object.fromEntries(new FormData(e.target)); 

    try {
      await login(values.identifier, values.password)
    } catch(err) {
      console.log(err); 
    }
  }

  return (
    <motion.div className="login main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >      
      <div className="login__container container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          
          <label htmlFor="identifier">Username or email:</label>
          <input required type="text" name="identifier" id="identifier" />        

          <label htmlFor="password">Password:</label>
          <input required type="password" name="password" id="password" />
          
          <Button className="login__submit" disabled={isLoading}>Log in</Button>

          {
            error && (<p className="error">{`${error.type === "CRITICAL" ? "❌" : "⚠️"} ${error.error}`}</p>)
          }
        </form>
      </div>
    </motion.div>
  )
}

export default Login; 