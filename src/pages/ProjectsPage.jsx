import ProjectsGrid from "@components/projects/ProjectsGrid";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@utils/supabaseClient";
import React from "react";

function ProjectsPage() {

    React.useEffect(() => {
        const scrollToTop = () => window.scroll({ top: 0, behavior: "instant" });
        scrollToTop();
    }, []);

    const limit = 8;

    const { data: projects, isLoading } = useQuery({
        queryKey: [`all_projects`],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('projects')
                .select(`*,techs: project-skills (skills (name,image_url))`)
                .limit(limit)
            if (error) throw error;
            return data;
        },
        enabled: true,
        refetchOnWindowFocus: false
    });

    return (
        <div className="projects-page min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-67px)] pt-18">
            <main>
                <div className="container py-5 md:py-10">
                    <ProjectsGrid
                        isLoading={isLoading}
                        limit={limit}
                        projects={projects}
                    />
                </div>
            </main>
        </div>
    )
}

export default ProjectsPage;