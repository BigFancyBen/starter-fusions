import React from 'react';
import './pokedex.css';

function PokedexH(){
  return(

    <div className="container">
    <div className="left-screen">
      <div className="left-screen__top">
        <div className="light-container">
          <div className="light light--blue">
          </div>
        </div>
        <div className="light light--red"></div>
        <div className="light light--yellow"></div>
        <div className="light light--green"></div>
      </div>
      <div className="left-screen__bottom">
        <div className="main-screen">
          <div className="main-screen__top-lights">
          </div>
          <div id="display" className="main-screen__display">
          </div>
        </div>
      </div>
      <div className="left-screen__joint">
        <div className="joint"></div>
        <div className="joint"></div>
        <div className="joint"></div>
        <div className="joint"></div>
        <div className="joint__reflextion"></div>
      </div>
    </div>
    <div className="right-screen">
      <div className="right-screen__top">
        <div className="right-screen__fix"></div>
      </div>
      <div className="right-screen__bottom">
        <div className="info-container">
          <section className="info-screen">

          </section>
        </div>
      </div>
    </div>
    </div>
  );
}
export default PokedexH;


