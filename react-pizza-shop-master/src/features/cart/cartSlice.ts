import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type tCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

type icartSliceState = {
  totalPrice : number; 
  items: tCartItem[];
}

const initialState: icartSliceState = {
    totalPrice:0,
    items:[],
}

export  const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action: PayloadAction<tCartItem>){
            const findItemSameId = state.items.find(obj => obj.id === action.payload.id)
            if(findItemSameId){
                findItemSameId.count++
            }else{
                state.items.push({
                    ...action.payload,count:1
                })
            }
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.count * obj.price) } ,0 )
        },
        minusItem(state,action: PayloadAction<string>){
            const findItemSameId = state.items.find(obj => obj.id === action.payload.id)
            if(findItemSameId){
                findItemSameId.count--
            }
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.count * obj.price) } ,0 )
        }
        ,
        removeItem(state,action: PayloadAction<string>){
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = state.items.reduce(( sum, obj)  => { return sum + (obj.count * obj.price) } ,0 )
        },
        clearItems(state){
            state.items=[]
            state.totalPrice=0
        }
    }
})

export const {addItem, removeItem, clearItems,minusItem } = cartSlice.actions
export default cartSlice.reducer
