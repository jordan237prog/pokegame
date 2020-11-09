import React, { Component } from 'react'
import CardRows from "./CardRow"
import "./Pokegame.css"

export default class Pokegame extends Component {
    static  defaultProps = {
		pokemons: [
			{ id: 25, name:"Pikachu", type:"Electic", base_experience: 112 },
			{ id: 4, name:"charmander", type:"fire", base_experience: 63 },
			{ id: 52, name:"Miaous", type:"normal", base_experience: 30 },
			{ id: 11, name:"Metapod", type:"bug", base_experience: 72 },
			{ id: 12, name:"Butterfree", type:"Flying", base_experience: 178 },
			{ id: 39, name:"Jigglepuff", type:"normal", base_experience: 95 },
			{ id: 94, name:"Gengar", type:"poison", base_experience: 225 },
			{ id: 133, name:"Eevee", type:"normal", base_experience: 65 },
		]
	}
    render() {
        function shareCard () {
            window.location.reload(false);;
        } 

        

        let hand1 = []
        let hand2 = [...this.props.pokemons]
        while(hand1.length < hand2.length){
            let randomIndex = Math.floor(Math.random() * hand2.length)
            let randomPokemon = hand2.splice(randomIndex, 1) [0]
            hand1.push(randomPokemon)
        }
         let exp1 = hand1.reduce((exp, pokemons) => exp + pokemons.base_experience, 0)
         let exp2 = hand2.reduce((exp, pokemons) => exp + pokemons.base_experience, 0)
        return (
            <div className="pokegame">
                <h1>🔥welcome to pokegame🔥</h1>
                <h3>The player with the greater Total Exp wins </h3>
                <button className="newGame" onClick={shareCard} >share cards(New Game)</button>
                <CardRows pokemons={hand1} player="Player 1" exp={exp1} isWinner={exp1>exp2} />
                <CardRows pokemons={hand2} player="Player 2" exp={exp2} isWinner={exp2>exp1} />
            </div>
        )
    }
}
