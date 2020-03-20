import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationList from './components/nav/NavigationList';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <NavigationList/>
          </div>
          <div className="col-sm-12 col-md-8">
              <Switch>
                <Route exact path="/" component={PokemonSearch}></Route>
                <Route path="/:name" component={PokemonDetail}/>
              </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
