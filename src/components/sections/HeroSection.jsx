import React from 'react';
import { Element, Link } from 'react-scroll';
import backgroundImage from '@assets/hero-section-bg.webp';
import { useQuery } from '@tanstack/react-query';
import { GET_APP_CONFIG } from '@utils/apis';
import ProjectsIcon from "@assets/icons/diagram-project.svg";
import SpinnerIcon from "@assets/icons/spinner-primary.svg";
import DownloadIcon from "@assets/icons/file-arrow-down.svg";
import AnglesDownIcon from "@assets/icons/angles-down.svg";

function HeroSection() {

    const { data: appConfigData, isLoading } = useQuery({
        queryKey: ['app_config'],
        queryFn: () => GET_APP_CONFIG().then(res => res.data),
        enabled: true,
        refetchOnWindowFocus: false
    });

    const socialProfiles = React.useMemo(() => {

        if (isLoading || !appConfigData) return [];

        const profiles = appConfigData?.social_profiles || {};
        const array = [];

        for (const key in profiles) {
            if (!Object.hasOwn(profiles, key)) continue;

            const element = profiles[key];
            array.push(element);
        }
        return array;
    }, [isLoading, appConfigData]);

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
                                        <img src={ProjectsIcon} alt="Projects Icon" />
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
                                        role='button'
                                        target="_blank"
                                        title="Download CV"
                                        aria-label="Download CV"
                                        rel="noopener noreferrer"
                                        aria-disabled={isLoading}
                                        href={appConfigData?.cv_url}
                                        className={`bg-white text-primary flex items-center justify-center gap-2 py-2 px-4 rounded-md cursor-pointer`}
                                    >
                                        {
                                            isLoading ? (
                                                <img src={SpinnerIcon} alt="Spinner Icon" className='animate-spin' />
                                            ) : (
                                                <img src={DownloadIcon} alt="Download Icon" />
                                            )
                                        }
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
                                            title={`${profile.name} Profile`}
                                            aria-label={`${profile.name} Profile`}
                                            rel="noopener noreferrer"
                                            className='profile-link'
                                        >
                                            <img src={profile.icon_url} alt={profile.name} width={35} />
                                            <span className='sr-only'>{profile.name}</span>
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
                    <img src={AnglesDownIcon} alt="Angles Down Icon" className='animate-bounce' />
                </Link>
            </section>
        </Element>
    )
}

export default HeroSection;