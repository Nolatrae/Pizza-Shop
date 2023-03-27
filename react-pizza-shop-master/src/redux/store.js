import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "../features/filter/filterSlice";
import cartSlice from "../features/cart/cartSlice";
import pizzaSlice from "../features/pizza/pizzaSlice";


export const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice,
        pizzaSlice,
    },
})