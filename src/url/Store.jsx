import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../../src/Fetch data/CategoryFetch';
import categoryProductsReducer from '../../src/Fetch data/CategoryProductsFetch';
import cartReducer from '../../src/url/AddCartAndRemoveCart';
import searchReducer from '../../src/Fetch data/SearchSlice';
import wishlistReducer from '../../src/url/wishList'
import categoryImageReducer from '../../src/Fetch data/CategoryImageFetch';
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        category: categoryReducer,
        categoryProducts: categoryProductsReducer,
        cart : cartReducer,
        searchProducts : searchReducer,
        wishList : wishlistReducer,
        categoryImage : categoryImageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
