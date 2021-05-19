import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled'

const Range = styled.input`
  //background: linear-gradient(to right, #82CFD0 0%, #82CFD0 50%, #fff 50%, #fff 100%);
  background: linear-gradient(to right, yellow 0%, yellow 70%, #fff 50%, #fff 100%);
  //border: solid 1px #82CFD0;
  border-radius: 8px;
  height: 7px;
  width: 100%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none; 
  
  `
type RangeProps = {
    minVal: number,
    maxVal: number,
    idVal: string
}

const changeSlider = (minVal, maxVal, idVal) => {
        console.log('slider changed');
        console.log('slider value = ' + getSliderVal(idVal));
        let sliderVal: number = Number(getSliderVal(idVal));
        let percentVal: number = (sliderVal - minVal)/(maxVal - minVal)*100;    //улучшаем вид слайдера
        (document.getElementById(idVal) as HTMLInputElement).style.background = 'linear-gradient(to right, yellow 0%, yellow ' + percentVal + '%, #fff ' + percentVal + '%, white 100%)';       
        
    };

const getSliderVal = (idVal) => {
    return (document.getElementById(idVal) as HTMLInputElement).value;
}

  export const Slider: FunctionComponent<RangeProps> = ({minVal, maxVal, idVal}) => {
      
    return (
        <>
        <Range  type="range" min={minVal} max={maxVal} id={idVal} onChange = {() => changeSlider(minVal, maxVal, idVal)}  ></Range>        
        </>
    );
  }
