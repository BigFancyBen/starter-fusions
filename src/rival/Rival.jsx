import React, {useState, useEffect}  from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight, zoomInDown, fadeIn } from 'react-animations'
import { getFusionName, betterFusionTypes } from '../pokemon/FusionHelpers';
import PokemonTypes from '../pokemon/PokemonTypes';

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const RivalWrapper = styled.div`
  position: fixed;
  width: 1280px;
  height: 720px;
  z-index: 9;
  top: 0;
  left: 0;
  animation: 1s ${fadeInAnimation};
`;
const RivalBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom left;
`;

const TrainerImage = styled.img`
  width: 100%;
  
`;

const infiniteFloat = keyframes`
  0%   { transform: translateY(0); }
  50% { transform: translateY(20px); }
  100%   { transform: translateY(0); }
`;

const Trainer = styled.div`
    width: 80px;
    position: absolute;
    bottom: 80px;
    left: 20%;
    animation: 1s ${slideInLeftAnimation};
  &.rival{
    right: 20%;
    left: unset;
    animation: 1s ${slideInRightAnimation};
    img {
      right: 20px;
      left: unset;
      height: 120%;
      transform: scaleX(1);
    }
    & .card {
      right: 0;
    }
  }
`;

const TrainerPokemon = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
  transform: scaleX(-1);
  bottom: -25%;
`;

const TrainerCard = styled.div`
  color: #222;
  padding: 10px;
  position: absolute;
  top: -110px;
  text-align: center;
  border-radius: 10px;
  animation: 1s ${zoomInDownAnimation};
  & .finalTypes{
    padding:10px 0 0 0;
  }
`;

const TrainerPokemonName = styled.div`
  font-family: 'PKMN RBYGSC';
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
  text-shadow: -1px -1px 0 #222, 1px -1px 0 #222, -1px 1px 0 #222, 1px 1px 0 #222;
  border-radius: 10px;
  width: fit-content;
  margin: 0 auto 10px auto;
`;
const BlimpWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 100px;
  animation: 1s ${zoomInDownAnimation};
`;

const Blimp = styled.img`
  height: 200px;
  animation: ${infiniteFloat} 10s linear infinite;
`;

const Socials = styled.div`
  position: absolute;
  bottom: 20px;
  left: 55px;
  width: 77px;
  animation: ${infiniteFloat} 10s linear infinite;
  p {
    font-family: 'PKMN RBYGSC';
    font-size: 9px;
    line-height: 10px;
    letter-spacing: -.75px;
    color: white;
    transform: rotateZ(-2deg);
    text-align: center;
  }
`;

const OakTorso = styled.img`
  height: 40px;
  position: absolute;
  top: 377px;
  left: 709px;
`;

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

function Rival({finalScreen}){
  const playerPokeName = getFusionName(finalScreen.player.pkmn1, finalScreen.player.pkmn2);
  const playerPokeTypes = betterFusionTypes(finalScreen.player.pkmn1, finalScreen.player.pkmn2);
  const rivalPokeName = getFusionName(finalScreen.rival.pkmn1, finalScreen.rival.pkmn2);
  const rivalPokeTypes = betterFusionTypes(finalScreen.rival.pkmn1, finalScreen.rival.pkmn2);
  const [playerCry, setPlayerCry] = useState(null);
  const [rivalCry, setRivalCry] = useState(null);
  const [enterZone, setEnterZone] = useState(null);
  const [zoomInSound, setZoomInSound] = useState(null);
  const [anim, setAnim] = useState(0);

  useEffect(() => {
    setPlayerCry(new Audio(`./fused/${finalScreen.player.pkmn1}/${finalScreen.player.pkmn1}.${finalScreen.player.pkmn2}.mp3`));
    setRivalCry(new Audio(`./fused/${finalScreen.rival.pkmn1}/${finalScreen.rival.pkmn1}.${finalScreen.rival.pkmn1}.mp3`));
    setEnterZone(new Audio(`./sounds/SFX_GO_OUTSIDE.wav`));
    setZoomInSound(new Audio(`./sounds/SFX_Start_MENU.wav`));
  }, [])

  useEffect(() => {
    if(anim > 6){return};
    if(anim == 1){
      playerCry.play();
    }
    if(anim == 3){
      rivalCry.play();
    }
    if(anim == 4 || anim == 6){
      setTimeout(function() { 
        zoomInSound.volume = .2;
        zoomInSound.play();
      }, 500);     
    }
    setTimeout(function() { 
      setAnim(anim+1);
    }, 1000);
  }, [anim])

  useEffect(() => {
    if(enterZone == null){return};
    if(anim == 0){
      enterZone.play();
    }
  }, [enterZone])

  return(
    <RivalWrapper>
    <RivalBackground src="/images/stadium-bg.jpg" />
    <OakTorso src="/images/oaksbody-torso.png"/>
      {anim > 0 && 
        <Trainer>
        {anim > 3 && 
          <TrainerCard style={{backgroundColor: `${hex2rgba(playerPokeTypes[0].color, .4)}`, boxShadow: `0 0 20px ${playerPokeTypes[0].color}`}}>
            <TrainerPokemonName>{playerPokeName}</TrainerPokemonName>
            <PokemonTypes pkmn1={finalScreen.player.pkmn1} pkmn2={finalScreen.player.pkmn2} />
          </TrainerCard>
        }
          <TrainerImage src="/images/male-trainer.png" />
          <TrainerPokemon rel="preload" src={`https://images.alexonsager.net/pokemon/fused/${finalScreen.player.pkmn1}/${finalScreen.player.pkmn1}.${finalScreen.player.pkmn2}.png`} alt="" />
        </Trainer>
      }
      {anim > 2 && 
        <Trainer className="rival">
          {anim > 3 && 
            <TrainerCard className="card" style={{backgroundColor: `${hex2rgba(rivalPokeTypes[0].color, .3)}`, boxShadow: `0 0 20px ${rivalPokeTypes[0].color}`}}>
              <TrainerPokemonName>{rivalPokeName}</TrainerPokemonName>
              <PokemonTypes pkmn1={finalScreen.rival.pkmn1} pkmn2={finalScreen.rival.pkmn2} />
            </TrainerCard>
          }
          <TrainerImage src="/images/rival.png" />
          <TrainerPokemon rel="preload" src={`https://images.alexonsager.net/pokemon/fused/${finalScreen.rival.pkmn1}/${finalScreen.rival.pkmn1}.${finalScreen.rival.pkmn2}.png`} alt="" />
        </Trainer>
      }
      {anim > 5 && 
        <BlimpWrapper>
          <Blimp src="/images/blimp.png"/>
          <Socials><p>@<br/>BigFancyBen</p></Socials>
        </BlimpWrapper>
      }
    </RivalWrapper>
  );
}
export default Rival;

