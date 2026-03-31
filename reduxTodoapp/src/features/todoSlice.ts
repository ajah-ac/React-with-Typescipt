import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
export type Item={id:string,text:string,complete:boolean}
type initialVal={items:Item[]}

const initialState:initialVal={items:[]}

const todoReducer=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo(state,action:PayloadAction<Item>){
            state.items.push(action.payload)
        }

    }

})
export const {addtodo} =todoReducer.actions
export default todoReducer.reducer