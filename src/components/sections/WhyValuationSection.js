import "./WhyValuationSection.css"

const WhyValuationSection = () => {
  return (
    <section className="why-valuation-section">
      <div className="container">
        <div className="section-content">
          <div className="left-content">
            <h2>Why is a valuation needed?</h2>
            <div className="flowchart">
              <img
                src="https://via.placeholder.com/400x300/f0f0f0/666666?text=Valuation+Flowchart"
                alt="Valuation flowchart"
              />
            </div>
            <div className="explanation">
              <p>
                Property valuation helps an organization, or an individual know the worth of the property. The fair
                price of a land, factory, or a building can be estimated through the valuation of a property. Property
                valuation helps an organization, or an individual know the worth of the property. The fair price of a
                land, factory, or a building can be estimated through the valuation of a property.
              </p>
            </div>
          </div>

          <div className="right-content">
            <h2>There are many possible reasons for valuing property,</h2>
            <h3>Such as;</h3>
            <ul className="reasons-list">
              <li>For buying or selling of property;</li>
              <li>For let or take a lease or agree a rent review;</li>
              <li>For assess tax or business rates payable;</li>
              <li>For develop or redevelop;</li>
              <li>For obtain a compensation payment;</li>
              <li>For mortgage a property;</li>
              <li>For Accounting Purpose;</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyValuationSection
