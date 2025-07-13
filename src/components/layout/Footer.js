import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>📧 Real Estate Valuer</h3>
              <p>Professional Property Valuation Services</p>
            </div>

            <div className="footer-contact">
              <div className="contact-item">
                <span>📞</span>
                <span>+94 XX XXX XXXX</span>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <span>info@incorporatedvaluer.com</span>
              </div>
              <div className="contact-item">
                <span>💬</span>
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Incorporated Valuer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
