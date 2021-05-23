import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled';
// import  {readFile} from 'fs';



const SButton = styled.button`
    background-color: yellow;
    font-weight: bold;
    font-size: 25px;
    height:50px;
    width: 200px;
    border-radius: 25px 25px 25px 25px;
  `
  const changeDivCenter = (widthDiv) => {
    document.getElementById('centerDiv').style.width = widthDiv + 'px';
    // document.getElementById('centerDiv').innerText = "proba";
    document.getElementById('leftDiv').innerText = "нач";
    document.getElementById('rightDiv').innerText = "ало";
    // читаю файл
    var fs = require('fs');
    var readme = fs.readFileSync('../public/basaslov.txt', 'utf8');
    /*readFile('../public/basaslov.txt', 'utf8', function(err, data){
        if(err) throw err;
        console.log(data);
    });*/
  }

export const StartButton: FunctionComponent = () => {
    const clickStartButton = () => {
        let widthDiv: number = 200;
        console.log('click Start Button!');
        changeDivCenter(widthDiv);
    }

    return (
        <>
            <SButton  onClick = {clickStartButton}>СТАРТ</SButton>
        </>
    );
}