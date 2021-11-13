import React from 'react';
import styled from 'styled-components';
import {getFusionTypes} from './FusionHelpers';

const TypesOuter = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'PKMN RBYGSC';
  font-size: 25px;
  margin-top: -40px;
  justify-content: center;
  align-items: center;
`;
const Type = styled.div`
  width: fit-content;
  border-radius: 30px;
  color: white;
  padding: 8px 15px;
  box-shadow: 2px 2px #444;
  border: 1px solid #444;

  font-family: 'PKMN RBYGSC';
  font-size: 25px;
  color: white;
`;

function PokemonTypes(props){
  const types = getFusionTypes(props.pkmn1, props.pkmn2);
  return(
    <TypesOuter >
      <Type style={{backgroundColor: `${types[0].color}`, marginRight: "10px"}}>{types[0].type}</Type>
      {types.length==2 && <Type style={{backgroundColor: `${types[1].color}`}}>{types[1].type}</Type>}
    </TypesOuter>
  );
}
export default PokemonTypes;
