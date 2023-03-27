import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    totalPrice:0,
    items:[]
}

export  const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            const findItemSameId = state.items.find(obj => obj.id === action.payload.id)
            if(findItemSameId){
                findItemSameId.cout++
            }else{
                state.items.push({
                    ...action.payload,cout:1
                })
            }
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.cout * obj.price) } ,0 )
        },
        minusItem(state,action){
            const findItemSameId = state.items.find(obj => obj.id === action.payload.id)
            if(findItemSameId){
                findItemSameId.cout--
            }
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.cout * obj.price) } ,0 )
        }
        ,
        removeItem(state,action){
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.cout * obj.price) } ,0 )
        },
        clearItems(state){
            state.items=[]
            state.totalPrice=0
        }
    }
})
export const {addItem, removeItem, clearItems,minusItem } = cartSlice.actions
export default cartSlice.reducer
