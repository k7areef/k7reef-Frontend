/**
 * @typedef {Object} SkillCardProps
 * @prop {Object} skill
 */

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @param {SkillCardProps} props
*/

function SkillCard({ skill = {} }) {
    return (
        <div className={`skill-card p-5 rounded-lg flex flex-col gap-3 items-center bg-grey transition-colors duration-300 ease-out border-2 ${skill.incoming ? "border-primary" : "border-transparent sm:hover:border-primary"} relative`}>
            {/* Incoming */}
            {
                skill.incoming && <div className="incoming absolute py-1 px-2 text-xs left-2 top-2 bg-primary font-medium rounded-sm italic">
                    Incomin
                </div>
            }
            {/* Image */}
            <div className={`skill-image w-16 h-16 flex items-center justify-center${skill.incoming ? " " + "opacity-50" : ""}`}>
                {
                    String(skill.name).toLowerCase() === "github" ? (
                        <FontAwesomeIcon icon={faGithub} size="4x" />
                    ) : (
                        <img
                            src={skill.image.url}
                            alt={skill.name}
                            loading="lazy"
                            aria-label={skill.name}
                            className="w-full h-full object-cover"
                        />
                    )
                }
            </div>
            {/* Name */}
            <h3 aria-label={skill.name} className={`skill-name font-semibold capitalize${skill.incoming ? " " + "opacity-50" : ""}`}>{skill.name}</h3>
        </div>
    )
}

export default SkillCard;