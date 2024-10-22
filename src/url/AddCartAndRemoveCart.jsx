import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cartItems : [],
    cartTotalPrice : 0,
    cartTotalDiscount : 0,
}

const cartActions = createSlice(
    {
        name : 'cart',
        initialState,
        reducers : {
            addToCart : (state , action) =>
            {
                let newItem = action.payload;

                const existingItem = state.cartItems.find(item => item.id === newItem.id)
                if(existingItem)
                {
                    existingItem.quantity = existingItem.quantity + 1;
                }
                else
                {
                    state.cartItems.push({...newItem , quantity : 1})
                }
                localStorage.setItem('cart' , JSON.stringify(state.cartItems))

                state.cartTotalPrice = state.cartItems.reduce(
                    (acc , item) =>acc+ item.price * 83 , 0
                )

                state.cartTotalDiscount = state.cartItems.reduce(
                    (acc , item) => acc + item.discountPercentage , 0
                )
            } ,
            updateQuantity: (state, action) => {
                let { id, quantity } = action.payload;

                // Sanity check for quantity
                if (quantity < 1) {
                    quantity = 1;
                }

                // Find the item to update
                const item = state.cartItems.find(item => item.id === id);

                if (item) {
                    item.quantity = quantity;
                }

                // Update the cart in localStorage
                localStorage.setItem('cart', JSON.stringify(state.cartItems));

                // Recalculate total price and discount after quantity change
                state.cartTotalPrice = state.cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity * 83, 0 // Adjusted for quantity
                );

                state.cartTotalDiscount = state.cartItems.reduce(
                    (acc, item) => acc + (item.discountPercentage * item.quantity), 0 // Adjusted for quantity
                );
            },

            removeItemFromCart : (state,action) =>
            {
                let itemId = action.payload;
                state.cartItems = state.cartItems.filter(item => item.id !== itemId);
                localStorage.setItem('cart' , JSON.stringify(state.cartItems))

                state.cartTotalPrice = state.cartItems.reduce(
                    (acc , item) =>acc+ item.price * 83 , 0)

                state.cartTotalDiscount = state.cartItems.reduce(
                    (acc , item) => acc + item.discountPercentage , 0
                )
            },
            clearCart : (state , action)=>
            {
                state.cartItems = []
                state.cartTotalPrice = 0;
                state.cartTotalDiscount = 0;
            },
            loadItemsFromCart : (state , action) =>
            {
               const cart = JSON.parse(localStorage.getItem('cart')) || []
               state.cartItems = cart;

                state.cartTotalPrice = state.cartItems.reduce(
                    (acc, item) => acc + item.price * 83, 0
                );

                state.cartTotalDiscount = state.cartItems.reduce(
                    (acc, item) => acc + item.discountPercentage, 0
                );

            },
            cartTotal : (state , action)=>
            {
                state.cartTotalPrice = state.cartItems.reduce(
                    (acc , item)=>  acc + item.price * 83 , 0)
            },
            totalDiscount : (state)=>
            {
                state.cartTotalDiscount = state.cartItems.reduce(
                    (acc , item) => acc + item.discountPercentage , 0
                )
            }
        }
    }
)

export const {addToCart ,updateQuantity,removeItemFromCart, clearCart, loadItemsFromCart , cartTotal } = cartActions.actions;

export const getCartItems = (state)=> state.cart.cartItems;

export const getCartTotalPrice = (state) => state.cart.cartTotalPrice;

export const getCartTotalDiscount = (state)=> state.cart.cartTotalDiscount;

export default cartActions.reducer;