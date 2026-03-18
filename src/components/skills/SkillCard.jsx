/**
 * @typedef {Object} SkillCardProps
 * @prop {{name: string, image_url: string, status: string, level: number}} skill
 */


/**
 * @param {SkillCardProps} props
*/

function SkillCard({ skill = {} }) {

    const normalStatus = String(skill.status || "").toLowerCase();

    return (
        <div className={`skill-card p-5 rounded-lg flex flex-col gap-3 items-center bg-grey transition-colors duration-300 ease-out border-2 ${normalStatus === "archived" ? "border-red-300 opacity-60" : normalStatus === "inprogress" ? "border-yellow-300 opacity-70" : normalStatus !== "active" ? "border-primary opacity-60" : "border-transparent sm:hover:border-primary"} relative`}>
            {/* Incoming */}
            {
                normalStatus !== "active" && <div className={`badge absolute z-1 py-1 px-2 text-xs left-2 top-2 ${normalStatus === "archived" ? "bg-red-300 text-dark" : normalStatus === "inprogress" ? "bg-yellow-300 text-dark" : "bg-primary"} font-medium rounded-sm italic`}>
                    {skill.status}
                </div>
            }
            {/* Image */}
            <div className={`skill-image w-16 h-16 flex items-center justify-center`}>
                <img
                    src={skill.image_url}
                    alt={skill.name}
                    loading="lazy"
                    aria-label={skill.name}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Name */}
            <h3 aria-label={skill.name} className={`skill-name font-semibold capitalize ${normalStatus === "archived" ? "line-through text-red-300" : ""}`}>{skill.name}</h3>
        </div>
    )
}

export default SkillCard;