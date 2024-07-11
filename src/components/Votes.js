import { type } from "@testing-library/user-event/dist/type";
import { useSelector,useDispatch } from "react-redux";
const Votes=()=>{
    const votes = useSelector(state=>state.votes)
    const dispatch=useDispatch();
    const incrementHandler=()=>{
        dispatch({type:"Increment",value:10})
    }
    const decrementHandler=()=>{
        dispatch({type:"Decrement"})
    }
    const addBy10Handler=()=>{
        dispatch({type:'Increase',value:10})
    }
    const toggleVotesHandler=()=>{}

    return (
        <div className="votes">
            <h1>Redux Votes</h1>
            <div className="value"> Number of votes</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={addBy10Handler}>Add 10 votes</button>
            <button onClick={toggleVotesHandler}>Show/Hide Votes</button>
        </div>
    )
}
export default Votes;