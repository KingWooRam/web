import React, {useState, useRef} from 'react'
import { style } from './styles4';
import { FaArrowRight } from "react-icons/fa";

function ProblemList() {
    const [inputStates, setInputStates] = useState([
        {value: "달팽이", isCorrect: true, message: "", isEntered: false},  
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "", isCorrect: false, message: "", isEntered: false },
        {value: "사슴", isCorrect: true, message: "", isEntered: false },
       
    ])

    const [passMessageStates, setPassMessageStates] = useState(false); 
    const inputRefs = useRef([]);

    const handleChange = (index, e) => {
        if (index === 0  || index === inputStates.length - 1){
            return;
        }

        const updatedStates = [...inputStates];
        updatedStates[index].value = e.target.value;
        setInputStates(updatedStates);
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Enter'){
            const updatedStates = [...inputStates];
            const inputValue = e.target.value.trim();
            const prevValue = index > 0? updatedStates[index - 1].value.trim(): "";
            const nextValue = index < inputStates.length - 1? updatedStates[index + 1].value.trim(): "";

            updatedStates[index].isEntered = true;

            if (!inputValue){
                updatedStates[index].isCorrect = false;
                updatedStates[index].message = "   공백은 입력할 수 없습니다."
                setInputStates(updatedStates);
                return;
            }

            if (inputValue.length === 1){
                updatedStates[index].isCorrect = false;
                updatedStates[index].message = "   한 글자는 입력할 수 없습니다."
                setInputStates(updatedStates);
                return;
            }

            if (updatedStates.some((state, i) => i !== index && state.value === inputValue)){
                updatedStates[index].isCorrect = false;
                updatedStates[index].message = "   중복된 단어입니다.";
                setInputStates(updatedStates);
                return;

            }

            const prevLastChar = prevValue.slice(-1);
            const inputFirstChar = inputValue.charAt(0);
            const inputLastChar = inputValue.slice(-1);
            const nextFirstChar = nextValue.charAt(0);
            
            let isValid = inputFirstChar === prevLastChar;

            if (index === inputStates.length - 2){
                isValid = isValid && inputLastChar === nextFirstChar;
            }

            updatedStates[index].isCorrect = isValid;
            setInputStates(updatedStates);

            const allCorrect = updatedStates.every(i => i.isCorrect);
            setPassMessageStates(allCorrect);

            if (isValid && index < inputStates.length - 1){
                inputRefs.current[index + 1].focus();
            }else if(!isValid){
                inputRefs.current[index].focus();
            }
        }
    }


  return (
    <div className='ProblemList' style={style.ProblemList}>
        <div style={style.arrowIcon}></div>

        {passMessageStates && <p style={style.passMessage}>통과!</p>}

        {inputStates.map((input, index) => (
            <React.Fragment key={index}>
                <div className='Problem' style={style.problemContainer}> 
                    <p style={style.problemNum}>
                        <span style={style.iconMessage}>
                            {input.isCorrect === true && index !== 0 && index !== inputStates.length-1 && (<span>⭕</span>)}
                            {input.isCorrect === false && input.isEntered === true && index !== 0 && index !== inputStates.length-1 && (<span>❌</span>)}
                        </span>
                        <span>
                            {index + 1}.
                        </span>
                        {input.message && input.isCorrect === false && ( <span style={style.message}>{input.message}</span>)}
                    </p>
    
                    <input
                        type='text'
                        value={input.value}
                        style={style.inputText}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={(el) => (inputRefs.current[index] = el)}
                    />
                    
                </div>

                {index !== inputStates.length-1 && (
                    <span style={style.arrowIcon}>
                        <FaArrowRight />
                    </span>
                )}
                
            </React.Fragment>

        ))}
    </div>
   

  )
}

export default ProblemList