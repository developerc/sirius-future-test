import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'

export default function PlusMinusButton(){
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

   return PlusMinusButton;
}