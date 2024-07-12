import { type } from "@testing-library/user-event/dist/type";
import { useSelector,useDispatch } from "react-redux";
const Votes=()=>{
    const initialState={votes:0,toggle:true}
    const votes = useSelector((state=initialState)=>state.votes)
    const showVotes=useSelector((state=initialState)=>state.toggle)
    const dispatch=useDispatch();
    const incrementHandler=()=>{
        dispatch({type:"Increment"})
    }
    const decrementHandler=()=>{
        dispatch({type:"Decrement"})
    }
    const addBy10Handler=()=>{
        dispatch({type:'Increase',payload:10})
    }
    const toggleVotesHandler=()=>{}
        dispatch({type:'Toggle'})
    return (
        <div className="votes">
            <h1>Redux Votes</h1>
            {showVotes && <div className="value">{votes}</div>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={addBy10Handler}>Add 10 votes</button>
            <button onClick={toggleVotesHandler}>Show/Hide Votes</button>
        </div>
    )
}
export default Votes;