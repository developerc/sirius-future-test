import React from 'react';
import styled from '@emotion/styled'
import {PMButton} from '../components/PlusMinusButton';
import {Slider} from '../components/Slider';
import {StartButton} from '../components/StartButton';
import fs from 'fs/promises';
import path from 'path';

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'basa.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString('utf8'));

  return {props: {
    words: data.words
  }
};
}

export default function Play(props){

    const H1 = styled.h1`
    text-align:center;
  `
  const Range = styled.input`
  //background: linear-gradient(to right, #82CFD0 0%, #82CFD0 50%, #fff 50%, #fff 100%);
  background: linear-gradient(to right, green 0%, green 70%, #fff 50%, #fff 100%);
  //border: solid 1px #82CFD0;
  border-radius: 8px;
  height: 7px;
  width: 100%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
    }
  `
  const Half = styled.div`
    display:inline-block;
    width: 50%;
    background: white;
    vertical-align: top;
  `
  const Container = styled.div`
    width: 90%;
    margin: auto;
  `
  const MainDiv = styled.div`
    height: 125px;
    background: White; /* Цвет фона */
    color: black; /* Цвет текста */
    margin: 10px; /* Поля вокруг текста */
    border-radius: 5px; /* Уголки */
    box-shadow: 0 3px 2px 4px rgb(184,171,171);
  `
  const TextDiv = styled.div`
    height: 40px;
    width: 98%;
    margin: auto;
    text-align: center;
    background: white;
  `
  const TableDiv = styled.div`
    height: 40px;
    width: 70%;
    margin: auto;
    background: white;
  `
  const TableMain = styled.table`
    width: 100%;
    text-align: center;
  `
  const RangeDiv = styled.div`
  height: 40px;
  width: 70%;
  margin: auto;
  background: white;
  `

  const ParagraphSpeed = styled.p`
    font-weight: bold;
    font-size: 120%;
    margin-top: 20px;
  `
  const InputSpeed = styled.input`
    text-align: center;
    type: "text";
    border-radius: 7px 7px 7px 7px;
   `
  
   const ButtonDiv = styled.div`
   display: flex;
   justify-content: center;
   `
   const SpeedDiv = styled.div`
   height: 1px;
   `
   const SecondnDiv = styled.div`
    height: 125px;
    background: White; /* Цвет фона */
    
    display: flex;
    justify-content: center; /*Центрирование по горизонтали*/
    align-items: center;     /*Центрирование по вертикали */  
 `

  const DivWrapper = styled.div`
  background: white;
  width: %100;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 50px;
  `
  const DivLeft = styled.div`
  width:370px;
  height:150px;
  float:left;
  background-color: white;
  text-align: right;
  margin-top: 20px;
  `
 
const DivCenter = styled.div`
width:100px;
  height:150px;
  float:left;
  background-color: white;
  margin-top: 20px;
`

 const DivRight = styled.div`
 width:370px;
  height:150px;
  float:left;
  background-color: white;
  margin-top: 20px;
 `

     return (
         <>
         <H1>Тренажер "Поле зрения"</H1>                 
         <div>
            <Container>
                <Half>
                    <MainDiv>
                    <TextDiv>
                    <h3>Сколько слов</h3>
                    </TextDiv>
                    <TableDiv>
                        <TableMain>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                            </tr>
                        </TableMain>
                    </TableDiv>
                    <RangeDiv> 
                    <Slider minVal = {1} maxVal = {10} idVal = "myinput1"></Slider>
                    </RangeDiv>
                    </MainDiv>      
                    
                    <MainDiv>
                    <TextDiv>
                    <h3>Сколько букв в словах</h3>
                    </TextDiv>
                    <TableDiv>
                        <TableMain>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                        </TableMain>
                    </TableDiv>
                    <RangeDiv>                    
                    <Slider minVal = {1} maxVal = {10} idVal = "myinput2"></Slider>
                    </RangeDiv>
                    </MainDiv>

                    <MainDiv>
                      <SpeedDiv>
                        </SpeedDiv>
                      <TextDiv>
                        <ParagraphSpeed>
                          Скорость&nbsp;&nbsp;&nbsp;
                          <InputSpeed id = "inputSpeed" defaultValue="1" style={{width: "50px"}}/>
                          {' '}сек.
                        </ParagraphSpeed>
                      </TextDiv>
                        
                          <ButtonDiv>                        
                            <PMButton dfltVal="+"></PMButton>
                            &nbsp;                          
                            <PMButton dfltVal="&minus;"></PMButton>
                          </ButtonDiv>
                          
                    </MainDiv>                    
                </Half>
                <Half>
                  <MainDiv>
                    <TextDiv>
                    <h3>Стартовое расстояние</h3>
                    </TextDiv>
                    <TableDiv>
                        <TableMain>
                            <tr>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>25</td>
                                <td>30</td>
                                <td>35</td>
                                <td>40</td>                               
                            </tr>
                        </TableMain>
                    </TableDiv>
                    <RangeDiv>                     
                    <Slider minVal = {1} maxVal = {8} idVal = "myinput3"></Slider>
                    </RangeDiv>
                  </MainDiv>

                  <MainDiv>
                    <TextDiv>
                    <h3>Увеличение расстояния</h3>
                    </TextDiv>
                    <TableDiv>
                        <TableMain>
                            <tr>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>25</td>
                                <td>30</td>
                                <td>35</td>
                                <td>40</td>                               
                            </tr>
                        </TableMain>
                    </TableDiv>
                    <RangeDiv>                   
                    <Slider minVal = {1} maxVal = {8} idVal = "myinput4"></Slider>
                    </RangeDiv>
                  </MainDiv>
                  <SecondnDiv>
                  <StartButton words = {props}>
                    
                  </StartButton>
                  </SecondnDiv>
                </Half>
            </Container>
            
        </div>
            <DivWrapper>
              <DivLeft id = "leftDiv">нач</DivLeft>
              <DivCenter  id = "centerDiv"> </DivCenter>
              <DivRight id = "rightDiv">ало</DivRight>
            </DivWrapper>

         </>
     );
    
}