import ServiceCard from "../ui/ServiceCard"
import "./ServicesOverview.css"

const ServicesOverview = () => {
  const services = [
  {
    title: "Valuation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrD3QmI6tYhzkxbT0PAiOIVyVlSXTY9P7RTvD_6Um5fKOGNLJtEb0JjBR1q6bdMyL82I&usqp=CAU",
    description: "Professional property valuation for various purposes including VISA, transactions, and mortgages.",
    link: "/services",
  },
  {
    title: "Consultation",
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQH47xNj_KLMeQ/company-logo_200_200/company-logo_200_200/0/1673516472220/valuation_consulting_logo?e=2147483647&v=beta&t=n_FT9oze6UqRtrCI_bDIFSuAbEj57OHlfne0v2t2lFI",
    description: "Expert consultation on property matters, market analysis, and investment decisions.",
    link: "/services",
  },
  {
    title: "B.O.Q & Estimation",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFC6EgAYoq97g/article-cover_image-shrink_600_2000/B56ZXHgF.TGQAQ-/0/1742808837328?e=2147483647&v=beta&t=BHp3dysTS6WgkF8NfzID0X7DVVTMstjlLBLHjdUX0_4",
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
