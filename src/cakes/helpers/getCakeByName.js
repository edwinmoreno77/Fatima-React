import { cakes } from "../../data/cakes";

export const getCakeByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];

    return cakes.filter(
        cake => cake.name.toLocaleLowerCase().includes(name)
    );
}