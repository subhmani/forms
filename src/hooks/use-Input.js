import { type } from "@testing-library/user-event/dist/type";
import { act, useReducer, useState } from "react";

const useInput=(validateInput)=>{
    const initialInputState={value:'',isTouched:false};
    const inputStateReducer=(state,action)=>{
        if(action.type==='INPUT'){
            return {value:action.value,isTouched:state.isTouched}
        }
        else if(action.type==='TOUCHED'){
            return{isTouched:action.value,value:state.value} 
        }
        else if(action.type==="RESET"){
            return initialInputState
        }
        return initialInputState
    }
    const[inputState,dispatch]=useReducer(inputStateReducer,initialInputState); 
    //const [input,setInput]=useState("");
    //const[inputTouched,setInputTouched]=useState(false);
    const inputIsValid=validateInput(inputState.value);
    const inputIsInValid=!inputIsValid && inputState.isTouched;
    const changeHandler=(event)=>{
        dispatch({type:'INPUT',value:event.target.value})
        //setInput(event.target.value);
    }
    const blurHandler=(event)=>{
        dispatch({type:'TOUCHED',value:true})
        //setInputTouched(true);
    }
    const reset=()=>{
        dispatch({type:'RESET'})
       // setInput(" ");
       // setInputTouched(false);
    }
    return {input:inputState.value,inputIsValid,inputIsInValid,changeHandler,blurHandler,reset}
}
export default useInput;