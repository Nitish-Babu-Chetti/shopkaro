import {Status} from "../url/Status";
import {Base_Url} from "../url/Url";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAsyncCategoryProducts} from "./CategoryProductsFetch";

let initialState =
    {
        CategoryImage : [],
        CategoryImageFetchStatus : 'IDLE'
    }

export const fetchAsyncCategoryImage = createAsyncThunk('fetch/image' , async(category)=>
{
    const response = await fetch(`${Base_Url}category/${category}`)
    const data = await response.json();
    console.log(data)
})

let categoryImageFetchSlice = createSlice(
    {
        name : 'categoryImage',
        initialState,
        reducers: {} ,
        extraReducers: (builder) => {


        }
    }
)
export default categoryImageFetchSlice.reducer;