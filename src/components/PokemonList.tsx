import React, { Component } from 'react'
import { Link } from 'react-router-dom';

interface PokemonListProps {
    
}

interface PokemonListState {
    pokemonNames: Array<string>;
    error: boolean;
}

class PokemonList extends Component<PokemonListProps, PokemonListState> {
    constructor(props: PokemonListProps) {
        super(props);

        this.state = {
            error: false,
            pokemonNames: []
        }
    }

    createListPokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=60`).then(
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
                     <Link to={`/pokemon/${name.toLowerCase()}`}>{name}</Link>
                 </li>
             })}
        </ul>
    }
}

export default PokemonList
