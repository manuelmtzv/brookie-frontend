import Button from "../components/Button";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/containerVariants";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {
  const { auth, error, isLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.target));

    try {
      await auth(values.email, values.username, values.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="signup main_content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="signup__container container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Signup</h2>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <Button
            children={"Signup"}
            className={"signup__submit"}
            disabled={isLoading}
            loading={isLoading}
          />

          {error && (
            <p className="error">{`${error.type === "CRITICAL" ? "❌" : "⚠️"} ${
              error.error
            }`}</p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
