
import LoaderIcon from "react-loader-icon";

const Button = ({ children, onClick, className="", disabled, loading = false, ...props }) => {

  return (
    <button className={`button button--loader ${className}`} disabled={disabled} onClick={onClick}>
      {children}

      {
        loading && (<LoaderIcon type={"spin"} size={20} className="spin-loader" />)
      }
    </button>
  )
} 

export default Button; 