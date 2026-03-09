import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown, faDiagramProject, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, Link } from 'react-scroll';
import backgroundImage from '@assets/hero-section-bg.webp';

const socialProfiles = [
    {
        href: "https://www.facebook.com/k7areef",
        icon: faFacebook,
        label: "Facebook"
    },
    {
        href: "https://www.github.com/k7areef",
        icon: faGithub,
        label: "Github"
    },
    {
        href: "https://www.linkedin.com/in/mustafa-sayed-7b00203b4/",
        icon: faLinkedin,
        label: "Linkedin"
    },
]

function HeroSection() {
    return (
        <Element name="home">
            <section className="hero-section h-screen flex items-center relative bg-black overflow-hidden" id="home">
                {/* Background Image */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="background-image absolute left-0 top-0 w-full h-full pointer-events-none"
                >
                    <img
                        src={backgroundImage}
                        alt='Background Image'
                        className='w-full h-full object-cover'
                    />
                </div>
                {/* Main Content */}
                <div className="container relative z-1">
                    <div
                        className="content-grid grid md:grid-cols-2 gap-5"
                    >
                        <div className="content-wrapper max-md:order-1">
                            {/* Title */}
                            <h1
                                className='font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-3'
                                // AOS:
                                data-aos="fade-up"
                            ><span className="text-primary">Full Stack</span> Developer, Web Developer</h1>
                            {/* Desc */}
                            <p
                                className='text-gray-500 font-medium'
                                // AOS:
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                I’m a Frontend Developer specializing in React and Tailwind CSS, focused on building scalable,
                                user-centric web applications. I’ve developed 10+ projects, integrating REST APIs and prioritizing
                                clean architecture with reusable components.
                            </p>
                            {/* Actions */}
                            <div className="actions flex sm:items-center gap-3 mt-5 font-semibold max-sm:flex-col">
                                <div
                                    className="link-wrapper"
                                    // AOS:
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                >
                                    <Link
                                        to={'projects'}
                                        smooth={true}
                                        duration={300}
                                        offset={-64}
                                        className={`bg-primary flex items-center justify-center gap-2 py-2 px-4 rounded-md cursor-pointer`}
                                    >
                                        <FontAwesomeIcon icon={faDiagramProject} />
                                        <span>My Projects</span>
                                    </Link>
                                </div>
                                <div
                                    className="link-wrapper"
                                    // AOS:
                                    data-aos="fade-left"
                                    data-aos-delay="150"
                                >
                                    <a
                                        target="_blank"
                                        title="Download CV"
                                        aria-label="Download CV"
                                        rel="noopener noreferrer"
                                        href='https://drive.google.com/file/d/14MmsPLv-v3xjvcx4Ez1iESzZZFDhSi1d/view?usp=sharing'
                                        className={`bg-white text-primary flex items-center justify-center gap-2 py-2 px-4 rounded-md cursor-pointer`}
                                    >
                                        <FontAwesomeIcon icon={faFileDownload} />
                                        <span>Download CV</span>
                                    </a>
                                </div>
                            </div>
                            {/* Social Profiles */}
                            <div className="socila-profiles flex items-center gap-2 mt-5">
                                {
                                    socialProfiles.map((profile, index) => (<div
                                        key={index}
                                        className='link-container'
                                        // AOS:
                                        data-aos="zoom-in"
                                        data-aos-delay={(index * 50) + 500}
                                    >
                                        <a
                                            href={profile.href}
                                            target="_blank"
                                            title={`${profile.label} Profile`}
                                            aria-label={`${profile.label} Profile`}
                                            rel="noopener noreferrer"
                                            className='profile-link text-2xl transition duration-300 ease-out sm:hover:text-primary'
                                        >
                                            <FontAwesomeIcon icon={profile.icon} />
                                            <span className='sr-only'>{profile.label}</span>
                                        </a>
                                    </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Explore Button */}
                <Link
                    to={'projects'}
                    smooth={true}
                    duration={300}
                    offset={-64}
                    className='cursor-pointer text-xl absolute z-2 left-1/2 -translate-x-1/2 bottom-15 flex items-center justify-center w-10 h-18 rounded-full border-2 border-white transiiton duration-300 ease-out will-change-auto sm:hover:border-primary sm:hover:text-primary'
                >
                    <FontAwesomeIcon icon={faAnglesDown} className='animate-bounce' />
                </Link>
            </section>
        </Element>
    )
}

export default HeroSection;