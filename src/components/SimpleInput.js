import { useEffect, useRef,useState } from "react";

const SimpleInput=(props)=>{
    const [userInput,setUserInput]=useState("");
    const[inputIsValid,setInputIsValid]=useState(false);
    const[inputTouched,setInputTouched]=useState(false);
    const userInputRef=useRef("");
    useEffect(()=>{
        if(inputIsValid){
            console.log("use effect handled")
        }
    },[inputIsValid])
    const changeHandler=(event)=>{
        setUserInput(event.target.value);
        console.log("User Input change handler",event.target.value);
    }
    const onBlurHandler=(event)=>{
        setInputTouched(true);
        if(event.target.value.trim().length===0){
            setInputIsValid(false);
        }
        else{
            setInputIsValid(true);
        }
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setInputTouched(true);
        if(userInput.trim().length===0){
            setInputIsValid(false)
            return
        }
        setInputIsValid(true);
       
        console.log("Submit handler called",userInput,userInputRef.current.value);
        setUserInput(" ");
    }
    const controlClass=inputIsValid || !inputTouched?"form-control":"form-control invalid";
    return(
        <form onSubmit={submitHandler}>
            <div className={controlClass}>
                <label>User Name</label>
                <input value={userInput} ref={userInputRef} className="form-input" 
                onChange={changeHandler} onBlur={onBlurHandler} 
                type="text" id="username"/>
                {!inputIsValid && inputTouched && <p className="error-text">*User name is required</p>}
            </div>
            <div className="form-action">
                <button type="submit">Submit</button>

            </div>
        </form>
    )
}
export default SimpleInput;