import { Link } from "react-router-dom";
import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@components/projects/ProjectCard";
import ProjectCardSkeleton from "@components/projects/ProjectCardSkeleton";
import { GET_PROJECTS } from "@utils/apis";
import ProjectsGrid from "@components/projects/ProjectsGrid";

function Projects() {

    const limit = 6;

    const { data: projects, isLoading } = useQuery({
        queryKey: [`projects`],
        queryFn: () => GET_PROJECTS([1, 2, 4, 5, 6, 8]).then(res => res.data),
        enabled: true,
        refetchOnWindowFocus: false
    });

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
                    <ProjectsGrid
                        isLoading={isLoading}
                        limit={limit}
                        projects={projects}
                    />
                </div>
            </section>
        </Element>
    )
}

export default Projects;