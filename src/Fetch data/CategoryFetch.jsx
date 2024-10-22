import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Status } from "../url/Status";
import { Base_Url } from "../url/Url";

let initialState = {
    categories: [],
    categoryStatus: 'IDLE',
    product: {}, // Ensure this matches the structure expected in the selectors
    productFetchStatus: 'IDLE',
    products: [], // Ensure this matches the structure expected in the selectors
    productsFetchStatus: 'IDLE',
    categoryNames : []
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Categories
            .addCase(fetchAsyncCategories.pending, (state) => {
                state.categoryStatus = Status.LOADING;
            })
            .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
                state.categoryStatus = Status.SUCCEEDED;
                state.categories = action.payload;
            })
            .addCase(fetchAsyncCategories.rejected, (state) => {
                state.categoryStatus = Status.FAILED;
            })

            // Single Product
            .addCase(fetchAsyncProduct.pending, (state) => {
                state.productFetchStatus = Status.LOADING;
            })
            .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
                state.productFetchStatus = Status.SUCCEEDED;
                state.product = action.payload;
            })
            .addCase(fetchAsyncProduct.rejected, (state) => {
                state.productFetchStatus = Status.FAILED;
            })

            // Multiple Products
            .addCase(fetchAsyncProducts.pending, (state) => {
                state.productsFetchStatus = Status.LOADING;
            })
            .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.productsFetchStatus = Status.SUCCEEDED;
                state.products = action.payload;
            })
            .addCase(fetchAsyncProducts.rejected, (state) => {
                state.productsFetchStatus = Status.FAILED;
            });
    },
});

// Async Thunks
export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async () => {
    const response = await fetch(`${Base_Url}products/categories`);
    const data = await response.json();
    return data;
});

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch(`${Base_Url}products`);
    const data = await response.json();
    return data;
});

export const fetchAsyncProduct = createAsyncThunk('product/fetch', async (productid) => {
    const response = await fetch(`${Base_Url}products/${productid}`);
    const data = await response.json();
    return data;
});

// export const getAllCategories = (state) => state.category.categories?.slug.map(category => category.slug);
export const getAllCategories = (state) => state.category.categories?.map((category) => category.slug);


export const getAllCategoriesStatus = (state) => state.category.categoryStatus;

export const getAProduct = (state) => state.category.product;

export const getAllProducts = (state) => state.category.products?.products || [];

export const getProductFetchStatus = (state) => state.category.productFetchStatus;
export const getProductsFetchStatus = (state) => state.category.productsFetchStatus;

export default categorySlice.reducer;
