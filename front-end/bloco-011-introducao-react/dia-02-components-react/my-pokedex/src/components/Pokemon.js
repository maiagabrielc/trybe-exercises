import React from 'react'

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section className="poke-card">
        <img src={pokemon.image} alt={pokemon.name}></img>
        <div>
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <p>Weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
          <p>Id: {pokemon.id}</p>
        </div>
      </section>
    )
  }
}

export default Pokemon;
