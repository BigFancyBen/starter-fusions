import React from 'react';
import styled from 'styled-components';
import {getFusionName, getFusionTypes} from './FusionHelpers';
import PokemonTypes from './PokemonTypes'

const PokemonDiv = styled.div`
  margin: 10px;
  border: 10px solid #444;
  border-radius: 50px;
  background-color: #fff9e6;
  z-index:3;
  width: 400px;
  height: 490px;
  
  img {
    width: 100%;
    min-height: 400px;
  }
`;

const PokemonName = styled.div`
  font-family: 'PKMN RBYGSC';
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
`;

function PokemonFusion(props){

  return(
    <PokemonDiv >
      <PokemonName>{getFusionName(props.pkmn1, props.pkmn2)}</PokemonName>
      <img src={`https://images.alexonsager.net/pokemon/fused/${props.pkmn1}/${props.pkmn1}.${props.pkmn2}.png`} alt="" />
      <PokemonTypes pkmn1={props.pkmn1} pkmn2={props.pkmn2} />
    </PokemonDiv>
  );
}
export default PokemonFusion;

