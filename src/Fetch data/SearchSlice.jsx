import {Base_Url} from "../url/Url";
import {fetchAsyncCategoryProducts} from "./CategoryProductsFetch";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Status} from "../url/Status";

let initialState =
    {
        searchProducts : [],
        searchProductsStatus : 'IDLE'
    }

export const fetchSearchProducts = createAsyncThunk('search/fetch' , async (query)=>
{
    const response = await fetch(`${Base_Url}products/search?q=${query}`)
    const data = await response.json();
    console.log(data)
    return data;
})

const SearchSlice = createSlice(
    {
        name : 'searchProducts',
        initialState,
        reducers : {},
        extraReducers : (builder)=>{
            builder
                .addCase(fetchSearchProducts.pending , (state , action)=>
                {
                    state.searchProductsStatus = Status.LOADING
                })
                .addCase(fetchSearchProducts.fulfilled , (state , action)=>
                {
                    state.searchProductsStatus = Status.SUCCEEDED
                    state.searchProducts = action.payload
                })
                .addCase(fetchSearchProducts.rejected , (state , action)=>
                {
                    state.searchProductsStatus = Status.FAILED;
                })
        }
    }
)
export default  SearchSlice.reducer;

export const getAllSearchProducts = (state)=> state.searchProducts.searchProducts?.products || [];

export const getAllSearchProductsStatus = (state)=> state.searchProducts.searchProductsStatus;