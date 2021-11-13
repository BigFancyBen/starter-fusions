import React from 'react';
import styled from 'styled-components';

const OakOuter = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: rgba(0,0,0,.3);
  top: 14px;
  left: 540px;
  z-index: 5;
`;

function Oakcam(){
  return(
    <OakOuter></OakOuter>
  );
}
export default Oakcam;

