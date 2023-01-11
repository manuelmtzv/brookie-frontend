import { Link } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import { useLogout } from "../hooks/useLogout"; 

const logo = require("../img/brownies.png")

const Header = () => {
  const { user } = useUserContext();
  const { logout } = useLogout(); 

  const handleLogout = () => {
    logout(); 
  }

  return (
    <div className="header">
      <header className="header__container container">
        <div className="header__logo">
          <h1>Brookie</h1>
          <img src={logo} alt="Brookie icon" />
        </div>

        {
          user ?
          (<nav className="header__nav">                        
            <Link className="header__link" to={"/home"}>Home</Link>
            <Link className="header__link" to={"/create-review"}>Create review</Link>
            <Link className="header__link" to={"/your-reviews"}>Your reviews</Link>
            <Link className="header__link" to={"/"} onClick={handleLogout}>Logout</Link>
          </nav>) :
          (<nav className="header__nav">
            <Link className="header__link" to={"/"}>Landing</Link>
            <Link className="header__link" to={"/login"}>Login</Link>
            <Link className="header__link" to={"/signup"}>Signup</Link>
          </nav>) 
        }
      </header>
    </div>
  )
}

export default Header;

