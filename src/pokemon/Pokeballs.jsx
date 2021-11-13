import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PokemonFusion from './PokemonFusion';
import { getStarterGroup } from './FusionHelpers';

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
  background-color: rgba(0,0,0,.3);
  border: 1px solid black;
`;


const PokemonOuter = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
`;



function Pokeballs(props){
  const [myStarters, setMyStarters] = useState([]);
  const [starter1Showing, setStarter1Showing] = useState(false);
  const [starter2Showing, setStarter2Showing] = useState(false);
  const [starter3Showing, setStarter3Showing] = useState(false);
  
  useEffect(() => {
    setMyStarters(getStarterGroup());
  }, [])

  function toggleStarters(selection){
    if(selection === 1){
      setStarter1Showing(true);
      setStarter2Showing(false);
      setStarter3Showing(false);
    }
    if(selection === 2){
      setStarter1Showing(false);
      setStarter2Showing(true);
      setStarter3Showing(false);
    }
    if(selection === 3){
      setStarter1Showing(false);
      setStarter2Showing(false);
      setStarter3Showing(true);
    }
  }

  return(
    <ClicksOuter>
      <Pokeball onClick={() =>  toggleStarters(1)}/>
      <Pokeball onClick={() =>  toggleStarters(2)}/>
      <Pokeball onClick={() =>  toggleStarters(3)}/>

      <PokemonOuter>
        {starter1Showing && <PokemonFusion pkmn1={myStarters[0].pkmn1} pkmn2={myStarters[0].pkmn2} /> }
        {starter2Showing && <PokemonFusion pkmn1={myStarters[1].pkmn1} pkmn2={myStarters[1].pkmn2} /> }
        {starter3Showing && <PokemonFusion pkmn1={myStarters[2].pkmn1} pkmn2={myStarters[2].pkmn2} /> }
      </PokemonOuter>
    </ClicksOuter>
  );
}
export default Pokeballs;
