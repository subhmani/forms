import { useState } from "react";

const useInput=(validateInput)=>{
    const [input,setInput]=useState("");
    const[inputTouched,setInputTouched]=useState(false);
    const inputIsValid=validateInput(input);
    const inputIsInValid=!inputIsValid && inputTouched;
    const changeHandler=(event)=>{
        setInput(event.target.value);
    }
    const blurHandler=(event)=>{
        setInputTouched(true);
    }
    const reset=()=>{
        setInput(" ");
        setInputTouched(false);
    }
    return {input,inputIsValid,inputIsInValid,changeHandler,blurHandler,reset}
}
export default useInput;