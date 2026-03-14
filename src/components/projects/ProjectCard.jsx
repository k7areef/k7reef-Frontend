import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} ProjectCardProps
 * @prop {Object} project
 */


/**
 * @param {ProjectCardProps} props
 */

function ProjectCard({ project = {} }) {
    const to = `/projects/${project.documentId}/${project.slug}`
    return (
        <div className="project-card overflow-hidden rounded-lg bg-grey" >
            <Link
                to={to}
                aria-label={project.title}
                className="project-thumbnail aspect-video block group overflow-hidden relative before:absolute before:w-1/2 before:left-0 before:top-0 before:pointer-events-none before:bg-linear-to-r before:from-dark/80 before:to-transparent before:h-full before:z-1 before:opacity-0 before:-translate-x-4 before:transition before:duration-700 sm:hover:before:opacity-100 sm:hover:before:translate-x-0 after:absolute after:w-1/2 after:right-0 after:top-0 after:pointer-events-none after:bg-linear-to-l after:from-dark/80 after:to-transparent after:h-full after:z-1 after:opacity-0 after:translate-x-4 after:transition after:duration-700 sm:hover:after:opacity-100 sm:hover:after:translate-x-0"
            >
                <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    aria-label={project.title}
                    className="w-full h-full object-cover sm:group-hover:scale-105 sm:group-hover:rotate-1 transition-transform duration-700 ease-out will-change-transform"
                />
            </Link>
            <div className="project-info p-5">
                {/* Text Info */}
                <div className="text-wrapper mb-3">
                    <Link
                        to={to}
                        title={project.title}
                        className="w-fit block mb-1"
                        aria-label={project.title}
                    >
                        <h3 className="project-title font-semibold sm:hover:underline line-clamp-1">{project.title}</h3>
                    </Link>
                    <p className="project-description line-clamp-2 text-grey-muted font-medium">{project.description}</p>
                </div>
                {/* Card Foot */}
                <div className="card-foot flex items-center justify-between">
                    {/* Techs */}
                    <div className="project-techs flex items-center gap-2">
                        {
                            project.techs.map((tech, index) => (<img
                                key={tech.skills.id || index}
                                src={tech.skills.image_url}
                                alt={tech.skills.name}
                                width={24}
                                height={24}
                                title={tech.skills.name}
                                aria-label={tech.skills.name}
                            />))
                        }
                    </div>
                    {/* Actions */}
                    <div className="projects-actions flex items-center gap-2">

                        <a
                            href={project.github_repo}
                            target="_blank"
                            title="Github Repo"
                            aria-label="Github Repo"
                            className="flex items-center justify-center w-12 h-12 rounded-md text-2xl transition-colors duration-300 will-change-auto bg-skeleton"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span className="sr-only">Github</span>
                        </a>
                        <a
                            href={project.demo_url}
                            target="_blank"
                            title="Live Demo"
                            aria-label="Live Demo"
                            className="flex items-center justify-center w-12 h-12 rounded-md text-2xl transition-colors duration-300 will-change-auto bg-primary"
                        >
                            <FontAwesomeIcon icon={faGlobe} />
                            <span className="sr-only">Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;