import React from 'react';
import styled from 'styled-components';

const IntroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(15,86,103,1) 60%);
  top: 0;
  left: 0;
  z-index: 9;
`;

const IntroPedestal = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 50%;
  top: 310px;
  left: 480px;
  z-index: 10;
  background-color: #b2edc7;
  border: 10px solid rgba(65, 89, 74, .5);
  transform: rotate3d(360, 57, 51,300deg);
  box-shadow: 0px 10px;
`;

const IntroText = styled.div`
  position: absolute;
  width: 80%;
  height: 150px;
  background-color: #e5e5e5;
  bottom: 25px;
  left: 10%;
  z-index: 10;
  border-radius: 30px;
  box-shadow: 5px 10px #125775;
  border: 10px #94cbe3 solid;
`;

function Intro(){
  return(
    <IntroBackground>
      <IntroPedestal />
      <IntroText />
    </IntroBackground>
  );
}
export default Intro;

