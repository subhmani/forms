import { useRef,useState } from "react";

const SimpleInput=(props)=>{
    const [userInput,setUserInput]=useState("");
    const[inputIsValid,setInputIsValid]=useState(" ");
    const userInputRef=useRef("");
    const changeHandler=(event)=>{
        setUserInput(event.target.value);
        console.log("User Input change handler",event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(userInput.trim().length===0){
            setInputIsValid(false)
            return
        }
       
        console.log("Submit handler called",userInput,userInputRef.current.value);
        setUserInput("");
    }
    const controlClass=inputIsValid?"form-control":"form-control invalid";
    return(
        <form onSubmit={submitHandler}>
            <div className={controlClass}>
                <label>User Name</label>
                <input value={userInput} ref={userInputRef} className="form-input" onChange={changeHandler} type="text" id="username"/>
                {!inputIsValid && <p className="error-text">*User name is required</p>}
            </div>
            <div className="form-action">
                <button type="submit">Submit</button>

            </div>
        </form>
    )
}
export default SimpleInput;