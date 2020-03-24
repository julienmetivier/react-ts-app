import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Pokemon from '../interfaces/Pokemon.interface';
import PokemonItem from './PokemonItem';
import PokemonNavList from './PokemonNavList';

export default class PokemonDetail extends React.Component<PokemonDetailProps, PokemonDetailState> {
    constructor(props: PokemonDetailProps) {
        super(props);
        this.state = {
            name : this.props.match.params.name,
            error: false,
            pokemon: null
        };
    }

    componentDidMount() {
        this.findPokemon(this.state.name);
    }

    componentWillReceiveProps(nextProps: any){
        if(nextProps.match.params.name !== this.state.name){
            this.findPokemon(nextProps.match.params.name);
        }
    }

    findPokemon = (name: string) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
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
                        let tempPokemonData = {
                            name: data.name,
                            numberOfAbilities: data.abilities.length,
                            baseExperience: data.base_experience,
                            numberOfMoves: data.moves.length,
                            types: types,
                            imageUrl: data.sprites.front_default
                        };
                        

                        this.setState({
                            name: name,
                            error: false,
                            pokemon: tempPokemonData
                        });
                    }
                )
            }
        )
    }

    render() {
        const {error, pokemon} = this.state;
        let resultMarkup;

        if(error){
            resultMarkup = [];
            resultMarkup.push(<p>Pokemon not found, please try again</p>);
        } else if (this.state.pokemon) {
            resultMarkup = (
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <PokemonNavList/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                    <PokemonItem key={pokemon.name}
                        name={pokemon.name} 
                        numberOfAbilities={pokemon.numberOfAbilities}  
                        baseExperience={pokemon.baseExperience}
                        numberOfMoves={pokemon.numberOfMoves}
                        types={pokemon.types}
                        imageUrl={pokemon.imageUrl}/>
                    </div>
                </div>
            );
        }
        else {
            resultMarkup = [];
            resultMarkup.push(<p>Still looking...</p>);
        }

        return (
            resultMarkup
        )
    }
}

interface PokemonDetailProps extends RouteComponentProps<{ name: string }> {

}

interface PokemonDetailState {
    name: string;
    error: boolean;
    pokemon: Pokemon;
}