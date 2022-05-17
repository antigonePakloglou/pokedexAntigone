import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemons from './Pokemons';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
     <h3>Pokedex</h3>
     <Pokemons/>
    </div>
  );
}

export default App;
