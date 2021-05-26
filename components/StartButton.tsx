import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled';

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
    const countWords: number = Number((document.getElementById("myinput1") as HTMLInputElement).value);
    console.log('countWords = ' + countWords);
    //здесь определим переменную стартовое расстояние
    let startDistance: number = Number((document.getElementById("myinput3") as HTMLInputElement).value);
    startDistance = startDistance * 5;
    console.log('startDistance = ' + startDistance);
    //здесь определим переменную сколько букв в словах
    let countLetters: number = Number((document.getElementById("myinput2") as HTMLInputElement).value);
    countLetters = countLetters + 2;
    console.log('countLetters = ' + countLetters);
    //здесь определим переменную увеличение расстояния
    let riseDistance: number = Number((document.getElementById("myinput4") as HTMLInputElement).value);
    riseDistance = riseDistance * 5;
    console.log('riseDistance = ' + riseDistance);
    //здесь определим переменную скорость сек
    const speed: number = Number((document.getElementById("inputSpeed") as HTMLInputElement).value);
    console.log('speed = ' + speed);
    
    //console.log(JSON.stringify(buttonWords));    
    const wordArray = buttonWords.words;
    //console.log(wordArray[0].word);
    for(let i = 0; i < wordArray.length; i++){
       // console.log(wordArray[i].word);
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