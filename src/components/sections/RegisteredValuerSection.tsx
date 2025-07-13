import type React from "react"
import "./RegisteredValuerSection.css"

const RegisteredValuerSection: React.FC = () => {
  return (
    <section className="registered-valuer-section">
      <div className="container">
        <div className="section-content">
          <div className="valuer-badge">
            <img src="/images/registered-valuer.png" alt="Registered Valuers Badge" />
          </div>

          <div className="valuer-content">
            <h2>Why use a Registered Valuer?</h2>

            <div className="valuer-explanation">
              <p>
                A valuer is a professional trained to determine such values, execute feasibility studies and provide
                expert advice on property-related matters. As such, an independent valuer can provide impartial and
                motivated reports on the value of real or limited rights to land.
              </p>

              <p>
                The valuer does not invent value but interprets market forces which determine the value. Hence, the
                valuer requires a combination of a number of professional qualities and capabilities and needs a
                thorough knowledge and understanding of the interacting influences which create, maintain or diminish
                the value of property or rights thereto.
              </p>

              <p>
                In order to pursue this property valuer's profession legally in Sri Lanka, a valuer must be registered
                with the Institute of Valuers of Sri Lanka established by Law No. 33 of 1975.
              </p>
            </div>
          </div>
        </div>

        <div className="related-links">
          <h3>Related Links</h3>
          <ul>
            <li>
              <a href="#">1. Government Valuation Department</a>
            </li>
            <li>
              <a href="#">2. University College Of Estate Management</a>
            </li>
            <li>
              <a href="#">3. Institute of Valuers of Sri Lanka</a>
            </li>
          </ul>

          <div className="quote-button">
            <button className="get-quote-btn">Get Quotation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisteredValuerSection
