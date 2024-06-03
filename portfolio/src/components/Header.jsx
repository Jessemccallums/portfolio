import HeroSection from "./Hero/HeroSection";
import Nav from "./Nav/Nav";
import Services from '../components/Services/Services'
import Experience from "./WorkExperience/Experience";
import HireMe from "./HireMe/HireMe"
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Highlights from "./highlights/Highlights";


export default function Header() {
  return (
    <div>
        <Nav />
        <HeroSection />
        <Services   />
        <Experience />
        <HireMe />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Highlights />
    </div>
  )
}
