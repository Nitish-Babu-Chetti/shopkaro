import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    wishListItems: []
};

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            let item = action.payload;
            const existingItem = state.wishListItems.find(wishItem => wishItem.id === item.id);
            if (!existingItem) {
                state.wishListItems.push(item);
                localStorage.setItem('wishList', JSON.stringify(state.wishListItems));
            }
        },
        removeItemFromWishList: (state, action) => {
            let itemId = action.payload;
            state.wishListItems = state.wishListItems.filter(item => item.id !== itemId);
            localStorage.setItem('wishList', JSON.stringify(state.wishListItems));
        },
        loadWishListItems: (state) => {
            const items = JSON.parse(localStorage.getItem('wishList')) || [];
            state.wishListItems = items;
        }
    }
});

// Export actions
export const { addToWishList, removeItemFromWishList, loadWishListItems } = wishListSlice.actions;

// Export selector
export const getWishListItems = (state) => state.wishList.wishListItems;

export default wishListSlice.reducer;
