import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled';
import { type } from 'os';




const SButton = styled.button`
    background-color: yellow;
    font-weight: bold;
    font-size: 25px;
    height:50px;
    width: 200px;
    border-radius: 25px 25px 25px 25px;
  `
  const changeDivCenter = (widthDiv, buttonWords) => {
    //здесь определим переменную количество слов
    //здесь определим переменную стартовое расстояние
    //здесь определим переменную сколько букв в словах
    //здесь определим переменную увеличение расстояния
    //здесь определим переменную скорость сек

    
    //console.log(JSON.stringify(buttonWords));    
    const wordArray = buttonWords.words;
    //console.log(wordArray[0].word);
    for(let i = 0; i < wordArray.length; i++){
        console.log(wordArray[i].word);
        //здесь загоняем в массив по длине слов
    }
   
    

    document.getElementById('centerDiv').style.width = widthDiv + 'px';
    // document.getElementById('centerDiv').innerText = "proba";
    document.getElementById('leftDiv').innerText = "нач";
    document.getElementById('rightDiv').innerText = "ало";
  }

  type ButtonProps = {
      words: any
  }


export const StartButton: FunctionComponent<ButtonProps> = ({words}) => {
    const clickStartButton = () => {
        let widthDiv: number = 200;
        console.log('click Start Button!');
       // const buttonWords  = {words};
       // console.log({buttonWords});
        changeDivCenter(widthDiv, words);
    }

    return (
        <>
            <SButton  onClick = {clickStartButton}>СТАРТ</SButton>
        </>
    );
}
