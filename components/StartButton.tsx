import React, {useEffect, useState, FunctionComponent} from 'react';
import styled from '@emotion/styled'

const SButton = styled.button`
    background-color: yellow;
    font-weight: bold;
    font-size: 25px;
    height:50px;
    width: 200px;
    border-radius: 25px 25px 25px 25px;
  `

  type InputProps = {
    dfltVal: string
}

export const StartButton:FunctionComponent<InputProps> = ({dfltVal}) => {


};
