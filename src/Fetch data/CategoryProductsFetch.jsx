import {Base_Url} from "../url/Url";
import {Status} from "../url/Status";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
let initialState =
    {
        categoryProducts : [] ,
        categoryProductsStatus : 'IDLE'
    }

    const categoryProductsSlice = createSlice(
        {
            name : 'categoryProducts',
            initialState,
            reducers : {},
            extraReducers : (builder)=>
            {
                builder
                    .addCase(fetchAsyncCategoryProducts.pending , (state , action) =>
                    {
                        state.categoryProductsStatus = Status.LOADING
                    })
                    .addCase(fetchAsyncCategoryProducts.fulfilled , (state , action)=>
                    {
                        state.categoryProductsStatus = Status.SUCCEEDED;
                        state.categoryProducts = action.payload;
                    })
                    .addCase(fetchAsyncCategoryProducts.rejected , (state , action)=>
                    {
                        state.categoryProductsStatus = Status.FAILED;
                    })
            }
        }
    )

export const fetchAsyncCategoryProducts = createAsyncThunk('category-products/fetch' , async(category)=>
{
    const response = await fetch(`${Base_Url}products/category/${category}`);
    const data = await response.json();
    return data;
})

export const getAllCategoryProducts = (state) => state.categoryProducts.categoryProducts?.products || [];

export const getAllCategoryProductsFetchStatus = (state) => state.categoryProducts.categoryProductsStatus;

export default categoryProductsSlice.reducer;