import React from 'react';
import './pokedex.css';

function PokedexH(){
  return(

    <div class="container">
    <div class="left-screen">
      <div class="left-screen__top">
        <div class="light-container">
          <div class="light light--blue">
          </div>
        </div>
        <div class="light light--red"></div>
        <div class="light light--yellow"></div>
        <div class="light light--green"></div>
      </div>
      <div class="left-screen__bottom">
        <div class="main-screen">
          <div class="main-screen__top-lights">
          </div>
          <div id="display" class="main-screen__display">
          </div>
        </div>
      </div>
      <div class="left-screen__joint">
        <div class="joint"></div>
        <div class="joint"></div>
        <div class="joint"></div>
        <div class="joint"></div>
        <div class="joint__reflextion"></div>
      </div>
    </div>
    <div class="right-screen">
      <div class="right-screen__top">
        <div class="right-screen__fix"></div>
      </div>
      <div class="right-screen__bottom">
        <div class="info-container">
          <section class="info-screen">

          </section>
        </div>
      </div>
    </div>
    </div>
  );
}
export default PokedexH;


