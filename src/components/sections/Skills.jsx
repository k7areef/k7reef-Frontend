import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { GET_SERVICES, GET_SKILLS } from "@utils/api";
import { useQueries } from "@tanstack/react-query";
import SkillCard from "@components/skills/SkillCard";
import SkillCardSkeleton from "@components/skills/SkillCardSkeleton";

function Skills() {

    const results = useQueries({
        queries: [
            {
                queryKey: [`skills`],
                queryFn: async () => GET_SKILLS({
                    params: '?populate[image]=true'
                }),
                enabled: true,
                refetchOnWindowFocus: false
            },
            {
                queryKey: [`services`],
                queryFn: async () => GET_SERVICES({
                    params: '?populate[image]=true'
                }),
                enabled: false,
                refetchOnWindowFocus: false
            }
        ]
    })
    const skills = results[0].data;
    const services = results[1].data;
    const skillsLoading = results[0].isLoading;
    const servicesLoading = results[1].isLoading;
    console.log(skillsLoading ? "Skills Loading..." : skills ? skills.data : null);
    console.log(servicesLoading ? "Services Loading..." : services ? services.data : null);

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
                            skillsLoading ? (
                                Array.from({ length: 10 }).map((_, index) => (<div
                                    className="card-wrapper"
                                    key={index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <SkillCardSkeleton key={index} />
                                </div>))
                            ) : (!skills || !skills?.data) ? (
                                <p>No skills found!</p>
                            ) : (
                                skills?.data.map((skill, index) => ((<div
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