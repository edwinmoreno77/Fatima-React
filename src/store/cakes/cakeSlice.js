import { createSlice } from '@reduxjs/toolkit';


export const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        limit: 100,
        cakes: [], //products
        isLoading: false,
    },
    reducers: {

        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.limit = action.payload.limit;
            state.cakes = action.payload.cakes;
        },


    },
})

// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts } = cakeSlice.actions
