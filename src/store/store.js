import { configureStore } from '@reduxjs/toolkit';
import { cakeSlice } from './cakes/cakeSlice';




export const store = configureStore({
    reducer: {
        cake: cakeSlice.reducer,
    },
})