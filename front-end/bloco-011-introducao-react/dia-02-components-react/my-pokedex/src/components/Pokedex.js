import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <main className="list">
      {
        pokemons.map((pokemon) =>(
          <Pokemon key={pokemon.id} pokemon={pokemon}/>
        ))
      }
      
      </main>
    )
  }
}

export default Pokedex;
