function SkillCardSkeleton() {
    return (
        <div className="skill-card-skeleton bg-grey rounded-lg p-5 flex flex-col gap-3 items-center border border-transparent">
            <div className="skill-image w-16 h-16 bg-skeleton rounded-full animate-pulse"></div>
            <div className="skill-title bg-skeleton rounded-md h-6 w-20 animate-pulse"></div>
        </div>
    )
}

export default SkillCardSkeleton;