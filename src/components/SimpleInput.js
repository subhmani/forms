import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef,useState } from "react";

const SimpleInput=(props)=>{
    const [nameInput,setNameInput]=useState("");
    const [emailInput,setEmailInput]=useState("");
    //const[inputIsValid,setInputIsValid]=useState(false);
    const[inputTouched,setInputTouched]=useState(false);
    const[emailTouched,setEmailTouched]=useState(false);
    const[formIsValid,setFormIsValid]=useState(false);
    const inputIsValid=nameInput.trim().length!==0;
    const inputIsInValid=!inputIsValid && inputTouched;
    const emailIsValid=emailInput.includes('@');
    const emailIsInValid=!emailIsValid && emailTouched;
    useEffect(()=>{
        if(inputIsValid && emailIsValid){
            setFormIsValid(true);
        }else{
            setFormIsValid(false);
        }
    },[inputIsValid, emailIsValid])
    //const userInputRef=useRef("");
   /*  useEffect(()=>{
        if(inputIsValid){
            console.log("use effect handled")
        }
    },[inputIsValid]) */
    const changeHandler=(event)=>{
        setNameInput(event.target.value);
       /*  if(event.target.value.trim().length > 0){
            setInputIsValid(true);
        }
        console.log("User Input change handler",event.target.value); */
    }
    const emailChangeHandler=(event)=>{
        setEmailInput(event.target.value)
    }
    const onEmailBlurHandler=(event)=>{
        setEmailTouched(true);
    }
    const onBlurHandler=(event)=>{
        setInputTouched(true);
        setEmailTouched(true);
       /*  if(event.target.value.trim().length===0){
            setInputIsValid(false);
        }
        else{
            setInputIsValid(true);
        } */
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setInputTouched(true);
       /*  if(nameInput.trim().length===0){
            setInputIsValid(false)
            return
        } */
        if(!inputIsInValid){
            return
        }
       // setInputIsValid(true);
       
       // console.log("Submit handler called",userInput);\
       console.log("Form Submitted Successfully")
        setNameInput(" ");
        setInputTouched(false);
        setEmailInput("");
        setEmailTouched(false);
    }
    const controlClass=inputIsInValid ?"form-control invalid":"form-control";
    const emailControlClass=emailIsInValid ?"form-control invalid":"form-control";
    return(
        <form onSubmit={submitHandler}>
            <div className={controlClass}>
                <label>User Name</label>
                <input value={nameInput} className="form-input" 
                onChange={changeHandler} onBlur={onBlurHandler} 
                type="text" id="username"/>
                {inputIsInValid && <p className="error-text">*User name is required</p>}
            </div>
            <div className={emailControlClass}>
                <label>Email</label>
                <input value={emailInput} className="form-input" 
                onChange={emailChangeHandler} onBlur={onEmailBlurHandler} 
                type="text" id="username"/>
                {emailIsInValid && <p className="error-text">*Please enter valid email</p>}
            </div>
            <div className="form-action">
                <button type="submit" disabled={!formIsValid} >Submit</button>

            </div>
        </form>
    )
}
export default SimpleInput;