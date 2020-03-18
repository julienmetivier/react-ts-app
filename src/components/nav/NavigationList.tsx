import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationList extends React.Component<NavigationListProps, NavigationListState> {
    constructor(props: NavigationListProps) {
        super(props);

        this.state = {
            error: false,
            pokemonNames: []
        }
    }

    createListPokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon`).then(
            res => {
                if(res.status !== 200){
                    this.setState({ error:true });
                    return;
                }
                res.json().then(
                    data => {
                        let pokemons: string[] = [];
                        for (let pokemon of data.results) {
                            let pokemonNameCapitalized:string = pokemon.name;
                            pokemons.push(pokemonNameCapitalized[0].toUpperCase() + pokemonNameCapitalized.slice(1));
                        }
                        this.setState({
                            error: false,
                            pokemonNames: pokemons
                        });
                    }
                )
            }
        )
    }

    render() {
        this.createListPokemons();
        return <ul className="list-group">
             {this.state.pokemonNames.map(name => {
                 return <li className="list-group-item">
                     <Link to={`/${name.toLowerCase()}`}>{name}</Link>
                 </li>
             })}
        </ul>
    }
}

interface NavigationListProps {

}

interface NavigationListState {
    pokemonNames: Array<string>;
    error: boolean;
}