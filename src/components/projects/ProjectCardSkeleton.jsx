function ProjectCardSkeleton() {
    return (
        <div className="project-card-skeleon bg-grey rounded-lg overflow-hidden">
            <div className="project-thumbnail aspect-video animate-pulse bg-skeleton"></div>
            <div className="project-info p-5">
                <div className="project-title bg-skeleton h-6 w-20 rounded-md animate-pulse mb-1"></div>
                <div className="project-description mb-3 flex flex-col gap-1.5 h-10.5 md:h-12 lg:h-13.5">
                    <div className="animate-pulse bg-skeleton h-full rounded-md"></div>
                    <div className="animate-pulse bg-skeleton h-full rounded-md w-3/4"></div>
                </div>
                <div className="card-foot flex items-center justify-between">
                    <div className="project-techs flex items-center gap-2">
                        {
                            Array.from({ length: 3 }).map((_, index) => (<div
                                key={index}
                                className="w-6 h-6 rounded-full bg-skeleton animate-pulse"
                                title="Project Tech"
                                aria-label="Project Tech"
                            ></div>))
                        }
                    </div>
                    <div className="project-actions flex items-center gap-2">
                        {
                            Array.from({ length: 2 }).map((_, index) => (<div
                                key={index}
                                className="w-12 h-12 rounded-md bg-skeleton animate-pulse"
                                title="Project Tech"
                                aria-label="Project Tech"
                            ></div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSkeleton;