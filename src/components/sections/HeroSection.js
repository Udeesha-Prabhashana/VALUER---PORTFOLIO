import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
         <img
                src="https://alshirawirealestate.com/wp-content/uploads/2023/07/Properties-Valuation.jpg"
                alt="Tropical landscape"
              />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Professional Property Valuation Services</h1>
            <p>Expert property valuation for all your needs - VISA purposes, transactions, mortgages, and more.</p>
            <button className="cta-button">Get Quote</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
