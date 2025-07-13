import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Detect if we're on GitHub Pages
const isGitHubPages = window.location.host.includes('github.io');
const basename = isGitHubPages ? '/VALUER-PORTFOLIO' : '/';

function App() {
  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}