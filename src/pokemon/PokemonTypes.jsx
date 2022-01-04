import React from 'react';
import styled from 'styled-components';
import {getFusionTypes, betterFusionTypes} from './FusionHelpers';

const TypesOuter = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'PKMN RBYGSC';
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;
const Type = styled.div`
  width: fit-content;
  border-radius: 30px;
  color: white;
  padding: 4px 8px;
  box-shadow: 1px 1px #444;
  border: 1px solid #444;
  font-family: 'PKMN RBYGSC';
  font-size: 12px;
  color: #222;
  text-transform: uppercase;
`;

function PokemonTypes(props){
  const types = betterFusionTypes(props.pkmn1, props.pkmn2);
  return(
    <TypesOuter >
      <Type style={{backgroundColor: `${types[0].color}`, marginRight: "10px"}}>{types[0].type}</Type>
      {types.length==2 && <Type style={{backgroundColor: `${types[1].color}`}}>{types[1].type}</Type>}
    </TypesOuter>
  );
}
export default PokemonTypes;

