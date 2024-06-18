import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef,useState } from "react";
import useInput from "../hooks/use-Input";

const SimpleInput=(props)=>{
    const {
        input:enteredName, inputIsValid:nameIsValid,inputIsInValid:nameIsInValid,
        changeHandler:nameChangeHandler, blurHandler:nameBlurHandler, reset:resetName
    }=useInput(value=>value.trim().length!==0);
    const {
        input:enteredEmail, inputIsValid:emailIsValid,inputIsInValid:emailIsInValid,
        changeHandler:emailChangeHandler, blurHandler:emailBlurHandler, reset:resetEmail
    }=useInput(value=>value.includes("@"));
   // const [nameInput,setNameInput]=useState("");
    const [emailInput,setEmailInput]=useState("");
    //const[inputIsValid,setInputIsValid]=useState(false);
   // const[inputTouched,setInputTouched]=useState(false);
    //const[emailTouched,setEmailTouched]=useState(false);
    const[formIsValid,setFormIsValid]=useState(false);
    /* const inputIsValid=nameInput.trim().length!==0;
    const inputIsInValid=!inputIsValid && inputTouched; */
   /*  const emailIsValid=emailInput.includes('@');
    const emailIsInValid=!emailIsValid && emailTouched; */
    useEffect(()=>{
        if(nameIsValid && emailIsValid){
            setFormIsValid(true);
        }else{
            setFormIsValid(false);
        }
    },[nameIsValid, emailIsValid])
    //const userInputRef=useRef("");
   /*  useEffect(()=>{
        if(inputIsValid){
            console.log("use effect handled")
        }
    },[inputIsValid]) */
   /*  const changeHandler=(event)=>{
        setNameInput(event.target.value);
        if(event.target.value.trim().length > 0){
            setInputIsValid(true);
        }
        console.log("User Input change handler",event.target.value);
    } */
   /*  const emailChangeHandler=(event)=>{
        setEmailInput(event.target.value)
    }
    const onEmailBlurHandler=(event)=>{
        setEmailTouched(true);
    } */
   /*  const onBlurHandler=(event)=>{
        setInputTouched(true);
        setEmailTouched(true);
        if(event.target.value.trim().length===0){
            setInputIsValid(false);
        }
        else{
            setInputIsValid(true);
        }
    } */
    const submitHandler=(event)=>{
        event.preventDefault();
        //setInputTouched(true);
        //setEmailTouched(true);
       /*  if(nameInput.trim().length===0){
            setInputIsValid(false)
            return
        } */
        if(!nameIsInValid){
            return
        }
       // setInputIsValid(true);
       
       // console.log("Submit handler called",userInput);\
       console.log("Form Submitted Successfully")
       /*  setNameInput(" ");
        setInputTouched(false); */
        resetName();
        resetEmail();
        setEmailInput("");
        //setEmailTouched(false);
    }
    const controlClass=nameIsInValid ?"form-control invalid":"form-control";
    const emailControlClass=emailIsInValid ?"form-control invalid":"form-control";
    return(
        <form onSubmit={submitHandler}>
            <div className={controlClass}>
                <label>User Name:</label>
                <input value={enteredName} className="form-input" 
                onChange={nameChangeHandler} onBlur={nameBlurHandler} 
                type="text" id="username"/>
                {nameIsInValid && <p className="error-text">*User name is required.</p>}
            </div>
            <div className={emailControlClass}>
                <label>Email:</label>
                <input value={enteredEmail} className="form-input" 
                onChange={emailChangeHandler} onBlur={emailBlurHandler} 
                type="text" id="username"/>
                {emailIsInValid && <p className="error-text">*Please enter valid email.</p>}
            </div>
            <div className="form-action">
                <button type="submit" disabled={!formIsValid} >Submit</button>

            </div>
        </form>
    )
}
export default SimpleInput;