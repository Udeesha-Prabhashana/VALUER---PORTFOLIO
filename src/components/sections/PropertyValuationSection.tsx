import type React from "react"
import "./PropertyValuationSection.css"

const PropertyValuationSection: React.FC = () => {
  return (
    <section className="property-valuation-section">
      <div className="container">
        <div className="section-header">
          <h1>Property Valuation</h1>
        </div>

        <div className="valuation-content">
          <div className="valuation-image">
            <img src="/images/property-valuation.png" alt="Property valuation workspace" />
          </div>

          <div className="valuation-details">
            <div className="valuation-type">
              <h3>Valuation for VISA Purpose</h3>
              <p>
                Valuation of property for Embassy (visa purpose valuation). Valuation for migration and dual citizenship
                applying
              </p>
            </div>

            <div className="valuation-type">
              <h3>Valuation for Transaction (Selling / buying)</h3>
              <p>
                Valuation of property is important when buying or selling of property. Even if an individual wishes to
                rent his property, valuation of property becomes important. The rent of a property is usually 6-10% of
                the estimated price of property.
              </p>
            </div>

            <div className="valuation-type">
              <h3>Valuation for Mortgage Purpose</h3>
              <p>
                The valuation of property is important when a buyer wishes to seek loan against the security of property
                valuation is also done in case a loan for construction of a building is required.
              </p>
            </div>

            <div className="valuation-type">
              <h3>Valuation for Tax Purpose (Vat, Capital Gain, Wealth)</h3>
              <p>
                Property valuation for tax assessment purposes including VAT calculations, capital gains tax, and wealth
                tax determinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyValuationSection
