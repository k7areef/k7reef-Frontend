import { Link } from "react-router-dom";
import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { GET_PROJECTS } from "@utils/api";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@components/projects/ProjectCard";
import ProjectCardSkeleton from "@components/projects/ProjectCardSkeleton";

function Projects() {

    const { data: projects, isLoading } = useQuery({
        queryKey: [`projects`],
        queryFn: async () => GET_PROJECTS({
            params: '?populate[thumbnail]=true&populate[screens][count]=true&populate[techs][populate][image]=true&limit=6'
        }),
        enabled: true,
        refetchOnWindowFocus: false
    })
    console.log(isLoading ? "Projects Loading..." : projects ? projects.data : null);

    return (
        <Element name="projects">
            <section className="projects-section py-5 md:py-10" id="projects">
                <div className="container">
                    <SectionHeader
                        title="Projects"
                        description="A collection of my recent work, featuring web applications and digital products developed with a focus on quality and user experience."
                    >
                        <Link
                            to={'/projects'}
                            className="block w-fit py-2 px-4 rounded-md bg-primary"
                        >View All</Link>
                    </SectionHeader>
                    <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            isLoading ? (
                                Array.from({ length: 3 }).map((_, index) => (<div
                                    className="card-wrapper"
                                    key={index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <ProjectCardSkeleton key={index} />
                                </div>))
                            ) : (!projects || !projects?.data) ? (
                                <p>No projects found!</p>
                            ) : (
                                projects?.data?.slice(0, 6).map((project, index) => (<div
                                    className="card-wrapper"
                                    key={project.id || index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <ProjectCard project={project} />
                                </div>))
                            )
                        }
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Projects;