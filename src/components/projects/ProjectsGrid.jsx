/**
 * @typedef {Object} ProjectsGridProps
 * @prop {boolean} [isLoading]
 * @prop {number} [limit=6]
 * @prop {object[]} [projects]
 */

import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

/**
 * @param {ProjectsGridProps} props
 */
function ProjectsGrid({ isLoading, limit, projects }) {
    return (
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                isLoading ? (
                    Array.from({ length: limit }).map((_, index) => (<ProjectCardSkeleton key={index} />))
                ) : (!projects || projects?.data?.length === 0) ? (
                    <p>No projects found!</p>
                ) : (
                    projects?.slice(0, limit).map((project, index) => (<div
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
    )
}

export default ProjectsGrid;