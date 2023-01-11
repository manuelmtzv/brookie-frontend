
import { useUserContext } from "../hooks/useUserContext"

const Footer = () => {
  const {user} = useUserContext();

  return (
    <div className="footer">
      <div className="footer__container container">
        {
          <p>{user ? user.username : ""}</p>
        }

        <p>Copyright© 2022 - Brookie</p>
      </div>
    </div>
  )
}

export default Footer; 