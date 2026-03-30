import {createSlice} from '@reduxjs/toolkit'
type Item={id:number,text:string,complete:boolean}
type initialVal={items:Item[]}

const initialState:initialVal={items:[]}

const todoReducer=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo(state,action){
            state.items.push(action.payload)
        }

    }

})
export const {addtodo} =todoReducer.actions
export default todoReducer.reducer