
import Navbar from "./home/components/Navbar";
import HeroSection from "./home/components/hero-section";
import Projects from "./home/components/project";
import Skills from "./home/components/skills";
import Footer from "./home/components/footer"
import AboutMe from "./home/components/about-me";


export default function Home() {
  return (
    <div>
      <div className="min-h-[450vh] bg-black overflow-hidden">
        <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative">
          <div className="max-w-7xl mx-auto p-6 ">
            <Navbar className={""} />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
        </div>
        <div className="max-w-7xl mx-auto p-6  mt-20">
          <Skills />
        </div>
       
        <div className="max-w-7xl mx-auto p-6  mt-20">
          <Projects />
          
        </div>
        <div className="max-w-7xl mx-auto p-6  mt-20">
          <AboutMe />
        </div>
        
        <div className="mt-20 mb-0">
          <Footer />
        </div>
        
      </div>
    </div>
  );
}
