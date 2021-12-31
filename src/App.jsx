import './App.css';
import styled from 'styled-components';
import Pokeballs from './pokemon/Pokeballs';
import Oakcam from './oakcam/Oakcam'
import Intro from './intro/Intro';
import './images/oakslab.png'
import ObsWebSocket from 'obs-websocket-js';
import React, {useState, useEffect} from 'react';


const PokemonOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 720px;
  width: 1280px;

  .bg {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
//<Intro />
function App() {
  const obs = new ObsWebSocket();
  const [activeScene, setActiveScene] = useState(null)
  const [oakWithPkmn, setOakWithPkmn] = useState(false);

  useEffect(() => {
    obs.connect({
      address: 'localhost:4444',
      password: 'verysecurelol'
    })
    .then(() => {
        obs.on('SwitchScenes', data => {
          setActiveScene(data.sceneName);
        });
        return obs.send('GetSceneList');
    }).then(data => {
      setActiveScene(data.currentScene);
    })
    .catch(err => { 
        console.log(err);
    });
  }, [])

  useEffect(() => {
    if(activeScene == 'OakIntroPkmn'){
      setOakWithPkmn(true);
    } else {
      setOakWithPkmn(false);
    }
  }, [activeScene])

  return (
    <PokemonOuter className="App">
      {(activeScene == 'OakIntro'  || activeScene === 'OakIntroPkmn' || activeScene === 'OakIntro-Zoom') && <Intro withPkmn={oakWithPkmn}/>}
      {activeScene ==='OaksLab' && <Pokeballs />}
      <div draggable="false" className="bg"><img src="/images/oakslab.png" alt="" /></div>
    </PokemonOuter>
  );
}

export default App;
