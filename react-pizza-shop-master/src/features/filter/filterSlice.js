import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
        setCategoryId(state,action){
            state.categoryId = action.payload
        },
        setChangeSort(state,action){
            state.sort = action.payload
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload
        },
        setFilters(state,action){
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
            state.sort = action.payload.sortTypeFing
        }

    }

})
export const {setCategoryId,setChangeSort,setCurrentPage,setFilters} = filterSlice.actions
export default filterSlice.reducer