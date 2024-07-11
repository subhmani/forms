import { useSelector } from "react-redux";
const Votes=()=>{
    const votes = useSelector(state=>state.votes)
    const toggleVotesHandler=()=>{}
    return (
        <div className="votes">
            <h1>Redux Votes</h1>
            <div className="value"> Number of votes</div>
            <button onClick={toggleVotesHandler}>Show/Hide Votes</button>
        </div>
    )
}
export default Votes;