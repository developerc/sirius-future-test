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
      let littleWordArray: string[] = []; 
    
    //здесь определим переменную количество слов
    const countWords: number = Number((document.getElementById("myinput1") as HTMLInputElement).value);
    //console.log('countWords = ' + countWords);
    //здесь определим переменную стартовое расстояние
    let startDistance: number = Number((document.getElementById("myinput3") as HTMLInputElement).value);
    startDistance = startDistance * 5;
    //console.log('startDistance = ' + startDistance);
    //здесь определим переменную сколько букв в словах
    let countLetters: number = Number((document.getElementById("myinput2") as HTMLInputElement).value);
    countLetters = countLetters + 2;
    //console.log('сколько букв в словах countLetters = ' + countLetters);
    //здесь определим переменную увеличение расстояния
    let riseDistance: number = Number((document.getElementById("myinput4") as HTMLInputElement).value);
    riseDistance = riseDistance * 5;
    console.log('riseDistance = ' + riseDistance);
    //здесь определим переменную скорость сек
    const speed: number = Number((document.getElementById("inputSpeed") as HTMLInputElement).value);
    //console.log('speed = ' + speed);
    
    //console.log(JSON.stringify(buttonWords));    
    const wordArray = buttonWords.words;
    //console.log(wordArray[0].word);
    for(let i = 0; i < wordArray.length; i++){
       // console.log(wordArray[i].word);
        //здесь загоняем в массив по длине слов
        if(wordArray[i].word.length == countLetters + 1){
            littleWordArray.push(wordArray[i].word);
        }
    }
    if(littleWordArray.length == 0){
        littleWordArray.push("пусто");
    }
    for(let i = 0; i < littleWordArray.length; i++){
        console.log(littleWordArray[i]);
    }

    //функция разделения слова на две половинки
    const splitWord = (word: string): string[] => {
        let twoHalfArr: string[] = [];
        let lenHalfWord = (word.length - (word.length)%2)/2 + 1;
        twoHalfArr.push(word.substring(0, lenHalfWord));
        twoHalfArr.push(word.substring(lenHalfWord));
        return twoHalfArr;
    }

    const getRandomWord = () => {
        let randWord: string;
        let randIndex: number = Math.floor(Math.random() * littleWordArray.length);
        randWord = littleWordArray[randIndex];
        return randWord;
    }
   
    //устанавливаем начальную дистанцию
    document.getElementById('centerDiv').style.width = startDistance + 'px';
    let i = 1;                  //  set your counter to 1
    //в цикле отображаем разделенное слово
    const myLoop = () => {         //  create a loop function
    setTimeout(function() {   //  call a  setTimeout when the loop is called
        //  your code here
        startDistance = startDistance + riseDistance;
        document.getElementById('centerDiv').style.width = startDistance + 'px';
        //получаем случайное слово
        let randWord = getRandomWord();
        document.getElementById('leftDiv').innerText = splitWord(randWord)[0];
        document.getElementById('rightDiv').innerText = splitWord(randWord)[1];
        i++;                    
        if (i < countWords) {           
        myLoop();              
        }                       
    }, speed * 1000);
    }

    myLoop();                   

    //document.getElementById('leftDiv').innerText = "нач";
    //document.getElementById('rightDiv').innerText = "ало";

  }

  type ButtonProps = {
      words: any
  }


export const StartButton: FunctionComponent<ButtonProps> = ({words}) => {
    const clickStartButton = () => {
        let widthDiv: number = 200;
        console.log('click Start Button!');
        changeDivCenter(widthDiv, words);
    }

    return (
        <>
            <SButton  onClick = {clickStartButton}>СТАРТ</SButton>
        </>
    );
}