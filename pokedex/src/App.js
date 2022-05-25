import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pokemons from './Pokemons';
import PokemonCreate from './PokemonCreate';
import {Navbar, Container, Nav} from 'react-bootstrap';
import PokemonFiche from './PokemonFiche';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  
  return (
  <Router>
      <main>
        <div className="App justify-content-center">
          <Navbar style={{background : 'black' }} >
            <Container>
              <Navbar.Brand style={{color : 'white', fontFamily : 'Fantasy', fontSize : '40px' }} href="/">Pokedex</Navbar.Brand>
              <Nav className="me-auto" style={{textAlign : 'center'}}>
              <Nav.Link style={{color : 'white', fontFamily : 'Fantasy', fontSize : '20px' }} href="/">Tous les Pokemons</Nav.Link>
                <Nav.Link style={{color : 'white', fontFamily : 'Fantasy', fontSize : '20px' }} href="/createPokemon">Créer un pokémon</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      <Routes>
      <Route exact path='/*' element={< Pokemons />}></Route>
      <Route exact path='/createPokemon' element={< PokemonCreate />}></Route>
      <Route exact path='/fiche/:id' element={< PokemonFiche />}></Route>
     
      </Routes>
        </div>
      </main>
  </Router>

  );
}

export default App;
