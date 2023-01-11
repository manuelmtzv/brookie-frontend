
const Feature = ({ img, title, description, alt, classname, ...props }) => {
  return (
    <div className={`feature ${classname}`}>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Feature;  