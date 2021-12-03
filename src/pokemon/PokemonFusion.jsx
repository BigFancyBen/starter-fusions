import React from 'react';
import styled, { keyframes } from 'styled-components';
import {getFusionName, getFusionTypes} from './FusionHelpers';
import PokemonTypes from './PokemonTypes'
import pokedex from './pokedex.json';
import { headShake } from 'react-animations'

const PokemonDiv = styled.div`
  z-index:3;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 100px;
  user-select: none;
`;

const PokemonName = styled.div`
  font-family: 'PKMN RBYGSC';
  font-size: 22px;
  padding: 10px 0;
  text-align: center;
  color: white;
`;

const DescriptionOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50px;
  left: 427px;
  width: 220px;
  height: 262px;
  img {
    min-height: 0;
  }
`;

const ParentPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
  }
`;

const ParentName = styled.div`
  font-family: 'PKMN RBYGSC';
  font-size: 10px;
  text-align: center;
  margin-top: 10px;
`;

const LeftImage = styled.div`
  height: 275px;
  width: 275px;
  position: relative;
  margin: 42px 0 0 42px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const ParentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

const Title = styled.div`
  font-size: 14px;
  text-align: center;
  background-color: #DEDEDE;
  color: #222;
  font-family: 'PKMN RBYGSC';
  padding: 10px 10px 0 10px;
`;

const PokeID = styled.div`
  font-size: 11px;
  text-align: center;
  background-color: #222;
  color: white;
  font-family: 'PKMN RBYGSC';
  padding: 0 10px 10px 10px;
`;

const DarkWrapper = styled.div`
  background-color: #222;
  border-radius: 5px 5px 0 0;
`;

const LightWrapper = styled.div``;

const headshakeAnimation = keyframes`${headShake}`;

const FusionPokemon = styled.img`
  animation: 1s ${headshakeAnimation};
`;

function PokemonFusion(props){

  return(
    <PokemonDiv >
      <LeftImage>
        <FusionPokemon rel="preload" src={`https://images.alexonsager.net/pokemon/fused/${props.pkmn1}/${props.pkmn1}.${props.pkmn2}.png`} alt="" />
      </LeftImage>
      
      <DescriptionOuter>
        <DarkWrapper>
          <PokemonName>{getFusionName(props.pkmn1, props.pkmn2)}</PokemonName>
          <PokemonTypes pkmn1={props.pkmn1} pkmn2={props.pkmn2} />
          <PokeID>{`ID:  ${props.pkmn1}.${props.pkmn2}`}</PokeID>
        </DarkWrapper>
        <LightWrapper>
          <Title>Parents</Title>
          <ParentWrapper>
            <ParentPokemon>        
              <ParentName>{pokedex[props.pkmn1].name}</ParentName>
              <img rel="preload" src={`https://www.pokencyclopedia.info/sprites/gen3/spr_firered-leafgreen/spr_frlg_${String(props.pkmn1).padStart(3,'0')}.png`} alt="" />
            </ParentPokemon>
            <ParentName>&</ParentName>
            <ParentPokemon>        
              <ParentName>{pokedex[props.pkmn2].name}</ParentName>
              <img rel="preload" src={`https://www.pokencyclopedia.info/sprites/gen3/spr_firered-leafgreen/spr_frlg_${String(props.pkmn2).padStart(3,'0')}.png`} alt="" />
            </ParentPokemon>
          </ParentWrapper>
        </LightWrapper>
      </DescriptionOuter>
    </PokemonDiv>
  );
}
export default PokemonFusion;

