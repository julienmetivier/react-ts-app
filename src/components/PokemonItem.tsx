import React, { Component } from "react";
import Pokemon from '../interfaces/Pokemon.interface';

export class PokemonItem extends Component<Pokemon> {
    render() {
        const {name, numberOfAbilities, baseExperience, numberOfMoves, types, imageUrl} = this.props;


        return (
        <div className="col-12">
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 nopadding">
                            <img src={imageUrl} className="img-pokemon" alt={name}/>
                        </div>
                        <div className="col-sm-8 text-left">
                            <h2 className="capitalize">{name}</h2>
                            <p><b>Number of abilities:</b> {numberOfAbilities}</p> 
                            <p><b>Base experience:</b> {baseExperience}</p>
                            <p><b>Number of moves:</b> {numberOfMoves}</p>
                            <p><b>Type(s):</b> {types.toString().replace(/,/g, ", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PokemonItem