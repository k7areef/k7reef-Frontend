import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import HeroSection from "@components/sections/HeroSection";
import Projects from "@components/sections/Projects";
import Services from "@components/sections/Services";
import Skills from "@components/sections/Skills";

function HomePage() {
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <Projects />
                <Services />
                {/* <About /> */}
                <Skills />
                <Contact />
            </main>
        </div>
    )
}

export default HomePage;