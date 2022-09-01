import { fatimaServerApi } from "../../api/fatimaServerApi";
import { setProducts, startLoadingProducts } from "./cakeSlice";


export const getProducts = (limit = 100) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingProducts());

        const { data } = await fatimaServerApi.get(`/api/products?limit=${limit}&from=0`);

        dispatch(setProducts({ cakes: data.products, limit: limit }));

    }
}


