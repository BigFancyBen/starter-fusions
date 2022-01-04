import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import PokemonFusion from './PokemonFusion';
import { getUniqueStarters, getRivalPkmn } from './FusionHelpers';
import PokedexH from './pokedex/PokedexH';
import Rival from '../rival/Rival';

const ClicksOuter = styled.div`
  position: absolute;
  z-index: 4;
  top: 239px;
  left: 802px;
  height: 75px;
  width: 267px;
  display: flex;
  flex-direction: row;
`;
const Pokeball = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  user-select: none;
  user-drag: none;
`;
const PokeballImage = styled.img`
  object-fit: cover;
  width: 55px;
  height: 100%;
  filter: blur(1px);
  user-drag: none;
  &.open{
    object-position: right;
  }
  &.closed{
    object-position: left;
  }
  &.opening{
    object-position: center;
  }
`;


const PokemonOuter = styled.div`
  position: fixed;
  top: 150px;
  left: 50px;
`;



function Pokeballs({changeScene}){
  const [myStarters, setMyStarters] = useState([]);
  const [starter1Showing, setStarter1Showing] = useState(false);
  const [starter2Showing, setStarter2Showing] = useState(false);
  const [starter3Showing, setStarter3Showing] = useState(false);
  const [audio1, setAudio1] = useState(null);
  const [audio2, setAudio2] = useState(null);
  const [audio3, setAudio3] = useState(null);
  const [curSelection, setCurSelection] = useState(null);
  const _pokeball1 = useRef(null);
  const _pokeball2 = useRef(null);
  const _pokeball3 = useRef(null);
  
  const [starterSelected, setStarterSelected] = useState(false);
  const [rivalReady, setRivalReady] = useState(false);
  const [finalScreen, setFinalScreen] = useState(null);
  
  useEffect(() => {
    setMyStarters(getUniqueStarters());
  }, [])

  useEffect(() => {
    if (myStarters.length === 0){return}
    setAudio1(new Audio(`./fused/${myStarters[0].pkmn1}/${myStarters[0].pkmn1}.${myStarters[0].pkmn2}.mp3`));
    setAudio2(new Audio(`./fused/${myStarters[1].pkmn1}/${myStarters[1].pkmn1}.${myStarters[1].pkmn2}.mp3`));
    setAudio3(new Audio(`./fused/${myStarters[2].pkmn1}/${myStarters[2].pkmn1}.${myStarters[2].pkmn2}.mp3`));
  }, [myStarters])

  useEffect(() => {
    if(starterSelected === false){return};
    setFinalScreen(getRivalPkmn({pkmn1:myStarters[curSelection-1].pkmn1, pkmn2:myStarters[curSelection-1].pkmn2}));
  }, [starterSelected])
  
  useEffect(() => {
    if(finalScreen === null){return};
    changeScene('Rival');
    setRivalReady(true);
  }, [finalScreen])

  function animatePokeball(pokeballRef, direction){
    const pokeball = pokeballRef.current;
    const curOpenState = pokeball.classList.contains('closed') ? 'closed' : 'open';
    if( (direction === 'closed' && curOpenState === 'closed') || (direction === 'open' && curOpenState === 'open') ){
      return;
    } else {
      pokeball.classList.add('opening');
      setTimeout(function() { 
        if (pokeball.classList.contains('closed')){
          pokeball.classList.remove('closed');
          pokeball.classList.remove('opening');
          pokeball.classList.add('open');
        }
        else {
          pokeball.classList.remove('opening');
          pokeball.classList.remove('open');
          pokeball.classList.add('closed');
        }
      }, 100);
    }

  }

  function toggleStarters(selection){
    if(selection === 1){
      setCurSelection(1);
      if(starter1Showing){
        setStarter1Showing(false);
        animatePokeball(_pokeball1, 'closed');
      } else {
        setStarter1Showing(true);
        animatePokeball(_pokeball1, 'open');
        audio1.play();
      }
      setStarter2Showing(false);
      animatePokeball(_pokeball2, 'closed');

      setStarter3Showing(false);
      animatePokeball(_pokeball3, 'closed');
    }
    if(selection === 2){
      setCurSelection(2);
      setStarter1Showing(false);
      animatePokeball(_pokeball1, 'closed');
      if(starter2Showing){
        setStarter2Showing(false);
        animatePokeball(_pokeball2, 'closed');
      } else {
        animatePokeball(_pokeball2, 'open');
        setStarter2Showing(true)
        audio2.play();
      }
      setStarter3Showing(false);
      animatePokeball(_pokeball3, 'closed');
    }
    if(selection === 3){
      setCurSelection(3);

      setStarter1Showing(false);
      animatePokeball(_pokeball1, 'closed');

      setStarter2Showing(false);
      animatePokeball(_pokeball2, 'closed');

      if(starter3Showing){
        setStarter3Showing(false);
        animatePokeball(_pokeball3, 'closed');
      } else {
        setStarter3Showing(true)
        animatePokeball(_pokeball3, 'open');
        audio3.play();
      }
    }
  }
  
  return(
    <ClicksOuter>
      <Pokeball onClick={() =>  toggleStarters(1)}><PokeballImage ref={_pokeball1} className="closed" src="/images/pokeball.png " /></Pokeball>
      <Pokeball onClick={() =>  toggleStarters(2)}><PokeballImage ref={_pokeball2} className="closed" src="/images/pokeball.png " /></Pokeball>
      <Pokeball onClick={() =>  toggleStarters(3)}><PokeballImage ref={_pokeball3} className="closed" src="/images/pokeball.png " /></Pokeball>
      <PokemonOuter>
        {(starter1Showing || starter2Showing || starter3Showing) && <PokedexH starterSelected={setStarterSelected} />}
        {starter1Showing && <PokemonFusion pkmn1={myStarters[0].pkmn1} pkmn2={myStarters[0].pkmn2} /> }
        {starter2Showing && <PokemonFusion pkmn1={myStarters[1].pkmn1} pkmn2={myStarters[1].pkmn2} /> }
        {starter3Showing && <PokemonFusion pkmn1={myStarters[2].pkmn1} pkmn2={myStarters[2].pkmn2} /> }
      </PokemonOuter>
      {rivalReady && <Rival finalScreen={finalScreen}/>}
    </ClicksOuter>
  );
}
export default Pokeballs;
