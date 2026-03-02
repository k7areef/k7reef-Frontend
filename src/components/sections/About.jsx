import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';

function About() {
    return (
        <Element>
            <section className="about-section py-5 md:py-10" id="about">
                <div className="container">
                    <SectionHeader
                        title="About"
                        description="A dedicated developer with a passion for creating impactful digital experiences and solving complex problems through clean code."
                    />
                </div>
            </section>
        </Element>
    )
}

export default About;