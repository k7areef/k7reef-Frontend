function ServiceCardSkeleton() {
    return (
        <div
            aria-label="Service Card Skeleton"
            className="service-card-skeleton bg-grey rounded-lg p-5"
        >
            <div className="header flex items-center gap-3 mb-3">
                <div className="bg-skeleton animate-pulse rounded-full w-16 h-16"></div>
                <div className="bg-skeleton animate-pulse rounded-md h-7 w-32"></div>
            </div>
            <div className="desc h-20 flex flex-col gap-2">
                <div className="bg-skeleton animate-pulse rounded-md h-full"></div>
                <div className="bg-skeleton animate-pulse rounded-md h-full w-3/4"></div>
                <div className="bg-skeleton animate-pulse rounded-md h-full w-1/2"></div>
            </div>
        </div>
    )
}

export default ServiceCardSkeleton;