import { fatimaServerApi } from "../../api/fatimaServerApi";
import { setProducts, startLoadingProducts } from "./cakeSlice";
import Swal from 'sweetalert2';



export const getProducts = (limit = 100) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingProducts());

        const { data } = await fatimaServerApi.get(`/api/products?limit=${limit}&from=0`);

        dispatch(setProducts({ cakes: data.products, limit: limit }));
    }
}

export const createProduct = async (name, description, price, category) => {

    try {
        const resp = await fatimaServerApi.post('/api/products', { name, description, price, category });

        if (resp.statusText === 'Created') {
            Swal.fire('Cargado con Exito', 'success', 'success');
        }

    } catch (error) {
        console.log(error);
    }

}

export const updateImgProduct = async (file = [], uid) => {

    if (!file) throw new Error('No se ha seleccionado ningun archivo');

    const formData = new FormData();
    formData.append('file', file[0]);

    try {
        const resp = await fatimaServerApi.put(`/api/uploads/products/${uid}`, formData);

        console.log(resp.statusText);

        if (resp.statusText === 'OK') {
            Swal.fire('Cargada con Exito', 'success', 'success');
        }


    } catch (error) {
        console.log(error);
    }

}

