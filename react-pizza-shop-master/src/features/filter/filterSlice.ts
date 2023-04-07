import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

type Sort = {
  name: string,
  criteriaSort: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
}

type iFilterSliceState = {
  categoryId:number;
  currentPage:number;
  sort: Sort;
}

const initialState : iFilterSliceState = {
    categoryId:0,
    currentPage:1,
    sort:{
        name:'популярности',
        criteriaSort:'rating'
    }
}

export const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategoryId(state,action: PayloadAction<number>){
            state.categoryId = action.payload
        },
        setChangeSort(state,action: PayloadAction<Sort>){
            state.sort = action.payload
        },
        setCurrentPage(state,action: PayloadAction<number>){
            state.currentPage = action.payload
        },
        setFilters(state,action: PayloadAction<iFilterSliceState>){
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
            state.sort = action.payload.sort
        }

    }

})
export const {setCategoryId,setChangeSort,setCurrentPage,setFilters} = filterSlice.actions
export default filterSlice.reducer