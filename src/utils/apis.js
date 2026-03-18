import { supabase } from "./supabaseClient";

export const GET_PROJECTS = async (ids) => {
    const response = await supabase
        .from('projects')
        .select(`*,techs: project-skills (skills (name,image_url))`)
        .in('id', ids)
    if (response.error) {
        throw new Error(response.error);
    }
    return response;
};
export const GET_SKILLS = async () => {
    const response = await supabase
        .from('skills')
        .select("*")
    if (response.error) {
        throw new Error(response.error);
    }
    return response;
};
export const GET_SERVICES = async () => {
    const response = await supabase
        .from('services')
        .select("*")
    if (response.error) {
        throw new Error(response.error);
    }
    return response;
};