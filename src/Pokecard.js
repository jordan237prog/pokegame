import React, { Component } from 'react'
import { Box, Container, CssBaseline, Typography   } from '@material-ui/core'
import './Pokecard.css'



const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/`

export default class Pokecard extends Component {
    render() {
        function idConverter(id){
                var str = "" + id
                var patern = "000"
                var ans = patern.substring(0, patern.length - str.length) + str
                return ans     
        }

        let imgSrc = `${POKE_API}${idConverter(this.props.id)}.png`


        return (
            <div className="pokecard">
                
                <div className="pokecard__name">
                    <h2>{this.props.name}</h2>
                </div>
                <img src={imgSrc} />
                <div className="pokecard__abiliy">
                    <p>Type: {this.props.type}</p>
                    <p>Exp: {this.props.exp}</p>
                </div>
                
            </div>
        )
    }
}
