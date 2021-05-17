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
type Props = {
    sign: string;
}

const clickButton = (sign: string) => {
    //const [inputNum, setInputNum] = useState(0);  //это hook для получения числа из поля ввода
    
    let inputVal = (document.getElementById("inputSpeed") as HTMLInputElement).value;
    if(sign === "+"){
        console.log('sign = plus ' + inputVal);
    } else {
        console.log('sign = minus');
    }
    
};

export const PMButton: FunctionComponent<InputProps> = ({dfltVal}) => {
    const [inputNum, setInputNum] = useState(0);  //это hook для получения числа из поля ввода
    const increase = (): void => {
        setInputNum( inputNum + 1 );
        
        //clickButton(dfltVal);
    };
    const decrease = (): void => {
        setInputNum( (prevNum) => prevNum - 1);
    };
    
     useEffect(() => {
         clickButton(dfltVal);
     });

return (
<aside>
<PlusMinusButton onClick = {() => increase()}>{dfltVal}</PlusMinusButton>
{/* <PlusMinusButton onClick = {() => clickButton(dfltVal)}>{dfltVal}</PlusMinusButton> */}
</aside>
);
}
