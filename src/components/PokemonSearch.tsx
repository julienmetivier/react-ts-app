import React, { Component } from "react";
import User from '../interfaces/User.interface';
import Pokemon from '../interfaces/Pokemon.interface';
import PokemonItem from './PokemonItem';
import { Link } from 'react-router-dom';

interface SearchState {
    error: boolean,
    pokemons: Pokemon[]
}

export class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User){
        super(props);
        this.pokemonRef = React.createRef();
        this.state = {
            error: false,
            pokemons: []
        }
    }

    onSearchClick = () => {
        const inputValue = this.pokemonRef.current?.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(
            res => {
                if(res.status !== 200){
                    this.setState({ error:true });
                    return;
                }
                res.json().then(
                    data => {
                        let types: string[] = [];
                        for (let type of data.types) {
                            let typeCapitalized:string = type.type.name;
                            types.push(typeCapitalized[0].toUpperCase() + typeCapitalized.slice(1));
                        }
                        let tempPokemons = this.state.pokemons;
                        tempPokemons.push({
                            name: data.name,
                            numberOfAbilities: data.abilities.length,
                            baseExperience: data.base_experience,
                            numberOfMoves: data.moves.length,
                            types: types,
                            imageUrl: data.sprites.front_default
                        });
                        this.setState({
                            error: false,
                            pokemons: tempPokemons
                        });
                    }
                )
            }
        )
    }

    render() {
        const {name: userName, numberOfPokemons} = this.props;
        const {error, pokemons} = this.state;
        let resultMarkup = [];

        if(error){
            resultMarkup = [];
            resultMarkup.push(<p>Pokemon not found, please try again</p>);
        } else if (this.state.pokemons) {
            for(let pokemon of pokemons) {
                resultMarkup.push(<PokemonItem key={pokemon.name}
                    name={pokemon.name} 
                    numberOfAbilities={pokemon.numberOfAbilities}  
                    baseExperience={pokemon.baseExperience}
                    numberOfMoves={pokemon.numberOfMoves}
                    types={pokemon.types}
                    imageUrl={pokemon.imageUrl}/>);
            }
        }

        return  ( 
            <div>
                <div className="input-group offset-sm-1 col-sm-10 offset-md-2 col-md-8 mb-3">
                    <input type="text" className="form-control" aria-label="Default" ref={this.pokemonRef}/>
                    <button onClick={this.onSearchClick} className="btn btn-primary">
                        Search
                    </button>
                </div>
                <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8 mb-3">
                    {resultMarkup}
                </div>
            </div>
        )
    }
}

export default PokemonSearch
