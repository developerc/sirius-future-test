import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled'

const PlusMinusButton = styled.button`
    padding: 5px;
    color: black;
    background-color: yellow;
    font-weight: bold;
    font-size: 30px;
    border-radius: 7px 7px 7px 7px;
    height:40px;
    width: 40px;
    line-height: 10px;
   `
   type InputProps = {
    dfltVal: string
}

const setInput = (val: number) => {
    console.log('inputNum = ' + val);
    (document.getElementById("inputSpeed") as HTMLInputElement).value = String(val);
}

const getInput = () => {
    return (document.getElementById("inputSpeed") as HTMLInputElement).value;
}

export const PMButton: FunctionComponent<InputProps> = ({dfltVal}) => {
    const [inputNum, setInputNum] = useState(0);  //это hook для получения числа из поля ввода
    const increase = (): void => {
        setInputNum( Number(getInput()) );        
    };
    const changeInput = (sign): void => {
        if(sign === "+"){
            setInputNum( Number(getInput()) + 1);
        } else {
            if(Number(getInput()) > 0) {
                setInputNum( Number(getInput()) - 1);
            }
        }
    };
    
     useEffect(() => {
        setInput(inputNum);
     });

return (
<>
<PlusMinusButton onClick = {() => changeInput(dfltVal)}>{dfltVal}</PlusMinusButton>
</>
);
}
