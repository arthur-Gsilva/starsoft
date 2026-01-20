import { configureStore, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "./types/product";
import { useDispatch, useSelector } from "react-redux";

type initialStateType = {
    cart: CartItem[]
}

const initialState: initialStateType = {
    cart: []
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addCartItem: (state, { payload }: PayloadAction<Product>) => {

            const itemExistInCart = state.cart.find((item) => item.item.id === payload.id)

            if(itemExistInCart){
                itemExistInCart.quantity += 1
                return
            }

            state.cart.push({
                item: payload,
                quantity: 1
            })
        },

        removeCartItem: (state, { payload }: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.item.id !== payload)
        },
        addQuantityItem: (state, { payload }: PayloadAction<number>) => {
            const product = state.cart.find((item) => item.item.id === payload)

            if(product){
                product.quantity += 1
            }
            
        },
        lessQuantityItem: (state, { payload }: PayloadAction<number>) => {
            const product = state.cart.find((item) => item.item.id === payload)

            if(!product) return

            if (product.quantity > 1) {
                product.quantity -= 1
            } else {
                state.cart = state.cart.filter(
                    (cartItem) => cartItem.item.id !== payload
                )
            }
        },
    }
})

export const { addCartItem, addQuantityItem, lessQuantityItem, removeCartItem } = cartSlice.actions

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

type Rootstate = ReturnType<typeof store.getState>

type dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()

export const useAppSelector = useSelector.withTypes<Rootstate>()