import type React from "react"
import { Link } from "react-router-dom"
import "./ServiceCard.css"

interface ServiceCardProps {
  title: string
  image: string
  description: string
  link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, description, link }) => {
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
