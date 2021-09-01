import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, image, averageWeight: { value: weight, measurementUnit: unit } } = this.props.pokemon;
    
    return(
      <div className="pokemon">
        <div className="info">
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso: {weight} {unit}</p>
        </div>
        <img src={image} alt={id}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;