import HeroSection from "../components/sections/HeroSection"
import ServicesOverview from "../components/sections/ServicesOverview"
import AboutSection from "../components/sections/AboutSection"
import WhyValuationSection from "../components/sections/WhyValuationSection"
import RegisteredValuerSection from "../components/sections/RegisteredValuerSection"

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <WhyValuationSection />
      <RegisteredValuerSection />
    </div>
  )
}

export default Home
