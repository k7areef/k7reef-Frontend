const fetchData = async (endpoint) => {
    try {
        const data = await fetch(`${import.meta.env.VITE_API}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${import.meta.env.VITE_READ_TOKEN}`
            }
        });
        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export const GET_PROJECTS = async ({ params }) => {
    try {
        return await fetchData(`/projects${params}`);
    } catch (error) {
        console.log(error)
    }
}
export const GET_SKILLS = async ({ params }) => {
    try {
        return await fetchData(`/skills${params}`);
    } catch (error) {
        console.log(error)
    }
}
export const GET_SERVICES = async ({ params }) => {
    try {
        return await fetchData(`/services${params}`);
    } catch (error) {
        console.log(error)
    }
}