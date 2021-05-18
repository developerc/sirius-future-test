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
    minVal: string,
    maxVal: string,
    idVal: string
}

const changeSlider = () => {
        console.log('slider changed');
        console.log('slider value = ' + getSliderVal());
        let sliderVal = getSliderVal();
       // Range.defaultProps.style.background = 'linear-gradient(to right, green 0%, green 70%, #fff 50%, #fff 100%)';
        // document.getElementById("myinput").oninput = function() {
        //   var value = (this.value-this.min)/(this.max-this.min)*100
        //   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        // };
      };

const getSliderVal = () => {
    return (document.getElementById("myinput1") as HTMLInputElement).value;
}

  export const Slider: FunctionComponent<RangeProps> = ({minVal, maxVal, idVal}) => {
      

      

    return (
        <>
        <Range  type="range" min={minVal} max={maxVal} id={idVal} onChange = {() => changeSlider()}  ></Range>        
        </>
    );
  }
