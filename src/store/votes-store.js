import { createStore } from  'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';
const initialState={votes:0,toggle:true}
/* const reducerFunction=(state=initialState,action)=>{
    if(action.type==="Increment"){

        return {votes:state.votes+1,toggle:state.toggle}
    }else if(action.type==="Decrement"){
    return {votes:state.votes-1,toggle:state.toggle}
    }
    else if(action.type==="Increase"){
        return {votes:state.votes+action.payload,toggle:state.toggle}
        }
    else if(action.type==="Toggle"){
        return {votes:state.votes,toggle:!state.toggle}
    }    
} */
reducer={
    Increment:(state)=>state.votes++,
    Decrement:(state)=>state.votes--,
    Increase:(state)=>state.votes,
    Toggle:(state)=>!state.toggle
}
const voteSlice = createSlice("votes", initialState, reducer)
const voteStore=configureStore({reducer:{votes:voteSlice.reducer}})
//const voteStore = createStore(voteSlice.reducer)
//const voteStore=createStore(reducerFunction);

export default voteStore;
