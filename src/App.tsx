import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationList from './components/nav/NavigationList';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Router>
            <Switch>
              <Route exact path="/" component={NavigationList}></Route>
              <Route path="/:name" component={PokemonDetail}></Route>
            </Switch>
          </Router>
        </div>
        <div className="col-sm-12 col-md-8">
          <PokemonSearch name="John Doe" numberOfPokemons={5}/>
        </div>
      </div>
    </div>
  );
}

export default App;
