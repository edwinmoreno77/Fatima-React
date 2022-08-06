import { cakes } from "../../data/cakes";



export const getCakeById = (id) => {

    return cakes.find(cake => cake.id === id);
}