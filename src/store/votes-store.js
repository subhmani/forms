import { createStore } from  'react-redux';
const reducer=(state={votes:0},action)=>{
    if(action.type==="Increment"){
        return {votes:state.votes+1}
    }else if(action.type==="Decrement"){
    return {votes:state.votes-1}
    }
}
const voteStore=createStore(reducer);
export default voteStore;