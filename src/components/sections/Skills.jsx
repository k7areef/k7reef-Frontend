import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { useQuery } from "@tanstack/react-query";
import SkillCard from "@components/skills/SkillCard";
import SkillCardSkeleton from "@components/skills/SkillCardSkeleton";
import { GET_SKILLS } from "@utils/apis";

function Skills() {

    const { data: skills, isLoading } = useQuery({
        queryKey: [`skills`],
        queryFn: () => GET_SKILLS().then(res => res.data),
        enabled: true,
        refetchOnWindowFocus: false
    })

    return (
        <Element>
            <section className="skills-section py-5 md:py-10" id="skills">
                <div className="container">
                    <SectionHeader
                        title="Skills"
                        description="A curated list of my technical proficiencies and the tools I use to bring digital solutions to life."
                    />
                    <div className="skills-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {
                            isLoading ? (
                                Array.from({ length: 20 }).map((_, index) => (<div
                                    className="card-wrapper"
                                    key={index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <SkillCardSkeleton key={index} />
                                </div>))
                            ) : (!skills || skills?.data?.length === 0) ? (
                                <p>No skills found!</p>
                            ) : (
                                skills?.map((skill, index) => ((<div
                                    className="card-wrapper"
                                    key={skill.id || index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <SkillCard skill={skill} />
                                </div>)))
                            )
                        }
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Skills;