import { cakes } from "../../data/cakes";


export const getProductByName = (productName) => {
    const validName = ['cake', 'cupcake', 'cookie'];
    if (!validName.includes(productName)) {
        throw new Error(`${productName} is not a valid product name`);
    }

    return cakes.filter(cake => cake.productName === productName);
}