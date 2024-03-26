import { IReproduction } from '../config/config.tsx';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
    cartItems: IReproduction[];
};

const initialState: CartState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IReproduction> ) => {
            state.cartItems.push(action.payload)
        },
        deleteFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(el => el.id !== action.payload);
        },
    }
});

export const { addToCart, deleteFromCart, } = cartSlice.actions;

export default cartSlice.reducer;