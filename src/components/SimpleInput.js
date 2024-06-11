import { useRef,useState } from "react";

const SimpleInput=(props)=>{
    const [userInput,setUserInput]=useState("");
    const userInputRef=useRef("");
    const changeHandler=(event)=>{
        setUserInput(event.target.value);
        console.log("User Input change handler",event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("Submit handler called",userInput,userInputRef.current.value);
        setUserInput("");
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label>User Name</label>
                <input value={userInput} ref={userInputRef} className="form-input" onChange={changeHandler} type="text" id="username"/>
            </div>
            <div className="form-action">
                <button type="submit">Submit</button>

            </div>
        </form>
    )
}
export default SimpleInput;