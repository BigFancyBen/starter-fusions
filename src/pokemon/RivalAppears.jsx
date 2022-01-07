import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
const fadeInAnimation = keyframes`${fadeIn}`;

const ScreenOuter = styled.div`
  width: 1280px;
  height: 720px;
  position: fixed;
  top: 0;
  left: 0;
  animation: 1s ${fadeInAnimation};
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
  border: 10px #94cbe3 solid;
  font-family: 'PKMN RBYGSC';
  font-size: 40px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  filter: drop-shadow(5px 5px 5px #222);
`;

const RivalSprite = styled.img`
  position: absolute;
  left: 30%;
  bottom: 25px;
  height: 400px;
  transform: scaleX(-1);
  filter: drop-shadow(5px 5px 5px #222);
`;

function RivalAppears({}){
  const rivalLine = "Gramps! I'm fed up with waiting!";
  const [rivalLineAnimation, setRivalLineAnimation] = useState("");
  const [numChars, setNumChars] = useState(0);
  useEffect(() => {
    if(numChars >= rivalLine.length){return};
      setTimeout(function() { 
        setNumChars(numChars + 1);
        setRivalLineAnimation(rivalLine.substring(0, numChars));
      }, 100);
  }, [numChars])
  return(
    <ScreenOuter>
      <IntroText >
        {rivalLineAnimation}
      </IntroText>
      <RivalSprite src="/images/rival.png" />
    </ScreenOuter>
  );
}
export default RivalAppears;

