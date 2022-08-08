import { cakes } from "../../data/cakes";


export const getCakeByCategory = (category) => {
    const validCategory = ['chocolate', 'buttercream'];
    if (!validCategory.includes(category)) {
        throw new Error(`${category} is not a valid publisher`);
    }

    return cakes.filter(cake => cake.category === category);
}
