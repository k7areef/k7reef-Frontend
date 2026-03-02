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
        <div className="skill-card p-5 rounded-lg flex flex-col gap-3 items-center bg-grey transition-colors duration-300 ease-out border-2 border-transparent sm:hover:border-primary">
            <div className="skill-image w-16 h-16 flex items-center justify-center">
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
            <h3 aria-label={skill.name} className="skill-name font-semibold capitalize">{skill.name}</h3>
        </div>
    )
}

export default SkillCard;