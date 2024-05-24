import HeroSection from "./Hero/HeroSection";
import Nav from "./Nav/Nav";
import Services from '../components/Services/Services'
import Experience from "./WorkExperience/Experience";


export default function Header() {
  return (
    <div>
        <Nav />
        <HeroSection />
        <Services   />
        <Experience />
    </div>
  )
}
