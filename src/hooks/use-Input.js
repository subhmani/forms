const useInput=()=>{
    const [input,setInput]=useState("");
    const[inputTouched,setInputTouched]=useState(false);
    const inputIsValid=nameInput.trim().length!==0;
    const inputIsInValid=!inputIsValid && inputTouched;
}
export default useInput;