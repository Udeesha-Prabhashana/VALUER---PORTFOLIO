import { Link } from "react-router-dom"
import "./ServiceCard.css"

const ServiceCard = ({ title, image, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <Link to={link} className="service-link">
          Learn More →
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
