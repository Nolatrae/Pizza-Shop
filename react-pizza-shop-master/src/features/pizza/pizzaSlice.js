import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchingPizza = createAsyncThunk('pizza/fetchingPizzaItems',
    async (params) => {
    const {replaceMinus, getSortDecision, getCategory, search, currentPage} = params
    const {data} =  await axios.get(`https://634d210bf5d2cc648e9d3578.mockapi.io/items?page=${currentPage}&limit=4&${getCategory}&sortBy=${replaceMinus}&order=${getSortDecision}${search}`)
    return data
})

const initialState = {
    items:[],
    status:'loading'
}


const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        setItems(state,action){
            state.items = action.payload
        },
    },
    extraReducers:{
        [fetchingPizza.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchingPizza.fulfilled]: (state,action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchingPizza.rejected]: (state) => {
            state.status = 'error'
            state.item = []
        }
    }
})
export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer