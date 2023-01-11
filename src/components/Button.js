
const Button = ({ children, onClick, className="", disabled, ...props }) => {

  return (
    <button className={`button ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
} 

export default Button; 