import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type FetchPizzas = Record<string, string>
export const fetchingPizza = createAsyncThunk('pizza/fetchingPizzaItems',
    async (params: FetchPizzas) => {
    const {replaceMinus, getSortDecision, getCategory, search, currentPage} = params
    const {data} =  await axios.get(`https://634d210bf5d2cc648e9d3578.mockapi.io/items?page=${currentPage}&limit=4&${getCategory}&sortBy=${replaceMinus}&order=${getSortDecision}${search}`)
    return data
})

type Pizza = {
  id: number,
  title: string,
  price: number,
  imageUrl: number,
  sizes: number[],
  types: number[],
}

type iCreateSliceState = {
  items :Pizza[];
  status: 'loading' | 'succes' | 'error';
}

const initialState: iCreateSliceState = {
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