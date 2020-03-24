import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import NavigationList from './components/PokemonNavList';
import PokemonDetail from './components/PokemonDetail';
import Home from './components/Home';
import TopHeader from './components/nav/TopHeader';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader></TopHeader>
        <div className="row">
          <div className="col-12 mt-5">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/search" component={PokemonSearch}></Route>
                <Route exact path="/pokemon" component={PokemonList}></Route>
                <Route path="/pokemon/:name" component={PokemonDetail}/>
              </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
