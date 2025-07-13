import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";

// Safe basename detection (works in all environments)
const getBasename = () => {
  try {
    return window.location.host.includes('github.io') ? '/VALUER-PORTFOLIO' : '/';
  } catch {
    return '/'; // Fallback for SSR or test environments
  }
};

function App() {
  return (
    <Router basename={getBasename()}>
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

export default App;