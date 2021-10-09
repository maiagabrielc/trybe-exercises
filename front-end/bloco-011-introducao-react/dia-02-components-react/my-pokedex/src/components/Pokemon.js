import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id } } = this.props;
    return (
      <section className="poke-card">
        <img src={image} alt={name}></img>
        <div>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
          <p>Id: {id}</p>
        </div>
      </section>
    )
  }
}

Pokemon.proptype = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Pokemon;
