import ServiceCard from "../ui/ServiceCard"
import "./ServicesOverview.css"

const ServicesOverview = () => {
  const services = [
    {
      title: "Valuation",
      image: "/images/services-overview.png",
      description: "Professional property valuation for various purposes including VISA, transactions, and mortgages.",
      link: "/services",
    },
    {
      title: "Consultation",
      image: "/images/services-overview.png",
      description: "Expert consultation on property matters, market analysis, and investment decisions.",
      link: "/services",
    },
    {
      title: "B.O.Q & Estimation",
      image: "/images/services-overview.png",
      description: "Bill of Quantities and cost estimation services for construction and development projects.",
      link: "/services",
    },
  ]

  return (
    <section className="services-overview">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
