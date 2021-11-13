import './App.css';
import styled from 'styled-components';
import Pokeballs from './pokemon/Pokeballs';
import Oakcam from './oakcam/Oakcam'

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
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

function App() {
  return (
    <PokemonOuter className="App">
      <Oakcam />
      <Pokeballs />
      <div className="bg"><img src="public/images/oakslab.png" alt="" /></div>
    </PokemonOuter>
  );
}

export default App;
