import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './CardRow.css'


export default class CardRow extends Component {

    render() {
        return (
            <div className="cardrow">
				<div className={`cardrow__title ${(this.props.isWinner && "cardrow--winner" || "cardrow--loser" )}`} >
					<h1>{this.props.player || "Pokedex"} {this.props.isWinner && " is the Winner 👍" || " is the Loser 👎"}</h1>
					<p>Total exp Points is {this,this.props.exp || 0}</p>
					
				</div>
				<div className="cardrow__pokecard">
					{this.props.pokemons.map((pokemon) => (
						<Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />
					))}
				</div>
            </div>
        )
    }
}
