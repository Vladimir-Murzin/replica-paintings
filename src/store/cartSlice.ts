import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store.ts';
import { IReproduction } from '../config/config.tsx';

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
        deleteFromCart: (state, action: PayloadAction<IReproduction>) => {
            state.cartItems.filter(el => el !== action.payload)
        },
    }
});

export const { addToCart, deleteFromCart, } = cartSlice.actions;

// export const selectCount = (state: RootState) => state.cart.cartItems

export default cartSlice.reducer;