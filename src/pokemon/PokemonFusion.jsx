import React from 'react';
import styled from 'styled-components';
import {getFusionName, getFusionTypes} from './FusionHelpers';
import PokemonTypes from './PokemonTypes'
import pokedex from './pokedex.json';

const PokemonDiv = styled.div`
  margin: 10px;
  border: 10px solid #444;
  border-radius: 50px;
  background-color: #fff9e6;
  z-index:3;
  width: 400px;
  height: 100%;
  
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

const ParentOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    min-height: 0;
  }
`;

const ParentPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  img {
    height: 80px;
    width: 80px;
  }
`;

const ParentName = styled.div`
  font-family: 'PKMN RBYGSC';
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

function PokemonFusion(props){

  return(
    <PokemonDiv >
      <ParentOuter>
        <ParentPokemon>        
          <ParentName>{pokedex[props.pkmn1].name}</ParentName>
          <img rel="preload" src={`https://www.pokencyclopedia.info/sprites/gen3/spr_firered-leafgreen/spr_frlg_${String(props.pkmn1).padStart(3,'0')}.png`} alt="" />
        </ParentPokemon>
        <ParentName>&</ParentName>
        <ParentPokemon>        
          <ParentName>{pokedex[props.pkmn2].name}</ParentName>
          <img rel="preload" src={`https://www.pokencyclopedia.info/sprites/gen3/spr_firered-leafgreen/spr_frlg_${String(props.pkmn2).padStart(3,'0')}.png`} alt="" />
        </ParentPokemon>
      </ParentOuter>
      <PokemonName>{getFusionName(props.pkmn1, props.pkmn2)}</PokemonName>
      <img rel="preload" src={`https://images.alexonsager.net/pokemon/fused/${props.pkmn1}/${props.pkmn1}.${props.pkmn2}.png`} style={{ marginTop: "-40px"}} alt="" />
      <PokemonTypes pkmn1={props.pkmn1} pkmn2={props.pkmn2} />
    </PokemonDiv>
  );
}
export default PokemonFusion;

